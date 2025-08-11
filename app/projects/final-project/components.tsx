import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Table, Td } from "../../../components/basicTable";
import { Grid, TableGrid } from "../../../components/gridStuff";
import { PlainSmallImage } from "../../../components/images";
import { Para } from "../../../components/typography";

export function H3({ children, color }: { children: string; color?: string }) {
  return (
    <h3
      className={`my-4 text-lg font-black tracking-widest uppercase ${
        color ? color : "text-df-shade-lighter"
      }`}
    >
      {children}
    </h3>
  );
}

function H4({ children }: { children: string }) {
  return <h4 className="text-df-shade-lighter my-4 text-lg">{children}</h4>;
}

function Li({ children }: { children: string }) {
  return <li className="my-2">{children}</li>;
}

export function Introduction() {
  return (
    <>
      <Para>
        Whether inspired by <i>Chitty Chitty Bang Bang</i> or{" "}
        <i>Wallace and Gromit</i>, Iʼve always wanted some form of household
        machine that only a crackpot inventor would think was a necessary and
        good idea.
      </Para>
      <Para>
        In the 1950s, 60, 70s, and even the 80s, Teasmades were all the rage in
        the UK. Everyone could have an appliance worthy of Caractacus Potts! A
        brand I particularly like was called{" "}
        <a
          href="https://www.teasmade.uk/the-goblin-logo/"
          className="text-df-shade-lighter underline"
        >
          <i>Goblin</i>
        </a>
        , seen here in action:
      </Para>
      <div className="my-4">
        <iframe
          width="400"
          height="226"
          src="https://www.youtube.com/embed/Dl98WAD4R20?start=26"
          title="The 1977 Goblin Teasmade advert"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <Para>
        I think that terrible buzzer contributed to their fall in popularity but
        there are plenty of Teasmade enthusiasts as demonstrated{" "}
        <a
          href="https://www.teasmade.uk/"
          className="text-df-shade-lighter underline"
        >
          <i>here</i>
        </a>
        , who keep the old-school machines alive.
      </Para>
      <Para>
        I have looked at buying an old Goblin machine but I have been deterred
        mostly by the buzzer. If only I had the skills to create my own
        version...
      </Para>
    </>
  );
}

export function Brainstorm() {
  return (
    <>
      <H4>Time triggered boiling water machine (yes, basically a kettle)</H4>
      <p>
        <i>Main issue to solve:</i> getting boiling water from machine to mug
      </p>
      <br />
      <Grid>
        <p>Push the bottom of the kettle up</p>
        <p>Pull the top of the kettle down (needs an axle for rotation)</p>
        <p>Peristaltic pump</p>
        <p>Pressure cooker with a pipe (like the moka pot)</p>
        <p>Urn with a tap</p>
        <p>Drop an immersion heater directly into the mug</p>
        <p>A siphon!</p>
      </Grid>
      <H4>Tea brewing machine</H4>
      <p>
        <i>Main issue to solve:</i> getting the teabag into and out of the water
        after a specific time period
      </p>
      <br />
      <Grid>
        <p>Rack and pinion</p>
        <p>Winch and pulley</p>
        <p>Servomotor and arm</p>
      </Grid>
    </>
  );
}

