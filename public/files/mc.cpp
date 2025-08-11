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
  background: #f8fafc;
  color: #334155;
}
.container {
  max-width: 600px;
  margin: 0 auto;
}
form {
  background: white;
  padding: 32px;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}
h1 {
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1e293b;
  text-align: center;
}
label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  color: #374151;
}
select, button, input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px; /* Prevents zoom on mobile */
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  background: white;
  transition: all 0.2s ease; /* Smooth interactions */
}
select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
input.reset {
  display: none;
}
button {
  /* background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); */
  background: linear-gradient(135deg, #3b82f6 0%, #ff7554 100%);
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 16px;
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 1px;
}
button.cancel {
  background: linear-gradient(135deg, #ff7554 0%, #d81d86 100%);
}
button:hover {
  transform: translateY(-1px); /* Subtle lift effect */
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}
button:active {
  transform: translateY(0);
}
.status {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 4px;
  padding: 16px;
  margin: 16px 0;
  color: #0c4a6e;
}
)";

const char *ssid = "wifi-name";
const char *password = "wifi-password";

unsigned long targetSteepTime = 0;
unsigned long unixTime = 0;
unsigned long clockUpdate = 0;
String dateTime = "";
String userSetReadyTime = "0";

WebServer server(80);
WiFiUDP ntpUDP;

// By default 'pool.ntp.org' is used with 60 seconds update interval and
// no offset
NTPClient timeClient(ntpUDP);

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
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  // Start mDNS
  if (!MDNS.begin("teatime"))
  {
    Serial.println("Error setting up MDNS responder!");
  }

  // Define routes
  server.on("/", handleRoot);
  server.on("/api/status", handleStatus);
  server.on("/api/schedule-tea", handleMakeTea);
  server.onNotFound(handleNotFound);
  // css route
  server.on("/style.css", handleCSS);

  server.begin();
  Serial.println("HTTP server started");

  timeClient.begin();
  timeClient.setTimeOffset(0); // GMT = 0, BST = 3600 (1 hour)
}

void loop()
{
  server.handleClient(); // Handle incoming requests
  delay(10);
}

void handleCSS()
{
  server.send(200, "text/css", css);
}

void handleRoot()
{
  Serial.println("handleroot");
  Serial.println(targetSteepTime);
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
  if (targetSteepTime == 0)
  {
    // Show the form
    html += "<form action=\"/api/schedule-tea\" method=\"post\">"
            "<label for=\"readyTime\">"
            "At what time would you like your tea?"
            "</label>"
            "<input type='time' step='300' id='readyTime' name='readyTime' value='08:00'>"
            "<br/>"
            "<label for=\"steepTime\">"
            "How long would you like your tea to steep for?"
            "</label>"
            "<br />"
            "<select name=\"steepTime\" id=\"steepTime\">"
            "<option value=\"30\">30 seconds</option>"
            "<option value=\"60\">1 minute</option>"
            "<option value=\"120\">2 minutes</option>"
            "<option value=\"180\">3 minutes</option>"
            "<option value=\"240\">4 minutes</option>"
            "<option value=\"300\">5 minutes</option>"
            "</select>"
            "<br/>"
            "<button type=\"submit\">Wake me with tea!</button>"
            "</form>";
  }
  else
  {
    html += "<form action='/api/schedule-tea' method='post'>"
            "<p>Tea scheduled to brew for " +
            String(targetSteepTime) + " seconds in time for " + String(userSetReadyTime) + "</p>"
                                                                                           "<input hidden readonly class='reset' name='readyTime' id='readyTime' value='0' type='time' step='300'>"
                                                                                           "<input hidden readonly class='reset' name='steepTime' id='steepTime' value='0' type='text' />"
                                                                                           "<button class='reset'>Cancel scheduled tea</button></form>";
  }
  html += "</div></body>"
          "</html>";
  server.send(200, "text/html", html);
}

void handleMakeTea()
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
  Serial.println(userSetReadyTime);

  // Get the steepTime value from the form
  String steepTimeStr = server.arg("steepTime");
  targetSteepTime = steepTimeStr.toInt();
  Serial.println("Steep time set to: " + String(targetSteepTime) + " seconds");

  getTime();

  // slice to get current hours and minutes. convert to minutes. if NOW minutes since midnight > READY minutes since midnight, then increase date by one (is there a function or do I handle the month?)
  // else if NOW mins since mid < READY mins since mid, no increase on the date. (would it be easier to make the user choose the date...? yes. but not good for user)

  // Process the tea making request
  Serial.println("Tea request received!");
  Serial.print("Steep time: ");
  Serial.print(targetSteepTime);
  Serial.println(" seconds");
  Serial.print("Ready time: ");
  Serial.println(userSetReadyTime);

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

void handleNoClock()
{
  server.send(500, "text/plain", "Could not reach internet clock");
}

void getTime()
{
  Serial.println("Current time: " + timeClient.getFormattedTime());
}