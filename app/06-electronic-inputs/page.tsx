"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Table, Td } from "../../components/basicTable";
import { WideContainer, WideGrid } from "../../components/gridStuff";
import {
  PlainLargeImage,
  PlainMediumImage,
  PngSketch,
} from "../../components/images";
import { WeeklyWrapper } from "../../components/layouts";

export default function Page() {
  return (
    <WeeklyWrapper week={6}>
      <div className="p-2 py-8 pb-16 sm:px-4 md:px-6 lg:px-8">
        <h1 className="my-4 mb-12 text-center text-3xl">
          Week 3 Part 2: Electronic Inputs
        </h1>
        <h3 className="text-df-shade-lighter mb-8 text-2xl">
          Input sensor: Thermistor
        </h3>
        <WideGrid>
          <WideContainer>
            <p>
              Since boiling water is a key part of my final project, I will use
              a thermistor and calibrate it to detect boiling water. This will
              enable my machine to switch on if the water is not hot enough and
              switch off when it is boiling.
            </p>
            <p>My circuit:</p>
            <PlainMediumImage
              src={"/therm-circuit.jpg"}
              alt={"Circuit diagram for thermistor voltage divider"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              <i>Fun fact:</i> this took me ages to debug because someone had
              put the wrong resistor in the 10k box 😭. This meant my voltage
              divider wasnʼt functioning and I could only read 0 or 4095
              depending on my setup. Lesson learnt!
            </p>
            <PlainMediumImage
              src={"/therm-microcontroller.jpg"}
              alt={"Thermistor connected to microcontroller"}
            />
          </WideContainer>
          <WideContainer>
            <p>Test run:</p>
            <br />
            <Table>
              <thead>
                <tr>
                  <Td>Temperature</Td>
                  <Td>Analog read</Td>
                  <Td>Resistance (kΩ)</Td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Lab room temp</Td>
                  <Td>2960</Td>
                  <Td>26</Td>
                </tr>
                <tr>
                  <Td>My pinching temp</Td>
                  <Td>2645</Td>
                  <Td>18</Td>
                </tr>
                <tr>
                  <Td>Çinarʼs overheating laptop</Td>
                  <Td>2495</Td>
                  <Td>16</Td>
                </tr>
              </tbody>
            </Table>
            <br />
            <p>
              The analogue read range is 0 - 4095. This range represents the
              readings for 0 - max voltage. If the thermistor receives all the
              input voltage, whether 3.3V or 5V, it will return 4095. Instead,
              you can alter the precision of the readings (mapping one range to
              another). For example, the resistance range of the thermistor (and
              corresponding median value for the fixed resistor) or the input
              voltage. This will impact sensitivity to a different range of
              temperatures.
            </p>
            <PlainLargeImage
              src={"/voltage-ratio-calc.jpg"}
              alt={
                "Worked through calculation to find the resistance of the thermistor"
              }
            />
          </WideContainer>
          <WideContainer>
            <p>
              <b>Voltage dividers</b>
            </p>
            <p>
              The total resistance of the series circuit is R = 10kΩ +
              resistance of the thermistor. The voltage drop across the first
              resistor can be found as a ratio of 10kΩ divided by the total.
              Similarly, the drop across the thermistor is the thermistor
              resistance / total R.
              <br />
              The changing thermistor changes the ratio (around the median of
              the fixed resistor). When the thermistor is at 10kΩ they each
              receive half of the voltage (10 / 10 + 10). At 3kΩ, around 1/4,
              and at 30kΩ, 3/4.
            </p>
            <br />
            <p>
              I will tape the thermistor to the external wall of a container and
              record the readings when the water is boiling vs room temp.
            </p>
            <br />
            <p>
              From these initial values, it appears that the hotter the
              thermistor gets, the lower the voltage it is allocated, therefore
              a smaller resistance. General rules of charge imply that heat
              increases conductivity, therefore a lower resistance is expected!
            </p>
          </WideContainer>
        </WideGrid>
        <h3 className="text-df-shade-lighter my-8 text-2xl">
          Create and calibrate a capacitive sensor: Water level
        </h3>
        <WideGrid>
          <WideContainer>
            <p>
              I want to ensure the heating element does not switch on if thereʼs
              not enough water to boil. (Donʼt want to burn the house down while
              everyoneʼs asleep!)
            </p>
            <br />
            <p>
              The physical set up is extremely simple: two copper strips stuck
              to the vessel. Then, use the capacitance of water compared with
              air to determine the level of water.
            </p>
            <br />
            <p>
              After some attempts, I could not get it to work with either manual
              calculations and code nor with a capacitance library. After some
              debugging with Claude.ai, I found an easy solution! My
              microcontroller has{" "}
              <a
                href="https://randomnerdtutorials.com/esp32-touch-pins-arduino-ide/"
                className="underline"
                target="_blank"
              >
                capacitive touch pins
              </a>
              . This works for my use case since the water does the necessary
              “touching” and the microcontroller has built-in functionality to
              detect and record the changes to the capacitance.
            </p>
          </WideContainer>
          <WideContainer>
            <PngSketch src={"/copper-circuit-diagram.png"} alt={""} />
          </WideContainer>
          <WideContainer>
            <p>
              With my prototype set up, I have highs of 43 and lows of 7. 43 is
              the reading when the bottle is empty, 7 is the reading when itʼs
              full.
            </p>
            <br />
            <p>
              I was intrigued to find that increasing volume beyond the strips
              doesn’t change the reading. I thought that a greater volume would
              lead to a greater capacitance but the capacitance must only relate
              to the water (or air) in the most direct line between the copper
              strips.
            </p>
          </WideContainer>
          <WideContainer>
            <p>
              To change the range, I imagine I could alter the area of the
              copper strips and the height of copper strips. The distance
              between the copper strips would impact the capacitance and the
              temperature of the water may affect its permittivity. Even with
              changes to its permittivity, the difference between water at 80
              and air at 1 means it would likely be comparatively negligible.
            </p>
            <br />
            <p>Capacitance = ε x Area / distance between</p>
            <br />
            <p>
              where ε is permittivity. The area of the copper plates and
              distance between them is constant, so only the permittivity of
              water vs air will impact the measure of capacitance.
            </p>
          </WideContainer>
          <WideContainer>
            <p>Data from my water capacitance sensor</p>
            <br />
            <Table>
              <thead>
                <tr>
                  <Td>Water level</Td>
                  <Td>Reading</Td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Empty</Td>
                  <Td>43</Td>
                </tr>
                <tr>
                  <Td>1</Td>
                  <Td>18</Td>
                </tr>
                <tr>
                  <Td>2</Td>
                  <Td>13</Td>
                </tr>
                <tr>
                  <Td>3</Td>
                  <Td>09</Td>
                </tr>
                <tr>
                  <Td>4</Td>
                  <Td>07</Td>
                </tr>
              </tbody>
            </Table>
          </WideContainer>
          <WideContainer>
            <video width="300" controls>
              <source src="/water-level.mov" type="video/mp4" />
            </video>
          </WideContainer>
        </WideGrid>
        <h3 className="text-df-shade-lighter my-8 text-2xl">Prototype</h3>
        <WideGrid>
          <WideContainer>
            <p>
              I taped my thermistor to the side of my water-level-sensing
              bottle. There is a risk that this plastic bottle will melt, so I
              will only experiment with near-boiling water.
            </p>
            <p>
              The important measurements are: empty state, room temperature
              water, and boiling water.
            </p>
            <br />
            <p>Data from my double sensor set up</p>
            <br />
            <Table>
              <thead>
                <tr>
                  <Td>State</Td>
                  <Td>Water level</Td>
                  <Td>Level reading</Td>
                  <Td>Thermistor reading</Td>
                  <Td>Thermistor resistance (kΩ)</Td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Empty</Td>
                  <Td>Empty</Td>
                  <Td>
                    <b className="text-yellow-200">40</b>
                  </Td>
                  <Td>
                    <b className="text-red-400">2730</b>
                  </Td>
                  <Td>20</Td>
                </tr>
                <tr>
                  <Td>Room temp water</Td>
                  <Td>Full</Td>
                  <Td>
                    <b className="text-blue-400">6</b>
                  </Td>
                  <Td>
                    <b className="text-red-400">2800</b>
                  </Td>
                  <Td>22</Td>
                </tr>
                <tr>
                  <Td>Boiling water</Td>
                  <Td>Full</Td>
                  <Td>
                    <b className="text-blue-400">6</b>
                  </Td>
                  <Td>
                    <b className="text-green-400">1047</b>
                  </Td>
                  <Td>3</Td>
                </tr>
                <tr>
                  <Td>Post-boil</Td>
                  <Td>Empty</Td>
                  <Td>
                    <b className="text-yellow-200">37</b>
                  </Td>
                  <Td>
                    <b className="text-red-400">2000</b>
                  </Td>
                  <Td>10</Td>
                </tr>
                <tr>
                  <Td>Post-boil (60 seconds)</Td>
                  <Td>Empty</Td>
                  <Td>
                    <b className="text-yellow-200">37</b>
                  </Td>
                  <Td>
                    <b className="text-red-400">2300</b>
                  </Td>
                  <Td>13</Td>
                </tr>
                <tr>
                  <Td>Post-boil (3 minutes)</Td>
                  <Td>Empty</Td>
                  <Td>
                    <b className="text-yellow-200">40</b>
                  </Td>
                  <Td>
                    <b className="text-red-400">2600</b>
                  </Td>
                  <Td>17</Td>
                </tr>
              </tbody>
            </Table>
            <br />
            <p className="w-full text-left">
              The logic I will need to program is (pseudo code):
            </p>
            <br />
            <p className="w-full text-left">
              <i>if</i> (water level is less than 10 && thermistor reading is
              greater than 1000)
            </p>
            <p className="w-full text-left">
              <i>then</i> turn on the heater
            </p>
            <p className="w-full text-left">
              <i>else</i>
            </p>
            <p className="w-full text-left">then turn off the heater</p>
            <br />
            <p className="w-full text-left">
              <i>if</i> (water level is less than 10 && thermistor reading is
              less than 1000 && some variable to track if the water boiled
              recently)
            </p>
            <p className="w-full text-left">
              <i>then</i> turn on the peristaltic motor
            </p>
            <p className="w-full text-left">
              <i>else</i>
            </p>
            <p className="w-full text-left">
              then turn off the peristaltic motor
            </p>
          </WideContainer>
          <WideContainer>
            <div className="grid grid-cols-2 grid-rows-2">
              <PlainLargeImage src={"/steam-bottle.jpg"} alt={""} />
              <PlainLargeImage src={"/boiling-readings.jpg"} alt={""} />
              <div className="col-span-2">
                <PlainLargeImage src={"/double-set-up.jpg"} alt={""} />
              </div>
            </div>
          </WideContainer>
        </WideGrid>
        <h3 className="text-df-shade-lighter my-8 text-2xl">Review:</h3>
        <WideGrid>
          <WideContainer>
            <p>
              I tried to repurpose a soil moisture sensor as an “out the box”
              water level sensor. But, understandably, it was so sensitive it
              could only detect “water” or “no water”.
            </p>
            <PlainLargeImage
              src={"/soil-moisture-sensor.jpg"}
              alt={"Dipping a sensor in a drop of water on the table"}
            />
            <br />
          </WideContainer>
          <WideContainer>
            <p>
              My current code for combined readings. Next step is to programme
              some outputs!
            </p>
            <SyntaxHighlighter language="cpp" style={tomorrow}>
              {`// ESP-WROOM-32: T8 = touch pin 8 = D33 = +ve
int touch_pin = T8;

// ESP-WROOM-32: pin = 32 (and needs a resistor in parallel)
int thermistor_pin = 32;

void setup() {
  Serial.begin(115200);
  pinMode(thermistor_pin, INPUT);
}

void loop() {
  int touchValue = touchRead(touch_pin);
  
  Serial.println("Water level:");
  Serial.println(touchValue);
  Serial.println("");

  int val = analogRead(thermistor_pin);

  Serial.print("Relative voltage reading:");
  Serial.println(val);
  Serial.println("");
  
  delay(500);
}`}
            </SyntaxHighlighter>
          </WideContainer>
        </WideGrid>
        <h4 className="text-df-shade-lighter my-4 text-xl">Class links</h4>
        <ul className="list-inside list-disc">
          <li>
            <a
              className="underline"
              href="https://nathanmelenbrink.github.io/intro-dig-fab/06_input/index.html"
            >
              6th class docs
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://wujibi123.github.io/PHYS_S-12/07_ElectronicInput/index.html"
            >
              Student thermistor example
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://nathanmelenbrink.github.io/lab/input/capacitance/index.html"
            >
              Capacitance notes
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://nathanmelenbrink.github.io/intro-dig-fab/06_input/index.html"
            >
              Hand made capacitor sensors
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://nathanmelenbrink.github.io/lab/input/capacitance/capsense.html"
            >
              Arduino capacitance sensing
            </a>
          </li>
        </ul>
      </div>
    </WeeklyWrapper>
  );
}