export function ProjectGoals() {
  return (
    <>
      <H4>My proposed features</H4>
      <p>A machine that would:</p>
      <ol>
        <li>Checks a user-set input for a time to be ready,</li>
        <li>
          <i>then, when suitable,</i>
        </li>
        <li>triggers a container of water to boil,</li>
        <li>
          <i>then</i>
        </li>
        <li>transports the boiling water into a mug with a teabag,</li>
        <li>
          <i>and</i>
        </li>
        <li>brews the tea for a specified amount of time,</li>
        <li>
          <i>then</i>
        </li>
        <li>removes the tea bag,</li>
        <li>
          <i>then</i>
        </li>
        <li>
          triggers a <b>nice</b> alarm.
        </li>
      </ol>
      <br />
      <p>
        Result? Sleepy person wakes to a hot cup of tea. They just need
        wherewithal to add their ideal amount of milk.
      </p>
      <H4>Future features that I would like to add one day</H4>
      <ol className="list-inside list-disc">
        <Li>
          A swivel drop catcher... could be a 3D printed piece on a servo that
          sweeps 90 degrees.
        </Li>
        <Li>
          An extra machine component which adds a specified amount of milk from
          a tiny thermos flask. (Far future: Would a tiny fridge would be too
          extreme?)
        </Li>
        <Li>
          The ability to set the machine alarm time from household integrations
          like Amazon Alexa devices or iPhone voice assistants.
        </Li>
        <Li>
          A S.A.D. light which slowly brightens in parallel with the tea
          preparation.
        </Li>
        <Li>Make a DIY peristaltic pump.</Li>
      </ol>
      <H4>Project considerations</H4>
      <Para>
        The likely web-based interface needs to be password protected so only I
        can determine when the alarm goes off 😂
      </Para>
      <Para>
        How to avoid being woken up by a malfunctioning robot throwing boiling
        water on my face...
      </Para>
      <Para>
        Internet connection being interrupted, resulting in my alarm not
        triggering
      </Para>
      <Para>
        Switching to and from British Summer Time meaning the machine
        potentially mis-times the wake up call
      </Para>
    </>
  );
}

