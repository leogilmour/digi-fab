#include <Stepper.h>
#include <WiFi.h>
#include <ESPmDNS.h>
#include <WebServer.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <NTPClient.h>
#include <WiFiUDP.h>

// CSS to scroll by
const char *css = R"(
    * {
    box-sizing: border-box;
    }
    body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background: #0f172a;
    color: #e2e8f0;
    }
    .container {
    max-width: 600px;
    margin: 0 auto;
    }
    .grid {
    display: grid;
    grid-template-columns: 1fr max-content;
    }
    form {
    background: #1e293b;
    padding: 32px;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
    border: 1px solid #334155;
    }
    h1 {
    font-size: 1.875rem; /* 30px */
    font-weight: 700;
    margin-bottom: 2rem;
    color: #f1f5f9;
    text-align: center;
    }
    label {
    display: block;
    font-weight: 500;
    margin-bottom: 8px;
    color: #cbd5e1;
    }
    select, button, input {
    width: 100%;
    padding: 12px 16px;
    font-size: 16px; /* Prevents zoom on mobile */
    border: 2px solid #475569;
    border-radius: 4px;
    background: #334155;
    color: #e2e8f0;
    transition: all 0.2s ease; /* Smooth interactions */
    }
    select:focus, input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    background: #475569;
    }
    input.reset {
    display: none;
    }
    button {
    background: linear-gradient(135deg, #3b82f6 0%, #ff7554 100%);
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 16px;
    font-family: inherit;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;
    }
    button.cancel {
    background: linear-gradient(135deg, #ff7554 0%, #d81d86 100%);
    }
    button:hover {
    transform: translateY(-1px); /* Subtle lift effect */
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
    }
    button:active {
    transform: translateY(0);
    }
    .status {
    background: #0f172a;
    border: 1px solid #3b82f6;
    border-radius: 4px;
    padding: 16px;
    margin: 16px 0;
    color: #93c5fd;
    }
)";

// WIFI ENV VARS:
const char *ssid = "MAKERSPACE";
const char *password = "12345678";

// SERVER:
WebServer server(80);
WiFiUDP ntpUDP;

// CLOCK UPDATES:
// By default 'pool.ntp.org' is used with 60 seconds update interval and
// no offset
NTPClient timeClient(ntpUDP);
// from the UK it might make more sense to query
// NTPClient timeClient(ntpUDP, "europe.pool.ntp.org", 3600, 60000);
int userSetTimeZone = 0;
String userSetReadyTime = "";
int adjustedUserHour = 0;
int adjustedUserMins = 0;
int adjustedReadyUserHour = 0;
int adjustedReadyUserMins = 0;
String gmtTimeLastChecked = "";
const String userHour = "";
const String userMins = "";

// USER TEA MAKING VARS:
bool start_tea_machine = false;
bool start_brewing = false;
unsigned long targetMinutesToSteep = 0;

// Global Constants:
const float TARGET_THERM_READING = 370;
const int POUR_TIMEOUT_MILLIS = 30000;
// other timeouts to be added here:
// hot pot timeout?
// stepper timeout?
unsigned long maxHeatingTimeMins = 5; // 1 hour heating time
unsigned long maxHeatingTimeHour = 0; // 1 hour heating time

// // Water Level Environment Variables
// const int WATER_LEVEL_HIGH = 6;
// const int WATER_LEVEL_LOW = 38;
// TEMPORARY
const int WATER_LEVEL_HIGH = 100;
const int WATER_LEVEL_LOW = 200;
const int WATER_TOLERANCE = 8; // messy. need to refine.

// pin variables
const int water_level_touch_pin = T8; // ESP-WROOM-32: T8 = touch pin 8 = D33 = +ve
const int heating_pin = 33;
const int thermistor_pin = 35; // (and need a resistor in parallel)
const int water_motor_a_pin = 13;
const int water_motor_b_pin = 12;
const int strainer_motor_a = 14;
const int strainer_motor_b = 27;
const int strainer_motor_c = 26;
const int strainer_motor_d = 25;

// KEEP stepper initialization:
const int stepsPerRevolution = 2048;
Stepper myStepper(stepsPerRevolution, strainer_motor_a, strainer_motor_c, strainer_motor_b, strainer_motor_d);

// water level class
class WaterSensor
{
    private:
        int touch_pin;
        int high_water;
        int low_water;
        int tolerance;
        int reading;

    public:
    WaterSensor(int water_level_touch_pin, int WATER_LEVEL_HIGH, int WATER_LEVEL_LOW, int WATER_TOLERANCE)
        : touch_pin(water_level_touch_pin), high_water(WATER_LEVEL_HIGH), low_water(WATER_LEVEL_LOW), tolerance(WATER_TOLERANCE), reading(0) {}

    void initialize()
    {
        reading = touchRead(touch_pin);
    }

    bool is_there_water()
    {
        return true;
        if (reading > (low_water + tolerance))
        {
            return false;
        }
        if (reading < (high_water + tolerance))
        {
            return true;
        }
    }
};

class DCMotor
{
    private:
        bool isRunning;

    public:
        DCMotor() : isRunning(false) {}

    void initialize()
    {
        digitalWrite(water_motor_a_pin, LOW);
        digitalWrite(water_motor_b_pin, LOW);
    }

    void start(int direction)
    {
        if (direction > 0)
        {
            digitalWrite(water_motor_a_pin, HIGH);
            digitalWrite(water_motor_b_pin, LOW);
        }
        else
        {
            digitalWrite(water_motor_a_pin, LOW);
            digitalWrite(water_motor_b_pin, HIGH);
        }

        isRunning = true;
    }

    void stop()
    {
        digitalWrite(water_motor_a_pin, LOW);
        digitalWrite(water_motor_b_pin, LOW);
        isRunning = false;
    }
};

class StepperMotor
{
    private:
        Stepper *stepper;
        int stepsPerRev;
        int currentPosition;

    public:
        StepperMotor(Stepper *stepperPtr, int steps)
            : stepper(stepperPtr), stepsPerRev(steps), currentPosition(0) {}

    void initialize()
    {
        stepper->setSpeed(10);
    }

    void moveToHome()
    {
        // Move back to starting position
        stepper->step(-currentPosition);
        currentPosition = 0;
        Serial.println("Tea strainer moved to home position");
    }

    void moveSteps(int steps)
    {
        stepper->step(steps);
        currentPosition += steps;
    }

    void stop()
    {
        // Stepper motors don't need active stopping
    }
};

// boiler class
class Boiler
{
    private:
        float targetThermReadng; // nice Claude addition but will need to be thermistor calibrated

    public:
        Boiler(float targetReading = TARGET_THERM_READING)
            : targetThermReadng(targetReading) {}

    void initialize()
    {
        Serial.println("Initialise boiler");
        digitalWrite(heating_pin, LOW);
    }

    bool isWaterHot()
    {
        int val = analogRead(thermistor_pin);
        if (val < targetThermReadng) {
            return true;
        } else {
            return false;
        }
    }
};

class TeaMakingStateMachine
{
    public:
        enum State
        {
            IDLE,
            CHECKING_WATER_LEVEL,
            HEATING_WATER,
            POURING_WATER,
            BREWING_TEA,
            TEA_READY,
            ERROR_NO_WATER,
            ERROR_SYSTEM
        };

    private:
        State currentState;
        State previousState;
        unsigned long stateStartTimeMillis;
        unsigned long brewDurationMillis;

    // Dependencies
    WaterSensor *waterSensor; // Pointer to externally created sensor to be injected
    DCMotor *waterMotor;      // asterisk is C++ pointer declaration
    StepperMotor *teaMotor;
    Boiler *boiler;

    // Configuration
    
    unsigned long pourTimeoutMillis = POUR_TIMEOUT_MILLIS;

    public:
        TeaMakingStateMachine(WaterSensor *ws, DCMotor *wm, StepperMotor *tm, Boiler *b = nullptr)
            : currentState(IDLE), previousState(IDLE), stateStartTimeMillis(0),
            brewDurationMillis(),
            waterSensor(ws), waterMotor(wm), teaMotor(tm), boiler(b) {}

    void update()
    {
        unsigned long currentTimeMillis = millis();
        unsigned long timeInStateMillis = currentTimeMillis - stateStartTimeMillis;

        switch (currentState)
        {
        case IDLE:
            handleIdleState();
            break;

        case CHECKING_WATER_LEVEL:
            handleCheckingWaterState();
            break;

        case HEATING_WATER:
            handleHeatingWaterState(timeInStateMillis);
            break;

        case POURING_WATER:
            handlePouringWaterState(timeInStateMillis);
            break;

        case BREWING_TEA:
            handleBrewingTeaState(timeInStateMillis);
            break;

        case TEA_READY:
            handleTeaReadyState();
            break;

        case ERROR_NO_WATER:
            handleErrorNoWaterState();
            break;

        case ERROR_SYSTEM:
            handleErrorSystemState();
            break;
        }
    }

    void reset()
    {
        // Emergency stop all motors
        waterMotor->stop();
        teaMotor->stop();
        // perhaps add stop for heaters too
        if (boiler) {
            digitalWrite(heating_pin, LOW);
            Serial.println("Boiler: Heating element OFF");
        }

        // Reset tea strainer to initial position
        teaMotor->moveToHome();

        // if (!waterSensor->is_there_water())
        // {
        //     transitionTo(ERROR_NO_WATER);
        //     return;
        // }

        Serial.println("System reset - ready for new brew cycle");
        transitionTo(IDLE);
    }

    String getStateString(State state) const
    {
        switch (state)
        {
        case IDLE:
            return "Idle";
        case CHECKING_WATER_LEVEL:
            return "Checking Water";
        case HEATING_WATER:
            return "Heating Water";
        case POURING_WATER:
            return "Pouring Water";
        case BREWING_TEA:
            return "Brewing Tea";
        case TEA_READY:
            return "Tea Ready!";
        case ERROR_NO_WATER:
            return "Error: No Water";
        case ERROR_SYSTEM:
            return "System Error";
        default:
            return "Unknown";
        }
    }

    private:
        void transitionTo(State newState)
        {
            if (newState != currentState)
            {
                onStateExit(currentState);
                previousState = currentState;
                currentState = newState;
                // I like that Claude has added this. Will be useful data and debugging:
                stateStartTimeMillis = millis();
                onStateEnter(newState);

                Serial.print("State transition: ");
                Serial.print(getStateString(previousState));
                Serial.print(" -> ");
                Serial.println(getStateString(currentState));
            }
        }

        void onStateEnter(State state)
        {
            switch (state)
            {
            case CHECKING_WATER_LEVEL:
                Serial.println("Checking water level...");
                break;

            case HEATING_WATER:
                Serial.println("Starting to heat water...");    
                Serial.println("heating_pin:");
                Serial.println(heating_pin);
                digitalWrite(heating_pin, HIGH);
                Serial.println("Boiler: Heating element ON");
                break;

            case POURING_WATER:
                Serial.println("Pouring hot water over tea...");
                waterMotor->start(-1); // Pour direction
                break;

            case BREWING_TEA:
                Serial.println("Tea is brewing...");
                break;

            case TEA_READY:
                Serial.println("Tea is ready! Enjoy!");
                // Could trigger notification, LED, buzzer, etc.
                break;
            }
        }

        void onStateExit(State state)
        {
            switch (state)
            {
            case HEATING_WATER:
                Serial.println("stopping heating");
                digitalWrite(heating_pin, LOW);
                Serial.println("Boiler: Heating element OFF");
                break;
            case POURING_WATER:
                Serial.println("stopping water motor");
                waterMotor->stop();
                break;
            case BREWING_TEA:
                // Remove tea bag/strainer
                Serial.println("removing teabag motor");
                teaMotor->moveToHome(); // Lift tea strainer
                Serial.println("Removing tea strainer...");
                break;
            case TEA_READY:
                userSetReadyTime = "";
                targetMinutesToSteep = 0;
                start_tea_machine = false;
                start_brewing = false;
                break;
            }
        }

        void handleIdleState()
        {
            if (start_tea_machine) {
                brewDurationMillis = targetMinutesToSteep * 60 * 1000;
                // Skipping water level step with out capacitive touch sensors
                // transitionTo(CHECKING_WATER_LEVEL);
                transitionTo(HEATING_WATER);
            }
        }

        // NOT TO BE USED FOR THIS VERSION
        void handleCheckingWaterState()
        {
            if (waterSensor->is_there_water())
            {
                transitionTo(HEATING_WATER);
            }
            else
            {
                transitionTo(ERROR_NO_WATER);
            }
        }

        void handleHeatingWaterState(unsigned long timeInStateMillis)
        {
            if (boiler->isWaterHot() && start_brewing)
            {
                Serial.println("Water is hot!");
                transitionTo(POURING_WATER);
            }
            else if (timeInStateMillis > (maxHeatingTimeMins * 60 * 1000))
            {
                Serial.println("Heating timeout - assuming water is ready");
                transitionTo(POURING_WATER);
            }
        }

        void handlePouringWaterState(unsigned long timeInStateMillis)
        {
            // Check if enough water has been poured
            if (!waterSensor->is_there_water() || timeInStateMillis > pourTimeoutMillis)
            {
                transitionTo(BREWING_TEA);
            }
        }

        void handleBrewingTeaState(unsigned long timeInStateMillis)
        {
            if (timeInStateMillis >= brewDurationMillis)
            {
                transitionTo(TEA_READY);
            }
        }

        void handleTeaReadyState()
        {
            // Check tea bag winds up
            // A nice LED?
            // Tea is ready - wait for user to reset
        }

        // should not be used for this version
        void handleErrorNoWaterState()
        {
            Serial.println("Please add water and press resume");
            // Could flash LED
            // Check if water has been added
            if (waterSensor->is_there_water())
            {
                transitionTo(IDLE);
            }
        }

        void handleErrorSystemState()
        {
            Serial.println("System error - please reset");
            // All motors should be stopped
            // Wait for manual reset
        }
};

// Create hardware wrapper objects
WaterSensor waterSensor(water_level_touch_pin, WATER_LEVEL_HIGH, WATER_LEVEL_LOW, WATER_TOLERANCE);
DCMotor waterMotor;
StepperMotor teaMotor(&myStepper, stepsPerRevolution);
Boiler boiler;

// Create state machine
TeaMakingStateMachine teaMakingMachine(&waterSensor, &waterMotor, &teaMotor, &boiler);

// LOCAL SERVER WEB PAGES:
void handleCSS()
{
  server.send(200, "text/css", css);
}
void handleRoot()
{
  Serial.println("in handle root");
  Serial.println("targetMinutesToSteep:");
  Serial.println(targetMinutesToSteep);
  Serial.println("userSetReadyTime:");
  Serial.println(userSetReadyTime);

  String html = "<!DOCTYPE html>"
                "<html lang='en'>"
                "<head>"
                "<meta charset='UTF-8' />"
                "<meta name='viewport' content='width=device-width, initial-scale=1.0' />"
                "<title>Tea-o-Matic-Steep-a-Tron</title>"
                "<link rel='stylesheet' href='/style.css' />"
                "<link rel='icon' type='image/x-icon' href='https://static.vecteezy.com/system/resources/previews/002/637/451/non_2x/red-coffee-cup-beverage-icon-isometric-style-free-vector.jpg' />"
                "</head>"
                "<body><div class='container'>"
                "<h1>"
                "The Caractacus (Tea) Potts<br/>Tea-o-Matic-Steep-a-Tron"
                "</h1>";
  if (targetMinutesToSteep == 0)
  {
    // Show the form
    html += "<form action=\"/api/schedule-tea\" method=\"post\">"
            "<label for=\"readyTime\">"
            "At what time would you like your tea?"
            "</label>"
            "<div class='grid'>"
            "<input type='time' step='300' id='readyTime' name='readyTime' value='08:00' />"
            "<select name=\"timeZone\" id=\"timeZone\">"
              "<option value=\"0\">GMT</option>"
              "<option value=\"1\">BST</option>"
              "<option value=\"-4\">EST</option>"
            "</select>"
            "</div>"
            "<br/>"
            "<br/>"
            "<label for=\"steepTime\">"
            "How long would you like your tea to steep for?"
            "</label>"
            "<br />"
            "<select name=\"steepTime\" id=\"steepTime\">"
            "<option value=\"1\">1 minute</option>"
            "<option value=\"2\">2 minutes</option>"
            "<option value=\"3\">3 minutes</option>"
            "<option value=\"4\">4 minutes</option>"
            "<option value=\"5\">5 minutes</option>"
            "</select>"
            "<br/>"
            "<button type=\"submit\">Wake me with tea!</button>"
            "</form>";
  }
  else
  {
    String userTimeZoneString = "GMT";
    if (userSetTimeZone == 1) {
        userTimeZoneString = "BST";
    } else if (userSetTimeZone == -4) {
        userTimeZoneString = "EST";
    }
    html += "<form action='/api/schedule-tea' method='post'>"
            "<p>Tea scheduled to brew for " +
            String(targetMinutesToSteep) + " minutes. It will be ready by " + String(userSetReadyTime) + " " + String(userTimeZoneString) + " ☕️</p>"
            "<input hidden readonly class='reset' name='readyTime' id='readyTime' value='0' type='time' step='300' />"
            "<input hidden readonly class='reset' name='steepTime' id='steepTime' value='0' type='text' />"
            "Last updated at " + String(gmtTimeLastChecked) + " GMT"
            "<button class='reset'>Cancel scheduled tea</button></form>";
  }
  html += "</div></body>"
          "</html>";
  server.send(200, "text/html", html);
}

void handleScheduleTea()
{
  // Check if this is a POST request
  if (server.method() != HTTP_POST)
  {
    server.send(405, "text/plain", "Method Not Allowed");
    return;
  }

  // Check form data
  if (!server.hasArg("readyTime"))
  {
    server.send(400, "text/plain", "Missing readyTime parameter");
    return;
  }
  // Check for steep data
  if (!server.hasArg("steepTime"))
  {
    server.send(400, "text/plain", "Missing steepTime parameter");
    return;
  }

  // Get the steepTime value from the form
  userSetReadyTime = server.arg("readyTime");

  // Get the steepTime value from the form
  String steepTimeStr = server.arg("steepTime");
  targetMinutesToSteep = steepTimeStr.toInt();

  if (server.hasArg("timeZone")) {
    String formTimeZoneStr = server.arg("timeZone");
    userSetTimeZone = formTimeZoneStr.toInt();
  }

  if (targetMinutesToSteep == 0) {
    start_tea_machine = false;
    start_brewing = false;
  } else {
    adjustTime();
  }

  // Process the tea making request
  Serial.println("Tea request received!");
  Serial.print("Steep time: ");
  Serial.print(targetMinutesToSteep);
  Serial.print("Ready time: ");
  Serial.println(userSetReadyTime);

  // redirect user to homepage
  server.sendHeader("Location", "/");
  server.send(302, "text/plain", "");
}

void handleStatus()
{
  server.send(200, "application/json", "{'status':'ok','uptime':" + String(millis()) + "}");
}

void handleNotFound()
{
  server.send(404, "text/plain", "Not found");
}

void adjustTime() {
  // if NOW minutes since midnight > READY minutes since midnight
  // else if NOW mins since mid < READY mins since mid
  // e.g. time now = 23:11 alarm time = 07:05
  if (userSetReadyTime.length() == 0) { return; }

  // user set time
  String userHour = String(userSetReadyTime[0]) + String(userSetReadyTime[1]);
  String userMins = String(userSetReadyTime[3]) + String(userSetReadyTime[4]);
  // adjusting times for timezone and brew time
  adjustedUserHour = userHour.toInt() - userSetTimeZone;
  if (adjustedUserHour > 23) {
    adjustedUserHour = adjustedUserHour - 24;
  }
  if (adjustedUserHour < 0) {
    adjustedUserHour = adjustedUserHour + 24;
  }
// just timezone adjusted:
  adjustedReadyUserHour = adjustedUserHour;
  adjustedReadyUserMins = userMins.toInt();

// adjusting hour and mins for brew time:
  adjustedUserMins = adjustedReadyUserMins - targetMinutesToSteep;
  if (adjustedUserMins > 59) {
    adjustedUserMins = adjustedUserMins - 60;
    adjustedUserHour = adjustedUserHour + 1;
  }
  if (adjustedUserMins < 0) {
    adjustedUserMins = adjustedUserMins + 60;
    adjustedUserHour = adjustedUserHour - 1;
  }
    // adjust hour again for overflow
    if (adjustedUserHour > 23) {
    adjustedUserHour = adjustedUserHour - 24;
  }
  if (adjustedUserHour < 0) {
    adjustedUserHour = adjustedUserHour + 24;
  }
}

void checkTime()
{ 
  // GMT clock time
  const String clockTime = timeClient.getFormattedTime();
  const String clockHour = String(clockTime[0]) + String(clockTime[1]);
  const String clockMins = String(clockTime[3]) + String(clockTime[4]);

  gmtTimeLastChecked = clockHour + ":" + clockMins;

  // update time update to every 10mins in the run up hour.
  if (adjustedUserHour - 1 == clockHour.toInt()) {
    timeClient.setUpdateInterval(10000);
  }

  if (targetMinutesToSteep != 0 && start_tea_machine == false && ((adjustedUserHour - maxHeatingTimeHour) == clockHour.toInt() && (adjustedUserMins - maxHeatingTimeMins) <= clockMins.toInt())) {
    // MAKE TEA
    start_tea_machine = true;
  }
  if (start_tea_machine && adjustedReadyUserHour == clockHour.toInt() && adjustedReadyUserMins <= clockMins.toInt()) {
    start_brewing = true;
  }
}

void setup()
{
    Serial.begin(115200);

    // SLOW COOKER SET UP
    pinMode(heating_pin, OUTPUT);
    digitalWrite(heating_pin, LOW);
    boiler.initialize();

    // THERMISTOR set up
    pinMode(thermistor_pin, INPUT);

    // water level
    waterSensor.initialize();

    // WATER MOTOR set up
    pinMode(water_motor_a_pin, OUTPUT);
    pinMode(water_motor_b_pin, OUTPUT);
    digitalWrite(water_motor_a_pin, LOW);
    digitalWrite(water_motor_b_pin, LOW);

    // TEA WINCH MOTOR set up
    myStepper.setSpeed(10);

    // Initialise motors
    waterMotor.initialize();
    teaMotor.initialize();

    // WiFi set up:
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }

    Serial.println("WiFi connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());

    // Start mDNS for http://teatime.local
    if (!MDNS.begin("teatime"))
    {
        Serial.println("Error setting up MDNS responder!");
    }

    // Define routes
    server.on("/", handleRoot);
    server.on("/api/status", handleStatus);
    server.on("/api/schedule-tea", handleScheduleTea);
    server.onNotFound(handleNotFound);
    // css route
    server.on("/style.css", handleCSS);

    server.begin();
    Serial.println("HTTP server started");

    timeClient.begin();
    timeClient.setTimeOffset(0); // GMT = 0, BST = 3600 (1 hour) ... easier to calc from a user input
    // initialise with updating on the hour. Update to every minute when closer to alarm time?
    timeClient.setUpdateInterval(60000);
    timeClient.update();
}

void loop()
{
    // Handle incoming requests:
    server.handleClient();

    // check if user has set an alarm:
    if (userSetReadyTime.length() != 0) { 
        // Update time:
        checkTime();
        // State update:
        teaMakingMachine.update();
    }
}
