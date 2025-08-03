"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { WideContainer, WideGrid } from "../../components/gridStuff";
import { FunH2 } from "../../components/headers";
import { WeeklyWrapper } from "../../components/layouts";
import { Para } from "../../components/typography";

export default function Page() {
  return (
    <WeeklyWrapper week={9}>
      <div className="p-2 py-8 pb-16 sm:px-4 md:px-6 lg:px-8">
        <h1 className="my-4 mb-12 text-center text-3xl">
          Week 5 Part 1: Radio, WiFi, Bluetooth (IoT)
        </h1>
        <FunH2>Microcontroller as server</FunH2>
        <WideGrid>
          <WideContainer>
            <Para>
              Step 1: Build up an HTML form for my microcontroller to serve on a
              LAN.
            </Para>
            <Para>
              I had made some progress querying the API at{" "}
              <a
                href="https://worldtimeapi.org/"
                target="_blank"
                className="underline"
              >
                https://worldtimeapi.org/
              </a>{" "}
              <i>until</i> I returned to the lab. It seems that the API is
              blocking requests from the labʼs IP address. I imagine a previous
              student unintentionally hammered their endpoint! In the lab, the
              only response I can get is: “Connection was forcibly closed by a
              peer”.
            </Para>
            <Para>
              Luckily for me, a{" "}
              <a
                href="https://michelleyl78.github.io/PHYS_S-12/09_class/09_class.html"
                target="_blank"
                className="underline"
              >
                previous PHYS S-12 student
              </a>{" "}
              has integrated an alarm clock into their project. I am entering
              the world of Network Time Protocol. (I am used to JavaScript or
              PHP where I can just instantiate a Date object and get the current
              time, so this is a learning curve for me.)
            </Para>
            <Para>
              Update: I have discovering that NTP does not have any nice
              timezone handling... so, in the future, I will want to switch to
              the world clock API. With the clocks changing in the UK, Iʼd find
              that the cup of tea would be an hour early or late depending on
              “Spring Forward, Fall Back”.
            </Para>
            <Para>
              In terms of logic process, and inputs and outputs, what I need is:
              some way of inputting desired tea time to the microcontroller. The
              microcontroller communicates with the tea making device. The tea
              making device communicates back to the microcontroller, and the
              microcontroller communicates back to the end user.
            </Para>
            <Para>
              A lot of my ideas based on web dev experience were incompatible
              with the microcontroller set up. I wanted it to function like a
              server so that it could receive requests to its API instead of
              having to poll an internet API. Yet, I could not work out how to
              host a React client interface that could send requests to a LAN
              server. Turning the microcontroller into a WAN server seemed
              complicated and ultimately unnecessary since I would have to load
              a teabag when scheduling an alarm, so remote access was not
              necessary.
            </Para>
            <Para>
              I opted for the LAN server and a simple HTML and CSS form that
              will live at teatime.local
            </Para>
            <Para>
              I could develop a smoother product in the future which would have
              the microcontroller query Firebase for alarms and a vercel-hosted
              client interface that would post updates to the Firebase db. But I
              just need an MVP!
            </Para>
          </WideContainer>
          <WideContainer>
            <Para>
              In the interest of record keeping, here is the clock API code I
              abandoned:
            </Para>
            <SyntaxHighlighter language="cpp" style={tomorrow}>
              {`bool updateTimeFromAPI() {
if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi not connected");
    return false;
} 

HTTPClient http;
http.begin("http://worldtimeapi.org/api/timezone/Europe/London");
  
int httpResponseCode = http.GET();

if (httpResponseCode == 200) {
    String payload = http.getString();
    // Parse JSON response
    DynamicJsonDocument doc(1024);
    if (deserializeJson(doc, payload) == DeserializationError::Ok) {
      // Safe extraction with existence checks
      if (doc.containsKey("unixtime") && doc.containsKey("datetime")) {
        // Extract epoch time
        clockUpdate = millis();
        unixTime = doc["unixtime"].as<unsigned long>();
        dateTime = doc["datetime"].as<String>();
        // e.g. "2025-07-27T22:06:13.245607-04:00"
        
        Serial.println("Time updated successfully, at");
        Serial.println(clockUpdate);
        Serial.println(unixTime);
        Serial.println(dateTime);
      } else {
        return false;
      }
    } else {
      return false;
    }
    
    http.end();
    return true;
  } else {
    Serial.print("Error getting time: ");
    Serial.println(httpResponseCode);
    Serial.println("Unknown error: ");
    Serial.println(http.getString());
    http.end();
    return false;
  }
}`}
            </SyntaxHighlighter>
          </WideContainer>
          <WideContainer>
            <FunH2>Outcome</FunH2>
            <Para>
              The user can navigate to <i>http://teatime.local</i> to choose
              their wake up time and their brew time. The LED lights up to
              represent the microcontroller sending the signal to start brewing
              the tea. In this example, since the user chose 15:35 as their wake
              up time and 1 minute for brewing, the LED lights up at 15:34. In
              my final project, the LED will be substituted for the rest of the
              machine.
            </Para>
            <Para>
              I might need to experiment with the time taken to reach boiling
              point and slightly over-estimate it. Then I can keep the water
              boiling for a few minutes before sending it to the tea and mug. If
              it takes longer to boil than intended, the tea will be late!
            </Para>
            <div className="my-4">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/__RvMarT2Lk"
                title="It moves!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            {/* https://youtube.com/shorts/?feature=share */}
            <Para>
              This is the code to try and figure out the the time to start
              things, taking the time zone into account!
            </Para>
            <SyntaxHighlighter language="cpp" style={tomorrow}>
              {`void adjustTime() {
  // if NOW minutes since midnight > READY minutes since midnight
  // else if NOW mins since mid < READY mins since mid
  // e.g. time now = 23:11 alarm time = 07:05

  // user set time
  const String userHour = String(userSetReadyTime[0]) + String(userSetReadyTime[1]);
  const String userMins = String(userSetReadyTime[3]) + String(userSetReadyTime[4]);
  // adjusting times for timezone and brew time
  adjustedUserHour = userHour.toInt() - userSetTimeZone;
  if (adjustedUserHour > 23) {
    adjustedUserHour = adjustedUserHour - 24;
  }
  if (adjustedUserHour < 0) {
    adjustedUserHour = adjustedUserHour + 24;
  }
  adjustedUserMins = userMins.toInt() - targetSteepTime;
  if (adjustedUserMins > 59) {
    adjustedUserMins = adjustedUserMins - 60;
    adjustedUserHour = adjustedUserHour + 1;
  }
  if (adjustedUserMins < 0) {
    adjustedUserMins = adjustedUserMins + 60;
    adjustedUserHour = adjustedUserHour - 1;
  }
}`}
            </SyntaxHighlighter>
          </WideContainer>
          <WideContainer>
            <FunH2>The server code:</FunH2>
            <SyntaxHighlighter language="cpp" style={tomorrow}>
              {`int ledPin = 32;

const char *ssid = "wifi-name";
const char *password = "wifi-password";

bool brewStatus = false;
unsigned long targetSteepTime = 0;
int userSetTimeZone = 0;
String userSetReadyTime = "0";
int adjustedUserHour = 0;
int adjustedUserMins = 0;

WebServer server(80);
WiFiUDP ntpUDP;

// By default 'pool.ntp.org' is used with
// 60 seconds update interval
// and no offset
NTPClient timeClient(ntpUDP);
// TODO: from the UK it might make more sense
// to query NTPClient
// timeClient(ntpUDP, "europe.pool.ntp.org", 3600, 60000);

void setup()
{
  Serial.begin(115200);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("WiFi connected!");
  Serial.println(WiFi.localIP());

  // Start mDNS
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

  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, LOW);
}

void loop()
{
  server.handleClient(); // Handle incoming requests
  delay(10);
  checkTime();
  if (brewStatus == true) {
    makeTea();
  } else {
    digitalWrite(ledPin, LOW);
  }
}

void handleCSS()
{
  server.send(200, "text/css", css);
}

void handleRoot()
{
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
  if (targetSteepTime == 0)
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
    html += "<form action='/api/schedule-tea' method='post'>"
            "<p>Tea scheduled to brew for " +
            String(targetSteepTime) + " minutes. It will be ready by " + String(userSetReadyTime) + " ☕️</p>"
                                                                                           "<input hidden readonly class='reset' name='readyTime' id='readyTime' value='0' type='time' step='300' />"
                                                                                           "<input hidden readonly class='reset' name='steepTime' id='steepTime' value='0' type='text' />"
                                                                                           "Right now it is <i>some time</i>"
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
  targetSteepTime = steepTimeStr.toInt();

  if (server.hasArg("timeZone")) {
    String formTimeZoneStr = server.arg("timeZone");
    userSetTimeZone = formTimeZoneStr.toInt();
    Serial.println("Time zone" + String(userSetTimeZone));
  }

  if (targetSteepTime == 0) {
    brewStatus = false;
  } else {
    adjustTime();
  }

  // startTeaMaking(steepTime);

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

  // user set time
  const String userHour = String(userSetReadyTime[0]) + String(userSetReadyTime[1]);
  const String userMins = String(userSetReadyTime[3]) + String(userSetReadyTime[4]);
  // adjusting times for timezone and brew time
  adjustedUserHour = userHour.toInt() - userSetTimeZone;
  if (adjustedUserHour > 23) {
    adjustedUserHour = adjustedUserHour - 24;
  }
  if (adjustedUserHour < 0) {
    adjustedUserHour = adjustedUserHour + 24;
  }
  adjustedUserMins = userMins.toInt() - targetSteepTime;
  if (adjustedUserMins > 59) {
    adjustedUserMins = adjustedUserMins - 60;
    adjustedUserHour = adjustedUserHour + 1;
  }
  if (adjustedUserMins < 0) {
    adjustedUserMins = adjustedUserMins + 60;
    adjustedUserHour = adjustedUserHour - 1;
  }
}

void checkTime()
{ 
  // GMT clock time
  const String clockTime = timeClient.getFormattedTime();
  const String clockHour = String(clockTime[0]) + String(clockTime[1]);
  const String clockMins = String(clockTime[3]) + String(clockTime[4]);

  // update time update to every 10mins in the run up hour.
  if (adjustedUserHour - 1 == clockHour.toInt()) {
    timeClient.setUpdateInterval(10000);
  }

  if ((adjustedUserHour == clockHour.toInt() && adjustedUserMins <= clockMins.toInt())) {
    // MAKE TEA
    brewStatus = true;
  }
}

void makeTea() {
  digitalWrite(ledPin, HIGH);
}`}
            </SyntaxHighlighter>
          </WideContainer>
        </WideGrid>
      </div>
    </WeeklyWrapper>
  );
}

{
  /* Download my files from this week! */
}