export function PredictedBillOfMaterials() {
  return (
    <>
      <H4>Boiling water machine</H4>
      <p>One option:</p>
      <Table>
        <thead>
          <tr className="text-left">
            <th>Item</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Branded small kettle</Td>
            <Td>$30.99</Td>
            <Td>
              <a
                href="https://www.bodum.com/us/en/11451-04us-bistro"
                target="_blank"
              >
                https://www.bodum.com/us/en/11451-04us-bistro
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Amazon small kettle</Td>
            <Td>$18.99</Td>
            <Td>
              <a
                href="https://www.amazon.com/Portable-Electric-Stainless-Protection-Traveling/dp/B0CJTHBYZ5/ref=sr_1_6"
                target="_blank"
              >
                https://www.amazon.com/Portable-Electric-Stainless-Protection-Traveling/dp/B0CJTHBYZ5/ref=sr_1_6
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Mechanical MC-controlled toggle button</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
          <tr>
            <Td>Silicon tube</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
          <tr>
            <Td>DIY peristaltic pump?</Td>
            <Td> </Td>
            <Td>
              <a
                href="https://blog.arduino.cc/2023/02/22/a-diy-peristaltic-pump-controlled-by-an-arduino/"
                target="_blank"
              >
                https://blog.arduino.cc/2023/02/22/a-diy-peristaltic-pump-controlled-by-an-arduino/
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Motor for pump</Td>
            <Td>$4.15</Td>
            <Td>
              <a
                href="https://www.wiltronics.com.au/product/10137/yellow-motor-3-12vdc-2-flats-shaft/"
                target="_blank"
              >
                https://www.wiltronics.com.au/product/10137/yellow-motor-3-12vdc-2-flats-shaft/
              </a>
            </Td>
          </tr>
          <tr>
            <Td>L9110 driver</Td>
            <Td>$0.99</Td>
            <Td>
              <a
                href="https://www.aliexpress.us/item/3256808891302864.html"
                target="_blank"
              >
                https://www.aliexpress.us/item/3256808891302864.html
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Water level sensor</Td>
            <Td> </Td>
            <Td>DIY Copper tape + capacitance?</Td>
          </tr>
        </tbody>
      </Table>
      <br />
      <p>Another option:</p>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Immersion heater</Td>
            <Td>$10.40</Td>
            <Td>
              <a
                href="https://www.amazon.com/gp/product/B07XZ5TZ64/ref=ox_sc_act_title_2"
                target="_blank"
              >
                https://www.amazon.com/gp/product/B07XZ5TZ64/ref=ox_sc_act_title_2
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Heat safe water container</Td>
            <Td>$5.50</Td>
            <Td>
              https://www.amazon.com/Pyrex-Container-Non-Pourous-Dishwasher-Microwave/dp/B003JZ8280/ref=sr_1_1
            </Td>
          </tr>
          <tr>
            <Td>Thermistor (digi thermometer)</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
          <tr>
            <Td>Water level sensor</Td>
            <Td> </Td>
            <Td>DIY Copper tape + capacitance?</Td>
          </tr>
          <tr>
            <Td>Silicon tube</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
          <tr>
            <Td>DIY peristaltic pump?</Td>
            <Td> </Td>
            <Td>
              <a
                href="https://blog.arduino.cc/2023/02/22/a-diy-peristaltic-pump-controlled-by-an-arduino/"
                target="_blank"
              >
                https://blog.arduino.cc/2023/02/22/a-diy-peristaltic-pump-controlled-by-an-arduino/
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Relay to control the immersion heater on and off</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
        </tbody>
      </Table>
      <H4>Teabag brewing machine</H4>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Handled sieve</Td>
            <Td>$12.90</Td>
            <Td>Muji store</Td>
          </tr>
          <tr>
            <Td>Alt. handled sieve</Td>
            <Td>$4.49</Td>
            <Td>H Mart</Td>
          </tr>
          <tr>
            <Td>Motor for winch</Td>
            <Td>$4.15</Td>
            <Td>
              <a
                href="https://www.wiltronics.com.au/product/10137/yellow-motor-3-12vdc-2-flats-shaft/"
                target="_blank"
              >
                https://www.wiltronics.com.au/product/10137/yellow-motor-3-12vdc-2-flats-shaft/
              </a>
            </Td>
          </tr>
          <tr>
            <Td>L9110 driver</Td>
            <Td>$0.99</Td>
            <Td>
              <a
                href="https://www.aliexpress.us/item/3256808891302864.html"
                target="_blank"
              >
                https://www.aliexpress.us/item/3256808891302864.html
              </a>
            </Td>
          </tr>
          <tr>
            <Td>Servo and pulley</Td>
            <Td> </Td>
            <Td>(An alternative to motor + driver)</Td>
          </tr>
          <tr>
            <Td>Structure</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
        </tbody>
      </Table>
      <div className="flex flex-wrap gap-1">
        <PlainSmallImage src={"/muji.JPG"} alt={"Muji sieve"} />
        <PlainSmallImage src={"/muji-in-mug.JPG"} alt={"Muji sieve in mug"} />
        <p className="p-8">
          Muji
          <br /> or
          <br /> H Mart
        </p>
        <PlainSmallImage src={"/h-mart.JPG"} alt={"H mart sieve"} />
        <PlainSmallImage src={"/h-mart-mug.JPG"} alt={"H mart sieve in mug"} />
      </div>
      <H4>Control</H4>
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Some form of container / body for all pieces</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
          <tr>
            <Td>Mug detection sensor</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
          <tr>
            <Td>A microcontroller and breadboard</Td>
            <Td>$8.09</Td>
            <Td>
              <a
                href="https://www.digikey.com/en/products/detail/espressif-systems/ESP32-DEVKITC-32UE/12091813"
                target="_blank"
              >
                https://www.digikey.com/en/products/detail/espressif-systems/ESP32-DEVKITC-32UE/12091813
              </a>
            </Td>
          </tr>
          <tr>
            <Td>API endpoint + user interface</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
          <tr>
            <Td>Speaker?</Td>
            <Td> </Td>
            <Td> </Td>
          </tr>
        </tbody>
      </Table>
      <br />
      <p>
        I probably wouldnʼt incorporate a speaker and instead prefer to use
        existing alarms like mobiles or household smart devices.
      </p>
      <br />
      <p>
        No need for physical buttons if everything can be controlled from a
        website or app
      </p>
    </>
  );
}

export function PredictedTimeline() {
  return (
    <>
      <p>
        I need to purchase pieces I donʼt have and should make a start on the
        mechanics of either the kettle or, since it is more simple, the tea bag
        winch.
      </p>
      <br />
      <p>Less than 4 weeks left in the term.</p>
      <p>I need to get a wiggle on!</p>
      <br />
      <ol className="list-inside list-disc">
        <li>A week for tea bag machine</li>
        <li>A week for boiling water machine</li>
        <li>A week for control centre machine</li>
      </ol>
      <br />

      <p>🤞</p>
    </>
  );
}

export function MvpPlan() {
  return (
    <>
      <H4>Phase 1</H4>
      <Para>✅ Solder peristaltic pump to a microcontroller</Para>
      <Para>
        ✅ Program the microcontroller to control the pump when the water level
        sensor confirms there is enough water in the container and the
        thermistor confirms that the water is boiling.
      </Para>
      <Para>
        ✅ Program the mc to stop the pump when the water level is too low in
        the container.
      </Para>
      <Para>✅ Build a base and stem to fix the pump to.</Para>
      <br />
      <H4>Phase 2</H4>
      <Para>
        ✅ Create a structure for the tea strainer and and a structure for the
        winch.
      </Para>
      <Para>✅ Create the winch, possibly 3d printed.</Para>
      <Para>
        Program the microcontroller to control a stepper motor (when the pump
        has finished pumping water into the mug).
      </Para>
      <br />
      <Para>Post MVP, I will need to integrate a heat source.</Para>
    </>
  );
}

export function HeatingOptions() {
  return (
    <>
      <p>Pros and Cons</p>
      <TableGrid columns={2}>
        <p>
          <b>immersion heater</b>
        </p>
        <p>
          <b>kettle</b>
        </p>
        <p>
          Programmatically switch on heater. Use a digital thermometer to
          determine when the water was boiling. On detecting 100°C I would
          programmatically switch off the immersion blender.
        </p>
        <p>Create a mechanical toggle to switch on the kettle.</p>
        <p>
          Could descend and rise on a winch/pulley directly into the mug. If
          there are concerns with this method, it could be in a heatproof dish
          and the boiling water pumped out.
        </p>
        <p>
          Once the mechanical toggle detects the kettle has boiled, a pump could
          bring the water into the mug.
        </p>
      </TableGrid>
      <Para>
        My second attempt with a bigger heating element was an improvement. The
        water was hot enough that I did not want to keep my hand in there but
        that is not hot enough. This experiment ran for 2h 30m.
      </Para>
      <Para>
        My ideal self-constructed heating option might be a magnetic induction
        heater. Here is a tutorial that looks promising:
        <a
          href="https://www.instructables.com/DIY-Induction-Stove/"
          target="_blank"
        >
          DIY Induction Stove
        </a>
        . In conjunction with a small induction plate such as this:{" "}
        <a
          href="https://www.bialetti.com/it_en/piattello-induzione.html"
          target="_blank"
        >
          Bialetti Induction Plate
        </a>
        . From some of the youtube reviews, the tutorial can be improved if
        taking Halbach arrays into account.
      </Para>
      <PlainSmallImage
        src={"/kjmagnetics.png"}
        alt={"Alternating pole array vs Halbach array. Source: KJ Magnetics"}
      />
      <Para>
        Unfortunately, while it would be fun to build this hot plate, I have to
        be realistic with the time available and admit that I donʼt have the
        time! So it will be a future development possibility.
      </Para>
      <Para>
        Now, I am waiting for tomorrowʼs delivery of a hot pot / slow cooker.
      </Para>
      <Para>
        One of the reasons the rotating magnet heater tutorial is so exciting is
        because most of the tutorials I looked at started with a heating element
        of some type and a relay to control it. This was the first tutorial with
        raw materials. Examples below because they are interesting, especially
        the sous vide ideas.
      </Para>
      <ul>
        <li>
          <a
            href="https://www.instructables.com/Arduino-Sous-Vide-Cooker/"
            target="_blank"
          >
            Arduino Sous Vide Cooker
          </a>
        </li>
        <li>
          <a
            href="https://www.instructables.com/Smart-Water-Boiler-/"
            target="_blank"
          >
            Smart water boiler
          </a>
        </li>
        <li>
          <a
            href="https://www.instructables.com/Sous-vide-cooker-for-less-than-40/"
            target="_blank"
          >
            Another Sous Vide Cooker
          </a>
        </li>
      </ul>
      <Para>
        It is likely that the heating element would have had more luck if I had
        used a metal container but that would have interfered with my touch
        capacitance sensor for water level.
      </Para>
      <p>
        Thoughtlet: should the water amount be determined by the quantity in the
        kettle or by a factor that the user sets?
      </p>
      <p>
        I think a 3D-printed drip catcher on a servo arm could work well for
        this.
      </p>
      <p>
        3D printed drip tray with a see-saw to trigger cup detection. Aligns
        well with central teabag dropper.
      </p>
      <p>
        3D printed loop that fits over strainer handle with a hole to guide hot
        water tube
      </p>
      <p>should placement of water motor be adjustable?</p>
      <p>
        strainer winch can have a button at the top to trigger “the top” and
        then descent can be user controlled
      </p>
      <p>a cleaning program 😂</p>
    </>
  );
}

export function Competitors() {
  return (
    <>
      <p>Pros and Cons</p>
      <TableGrid columns={2}>
        <p>
          {/* //
          https://www.raspberrypi.com/news/teasmade-comes-back-to-life-with-raspberry-pi/
          // the amazon jet lab example */}
          <b>immersion heater</b>
        </p>
        <p>
          <b>kettle</b>
        </p>
        <p>
          Programmatically switch on heater. Use a digital thermometer to
          determine when the water was boiling. On detecting 100°C I would
          programmatically switch off the immersion blender.
        </p>
        <p>Create a mechanical toggle to switch on the kettle.</p>
        <p>
          Could descend and rise on a winch/pulley directly into the mug. If
          there are concerns with this method, it could be in a heatproof dish
          and the boiling water pumped out.
        </p>
        <p>
          Once the mechanical toggle detects the kettle has boiled, a pump could
          bring the water into the mug.
        </p>
      </TableGrid>
      <Para>
        My second attempt with a bigger heating element was an improvement. The
        water was hot enough that I did not want to keep my hand in there but
        that is not hot enough. This experiment ran for 2h 30m.
      </Para>
      <Para>
        My ideal self-constructed heating option might be a magnetic induction
        heater. Here is a tutorial that looks promising:
        <a
          href="https://www.instructables.com/DIY-Induction-Stove/"
          target="_blank"
        >
          DIY Induction Stove
        </a>
        . In conjunction with a small induction plate such as this:{" "}
        <a
          href="https://www.bialetti.com/it_en/piattello-induzione.html"
          target="_blank"
        >
          Bialetti Induction Plate
        </a>
        . From some of the youtube reviews, the tutorial can be improved if
        taking Halbach arrays into account.
      </Para>
      <PlainSmallImage
        src={"/kjmagnetics.png"}
        alt={"Alternating pole array vs Halbach array. Source: KJ Magnetics"}
      />
      <Para>
        Unfortunately, while it would be fun to build this hot plate, I have to
        be realistic with the time available and admit that I donʼt have the
        time! So it will be a future development possibility.
      </Para>
      <Para>
        Now, I am waiting for tomorrowʼs delivery of a hot pot / slow cooker.
      </Para>
      <Para>
        One of the reasons the rotating magnet heater tutorial is so exciting is
        because most of the tutorials I looked at started with a heating element
        of some type and a relay to control it. This was the first tutorial with
        raw materials. Examples below because they are interesting, especially
        the sous vide ideas.
      </Para>
      <ul>
        <li>
          <a
            href="https://www.instructables.com/Arduino-Sous-Vide-Cooker/"
            target="_blank"
          >
            Arduino Sous Vide Cooker
          </a>
        </li>
        <li>
          <a
            href="https://www.instructables.com/Smart-Water-Boiler-/"
            target="_blank"
          >
            Smart water boiler
          </a>
        </li>
        <li>
          <a
            href="https://www.instructables.com/Sous-vide-cooker-for-less-than-40/"
            target="_blank"
          >
            Another Sous Vide Cooker
          </a>
        </li>
      </ul>
      <Para>
        It is likely that the heating element would have had more luck if I had
        used a metal container but that would have interfered with my touch
        capacitance sensor for water level.
      </Para>
      <p>
        Thoughtlet: should the water amount be determined by the quantity in the
        kettle or by a factor that the user sets?
      </p>
      <p>
        I think a 3D-printed drip catcher on a servo arm could work well for
        this.
      </p>
      <p>
        3D printed drip tray with a see-saw to trigger cup detection. Aligns
        well with central teabag dropper.
      </p>
      <p>
        3D printed loop that fits over strainer handle with a hole to guide hot
        water tube
      </p>
      <p>should placement of water motor be adjustable?</p>
      <p>
        strainer winch can have a button at the top to trigger “the top” and
        then descent can be user controlled
      </p>
      <p>a cleaning program 😂</p>
    </>
  );
}

export function Mvp() {
  return (
    <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <p>
          It works! The microcontroller commands the stepper motor to drop the
          strainer into a mug. Then, if it senses water in the external
          container, it commands the peristaltic pump to dispense the water into
          a mug. {""}
          <b>
            The major missing step here is that the water has not been boiled.
          </b>{" "}
          The microcontroller then waits for the <i>user set</i> brew time to
          pass before commanding the stepper motor to raise the strainer back
          out of the mug.
        </p>
        <br />
        <p>
          At the moment, my code has hard coded flags to mock the water being
          100°C and act as the user requested brew time. It is also set to drop
          the strainer on boot up. This makes sense <i>if</i> it ran
          successfully!
        </p>
      </div>
      <div className="my-4">
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/z3hkoTYassY"
          title="It moves!"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <H4>Declare variables and set up</H4>
        <SyntaxHighlighter language="cpp" style={tomorrow}>
          {`#include <Stepper.h>

// pin variables
int water_a = 13;
int water_b = 12;
int tea_a = 14;
int tea_b = 27;
int tea_c = 26;
int tea_d = 25;
// ESP-WROOM-32: T9 = touch pin 9 = D32 = +ve
int water_level_touch = T9;

// state variables
bool time_to_brew = false;
bool water_boiling = false;
bool water_to_boil = false;
bool pouring_water = false;
long brew_start_time = 0;

// temporary variables
bool user_says_time_to_brew = false;
bool reset_tea_strainer_to_brew = false;
// LATER: needs to be
// a user set variable
long total_brew_time = 3000;

// water level state variables
int water_level_high = 6;
int water_level_low = 38;
int water_tolerance = 8;

// initialise stepper
// change this to fit the number of steps per revolution
const int stepsPerRevolution = 2048; 
// note: pin order essential to reverse correctly:
Stepper myStepper(stepsPerRevolution, tea_a, tea_c, tea_b, tea_d);

void setup() {
  Serial.begin(9600);

  // WATER MOTOR SET UP
  pinMode(water_a, OUTPUT);
  pinMode(water_b, OUTPUT);
  digitalWrite(water_a, LOW);
  digitalWrite(water_b, LOW);

  // TEA WINCH MOTOR SET UP
  myStepper.setSpeed(10);

  // temporary set variables that will be otherwise controlled:
  user_says_time_to_brew = true;
  reset_tea_strainer_to_brew = true;
}
`}
        </SyntaxHighlighter>
      </div>
      <div>
        <H4>Functions and loop()</H4>
        <SyntaxHighlighter language="cpp" style={tomorrow}>
          {`// check water level functions
bool is_there_water() {
  int touch_water_level = touchRead(water_level_touch);
  Serial.println(touch_water_level);
  if (touch_water_level > (water_level_low + water_tolerance)) {
    return false;
  }
  if (touch_water_level < (water_level_high + water_tolerance)) {
    return true;
  }
  return false;
}

// water motor functions
void run_water_motor(int direction) {
  int motor_a = water_a;
  int motor_b = water_b;
  if (direction > 0) {
    // reverse direction
    motor_a = water_b;
    motor_b = water_a;
  }
  digitalWrite(motor_a, HIGH);
  digitalWrite(motor_b, LOW);
}

void stop_water_motor() {
  digitalWrite(water_a, LOW);
  digitalWrite(water_b, LOW);
}

bool is_it_time_to_brew() {
  // check current time API
  // compared with user wake up time
  return user_says_time_to_brew;
}

void loop() {
  // prepare set up
  if (reset_tea_strainer_to_brew == true) {
    myStepper.step(stepsPerRevolution);
    reset_tea_strainer_to_brew = false;
  }
  // Q: IS IT TIME TO BREW?
  if (is_it_time_to_brew()) {
    time_to_brew = true;
  }
  // Q: IS THERE WATER TO BOIL?
  if (time_to_brew && is_there_water()) {
    water_to_boil = true;
  } else {
    water_to_boil = false;
  }
  // A: boil water
  // Q: is water boiling?
  water_boiling = true;

  // Q: is water boiled?
  if (time_to_brew && water_to_boil && water_boiling) {
  // A: transfer water to mug
    pouring_water = true;
    run_water_motor(-1);
  } else {
    stop_water_motor();
  }
  
  // Q: has water finished pouring over tea bag?
  if (time_to_brew && pouring_water == true && !water_to_boil) {
    pouring_water = false;
    brew_start_time = millis();
  }

  // Q: has tea brewed long enough?
  if (time_to_brew && brew_start_time != 0 && brew_start_time + total_brew_time < millis()) {
    // Remove teabag.
    myStepper.step(-stepsPerRevolution);
    // A: trigger a notification of some variety, sound, light, phone notification that the tea is ready
    // A: reset machine
    user_says_time_to_brew = false;
    time_to_brew = false;
    brew_start_time = 0;
  }
}`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export function MvpReview() {
  return (
    <>
      <p>
        The next step is to experiment with heating elements. So far I have
        found an abandoned “Mr Coffee” which has an original purpose of keeping
        a mug warm. I have found some large immersion heaters for aquariums
        which I have discounted due to their size. I have found the circuit
        flexible heater elements but I would need to work out the voltage limit
        for them and see how much water they can bring to what max temperature.
      </p>
      <p>
        I had assumed that I would immerse a heater into a pyrex jug but this
        seems unlikely now. If I go for the “sticking flexible heaters to a
        container” option, I might need a metal container to better conduct
        their heat but this will spanner my current copper tape sensors.
      </p>
      <p>
        I also need to work on the control system, which will allow me to set
        alarms and control the machine via a web interface, such as setting the
        userʼs brew time. It might be useful to have an LED indicator to
        communicate whether the machine is connected to the network or not.
      </p>
      <br />
      <H4>Missing features</H4>
      <ul className="list-disc pl-4">
        <li>Heating element 🔥</li>
        <li>Integrate the thermistor</li>
        <li>Web-based user interface and API integrations</li>
      </ul>
      <H4>Essential developments to the current prototype</H4>
      <ul className="list-disc pl-4">
        <li>
          Fit new silicon tube to replace small tear. Also extra length may be
          desirable.
        </li>
        <li>
          Add rails to the strainer fixing to minimise movement and limit on one
          axis (Edit CAD of structure as well as the 3D print of the strainer
          fixing)
        </li>
        <li>
          Add a switch to the rail so that the MC detects a max the winch can be
          pulled and stops the stepper motor. Can also be used to calibrate the
          stepper motor since it will be “docked” at the extreme in either
          direction i.e. the stepper can unwind the winch and continue until it
          winds the other way.
        </li>
        <li>3D print a piece to fix the tube to the strainer</li>
        <li>Housing for MC</li>
        <li>Once happy with cardboard CAD model, recreate in ply / acrylic.</li>
      </ul>
      <H4>Nice to haves</H4>
      <ul className="list-disc pl-4">
        <li>tea strainer drip catcher</li>
        <li>drip catcher under mug with see-saw to detect mug presence</li>
        <li>
          Yellow LED when the tea is ready. Could get gradually brighter using
          PWM.
        </li>
        <li>
          thermal insulation around the silicon tubes of the peristaltic motor
        </li>
        <li>
          thermal insulation around the water container to help bring water to
          the boil
        </li>
      </ul>
    </>
  );
}

export function NextVersionPlan() {
  return (
    <>
      <H4>Phase 3</H4>
      <Para>✅ Incorporate heating pads</Para>
      <Para>✅ Incorporate slow cooker with relay</Para>
      <br />
      <H4>Phase 4</H4>
      <Para>
        ✅ Collate server code with MVP code and boiler code and Class structure
      </Para>
      <Para>✅ Iterate on structure design and laser cut</Para>
      <Para>
        ✅ Iterate on strainer design with stabilising arms and 3D print
      </Para>
      <Para>🚫 Incorporate limit switch triggered by stabilising arms</Para>
      <Para>✅ Add updated timestamp to front end of web UI</Para>
      <Para>🚫 Add shortcut for mobile voice assitant to trigger device</Para>
      <Para>✅ Solder mc to protoboard</Para>
      <Para>✅ Cable management</Para>
      <H4>Phase 5</H4>
      <Para>🚫 3D print drip catcher</Para>
      <Para>🚫 3D print housing for relay and h-bridges</Para>
      <Para>🚫 Test water temperature post peristaltic pump</Para>
    </>
  );
}

export function CrunchTime() {
  return (
    <>
      <H4>Phase 3 Delivery</H4>
      <Para>
        No project is delivered smoothly, even after a successful MVP stage.
        Boiling water issues dominated my weekend.
      </Para>
    </>
  );
}
