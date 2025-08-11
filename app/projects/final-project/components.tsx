import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Table, Td } from "../../../components/basicTable";
import {
  Grid,
  TableGrid,
  WideContainer,
  WideGrid,
} from "../../../components/gridStuff";
import {
  PlainLargeImage,
  PlainMediumImage,
  PlainSmallImage,
} from "../../../components/images";
import { Para } from "../../../components/typography";
import { H4 } from "../../../components/headers";

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
      <H4 color="text-df-shade-lighter">
        Time triggered boiling water machine (yes, basically a kettle)
      </H4>
      <p>
        <i>Main issue to solve:</i> getting boiling water from machine to mug
      </p>
      <br />
      <Grid>
        <div>
          <PlainSmallImage src={"/brainstorm/push.jpg"} alt={""} />
          <p>Push the bottom of the kettle up</p>
        </div>
        <div>
          <PlainSmallImage src={"/brainstorm/winch.jpg"} alt={""} />
          <p>Pull the top of the kettle down (needs an axle for rotation)</p>
        </div>
        <div>
          <PlainSmallImage src={"/brainstorm/peri.jpg"} alt={""} />
          <p>Peristaltic pump</p>
        </div>
        <div>
          <PlainSmallImage src={"/brainstorm/moka.jpg"} alt={""} />
          <p>Pressure cooker with a pipe (like the moka pot)</p>
        </div>
        <div>
          <PlainSmallImage src={"/brainstorm/urn.jpg"} alt={""} />
          <p>Urn with a tap</p>
        </div>
        <div>
          <PlainSmallImage src={"/brainstorm/immersion.jpg"} alt={""} />
          <p>Drop an immersion heater directly into the mug</p>
        </div>
        <div>
          <PlainSmallImage src={"/brainstorm/siphon.jpg"} alt={""} />
          <p>A siphon!</p>
        </div>
      </Grid>
      <H4 color="text-df-shade-lighter">Tea brewing machine</H4>
      <p>
        <i>Main issue to solve:</i> getting the teabag into and out of the water
        after a specific time period
      </p>
      <br />
      <Grid>
        <div>
          <PlainSmallImage src={"/brainstorm/tea-pin.jpg"} alt={""} />
          <p>Rack and pinion</p>
        </div>
        <div>
          <PlainSmallImage src={"/brainstorm/tea-winch.jpg"} alt={""} />
          <p>Winch and pulley</p>
        </div>
        <div>
          <PlainSmallImage src={"/brainstorm/servo-arm.jpg"} alt={""} />
          <p>Servomotor and arm</p>
        </div>
      </Grid>
    </>
  );
}

export function ProjectGoals() {
  return (
    <>
      <H4 color="text-df-shade-lighter">My proposed features</H4>
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
      <H4 color="text-df-shade-lighter">
        Future features that I would like to add one day
      </H4>
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
      <H4 color="text-df-shade-lighter">Project considerations</H4>
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
      <H4 color="text-df-shade-lighter">Boiling water machine</H4>
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
      <H4 color="text-df-shade-lighter">Teabag brewing machine</H4>
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
      <H4 color="text-df-shade-lighter">Control</H4>
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
      <H4 color="text-df-shade-lighter">Phase 1</H4>
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
      <H4 color="text-df-shade-lighter">Phase 2</H4>
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
      <TableGrid columns={2}>
        <p className="border p-1">
          <b>immersion heater</b>
        </p>
        <p className="border p-1">
          <b>kettle</b>
        </p>
        <p className="border p-1">
          Programmatically switch on heater. Use a digital thermometer to
          determine when the water was boiling and programmatically switch off
          the immersion heater.
        </p>
        <p className="border p-1">
          Create a mechanical toggle to switch on the kettle and detect when it
          switches off and ready to pour.
        </p>
        <p className="border p-1">
          Could descend and rise on a winch/pulley directly into the mug. If
          there are concerns with this method, it could be in a heatproof dish
          and the boiling water pumped out.
        </p>
        <p className="border p-1">
          Once the mechanical toggle detects the kettle has boiled, a pump could
          bring the water into the mug.
        </p>
        <p className="border p-1">
          <b>flexible heating element</b>
        </p>
        <p className="border p-1">
          <b>slow cooker</b>
        </p>
        <p className="border p-1">
          Programmatically switch on element. Use a digital thermometer to
          determine when the water was boiling and programmatically switch off
          the flexible heating element.
        </p>
        <p className="border p-1">
          Use a relay to switch on the slow cooker and a temperature sensor to
          detect when to switch it off.
        </p>
        <p className="border p-1">Pump the water out from the pyrex.</p>
        <p className="border p-1">Pump the water out from the ceramic.</p>
      </TableGrid>
      <br />
      <H4 color="text-df-shade-lighter">Adventures in heating experiments</H4>
      <Para>
        After messing around with a very small flexible heating element, I found
        it difficult to get the water to a boil but there were signs of heating.
      </Para>
      <Para>
        My second attempt with a bigger heating element was an improvement. The
        water was hot enough that I did not want to keep my hand in there but
        that is not hot enough. This experiment ran for 2h 30m.
      </Para>
      <Para>
        My ideal self-constructed heating option might be a{" "}
        <b>magnetic induction heater</b>. Here is a tutorial that looks
        promising:{" "}
        <a
          href="https://www.instructables.com/DIY-Induction-Stove/"
          target="_blank"
          className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
        >
          DIY Induction Stove
        </a>
        . In conjunction with a small induction plate such as this:{" "}
        <a
          href="https://www.bialetti.com/it_en/piattello-induzione.html"
          target="_blank"
          className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
        >
          Bialetti Induction Plate
        </a>
        .
      </Para>
      <Para>
        From some of the youtube reviews, the tutorial can be improved if taking
        Halbach arrays into account:
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
            className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
          >
            Arduino Sous Vide Cooker
          </a>
        </li>
        <li>
          <a
            href="https://www.instructables.com/Smart-Water-Boiler-/"
            target="_blank"
            className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
          >
            Smart water boiler
          </a>
        </li>
        <li>
          <a
            href="https://www.instructables.com/Sous-vide-cooker-for-less-than-40/"
            target="_blank"
            className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
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
    </>
  );
}

export function Competitors() {
  return (
    <>
      <Para>
        Well, not so much <i>competitors</i> as <i>inspirations</i>...
      </Para>
      <H4 color="text-df-shade-lighter">Commercial</H4>
      <Para>
        Of course, there are the original{" "}
        <a
          href="https://www.teasmade.uk/tag/buy-and-sell/"
          className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
          target="_blank"
        >
          Teasmades
        </a>
        , still going strong on the vintage market.
      </Para>
      <Para>
        <a
          href="https://www.amazon.com/Barisieur-Coffee-Alarm-Clock-Maker/dp/B07RWQCC51/ref=sr_1_6"
          target="_blank"
          className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
        >
          This
        </a>{" "}
        is the dream design-wise but it is made for coffee
      </Para>
      <H4 color="text-df-shade-lighter">Makers</H4>
      <Para>
        <a
          href="https://www.raspberrypi.com/news/teasmade-comes-back-to-life-with-raspberry-pi/"
          target="_blank"
          className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
        >
          Teasmade x Raspberry pi
        </a>
      </Para>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-df-accent">
          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/utTrqCptxRo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
        <div className="bg-df-accent">
          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/U5Su26FxBuo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
        <div className="bg-df-accent">
          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/Ey2nsTs62zA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
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
        <H4 color="text-df-shade-lighter">Declare variables and set up</H4>
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
        <H4 color="text-df-shade-lighter">Functions and loop()</H4>
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
      <H4 color="text-df-shade-lighter">Missing features</H4>
      <ul className="list-disc pl-4">
        <li>Heating element 🔥</li>
        <li>Integrate the thermistor</li>
        <li>Web-based user interface and API integrations</li>
      </ul>
      <H4 color="text-df-shade-lighter">
        Essential developments to the current prototype
      </H4>
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
      <H4 color="text-df-shade-lighter">Nice to haves</H4>
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
      <H4 color="text-df-shade-lighter">Thoughtlets</H4>
      <ul className="list-disc pl-4">
        <li>
          3D printed drip tray with a see-saw to trigger cup detection. Aligns
          well with central teabag dropper.
        </li>
        <li>
          3D printed loop that fits over strainer handle with a hole to guide
          hot water tube
        </li>
        <li>should placement of water motor be adjustable?</li>
        <li>
          strainer winch can have a button at the top to trigger “the top” and
          then descent can be user controlled
        </li>
        <li>a cleaning program 😂</li>
      </ul>
    </>
  );
}

export function NextVersionPlan() {
  return (
    <>
      <H4 color="text-df-shade-lighter">Phase 3</H4>
      <Para>✅ Incorporate heating pads</Para>
      <Para>✅ Incorporate slow cooker with relay</Para>
      <br />
      <H4 color="text-df-shade-lighter">Phase 4</H4>
      <Para>✅ Iterate on structure design and laser cut</Para>
      <Para>
        ✅ Iterate on strainer design with stabilising arms and 3D print
      </Para>
      <Para>✅ Add updated timestamp to front end of web UI</Para>
      <Para>✅ Solder mc to protoboard</Para>
      <Para>✅ Cable management</Para>
      <Para>✅ Replace leaking peristaltic pump tube</Para>
      <Para>
        ✅ Collate server code with MVP code and boiler code and Class structure
      </Para>
      <Para>
        ✅ 3D printed loop that fits over strainer handle with a hole to guide
        hot water tube
      </Para>
      <Para>🚫 Incorporate limit switch triggered by stabilising arms</Para>
      <Para>🚫 Add shortcut for mobile voice assistant to trigger device</Para>
      <H4 color="text-df-shade-lighter">Phase 5</H4>
      <Para>🚫 3D print drip catcher</Para>
      <Para>🚫 3D print housing for relay and h-bridges</Para>
      <Para>🚫 Test water temperature post peristaltic pump</Para>
    </>
  );
}

export function CrunchTime() {
  return (
    <div>
      <H4 color="text-df-shade-lighter">Phase 3 Delivery: Boiling water</H4>
      <Para>
        No project is delivered smoothly, even after a <i>mostly</i> successful
        MVP stage. Boiling water issues dominated my weekend. First was an
        experiment to determine the power of one heat pad.
      </Para>
      <div className="grid grid-cols-1 justify-items-center gap-4 align-middle sm:grid-cols-2 md:grid-cols-3">
        <PlainMediumImage
          src="/final-project/heat-1.JPG"
          alt="heat proof glove with a heat pad and a pyrex of water"
        />
        <PlainMediumImage
          src="/final-project/heat-2.JPG"
          alt="heat proof glove with a heat pad and a pyrex of water"
        />
        <PlainMediumImage
          src="/final-project/heat-3.JPG"
          alt="heat proof glove with a heat pad and a pyrex of water"
        />
        <PlainMediumImage
          src="/final-project/heat-4.JPG"
          alt="heat proof glove with a heat pad and a pyrex of water"
        />
        <div className="col-span-1 sm:col-span-2">
          <Para>
            Bubbles and condensation formed on the pyrex as the water heated up
            which was promising... but ultimately, as you can see from the
            stopwatch in the photo, it took over 3 hours to reach a temperature
            which I could uncomfortably put my hand in. This was with the
            biggest heat pad and a steady 12 volts.
          </Para>
        </div>
        <div className="col-span-1">
          <Para>
            I pivoted to a slow cooker. It was my appliance of choice because
            they are designed to be left on over night, unattended, which I what
            I plan to do.
          </Para>
          <Para>
            Additionally, unlike a kettle, it has no automatic switch-off. This
            means I can control it easily with my microcontroller and a relay.
          </Para>
          <Para>
            With this method, the water reached a suitable temperature of 92°C.
          </Para>
        </div>
        <PlainMediumImage
          src="/final-project/heat-6.gif"
          alt="slow cooker with an always-on switch"
        />
        <PlainMediumImage
          src="/final-project/heat-5.JPG"
          alt="slow cooker with a digital thermometer"
        />
      </div>
      <H4 color="text-df-shade-lighter">Adventures with relays</H4>
      <div className="grid grid-cols-1 justify-items-center gap-4 align-middle sm:grid-cols-2 md:grid-cols-3">
        <PlainMediumImage
          src="/final-project/relay-1.gif"
          alt="cutting live wire"
        />
        <div className="col-span-1">
          <Para>
            First identify the hot wire in the outlet. For me, the polarised US
            plug meant I could identify the smooth cord (not ribbed) and the
            smaller pin (not the wider one) as being the hot wire.
          </Para>
          <Para>
            Connect hot wire from wall plug → <em>COM</em> terminal
          </Para>
          <Para>
            Hot wire to slow cooker → <em>NO</em> terminal
          </Para>
          <Para>
            NO stands for normally open, i.e. the circuit is open (off) when the
            relay is not activated.
          </Para>
        </div>
        <PlainMediumImage
          src="/final-project/relay-2.gif"
          alt="stripping live wire"
        />
        <div className="col-span-1">
          <Para>
            I had some apprehension about working with mains voltage. If I
            picked up the relay when connected and plugged in, I could feel the
            current running through it via the pins, which was quite horrifying,
            to be honest.
          </Para>
        </div>
        <PlainMediumImage
          src="/final-project/relay-ready.JPG"
          alt="cutting live wire"
        />
        <Para>
          Additionally, I had a nightmare getting the mains wires to stay pinned
          by the screws and had to reassemble it three times, eventually
          soldering the ends to help secure them.
        </Para>
      </div>
      <H4 color="text-df-shade-lighter">Sensor update</H4>
      <div className="grid grid-cols-1 justify-items-center gap-4 align-middle sm:grid-cols-2 md:grid-cols-3">
        <Para>
          With the sudden integration of the slow cooker, I had to abandon my
          original capacitive touch water sensor. This is a real shame because
          not only did it ensure the boiler would not come on unless there was
          water to boil but it also meant I could control the start and stop of
          the peristaltic motor perfectly. For now, the motor is programmed to
          run for 30 seconds.
        </Para>
        <Para>
          Additionally, I could no longer fix the thermistor to the outside of
          the device. I decided to thread it through a silicone tube and
          submerge it in the slow cooker. You can see the green wire encased in
          the tube looping through here:
        </Para>
        <Para>
          For version 3 of this machine, I will source a plastic cased kettle
          slow cooker combo, when Iʼm back in the U.K.
        </Para>
        <PlainMediumImage
          src="/final-project/thermistor.gif"
          alt="thermistor in silicone tube"
        />
      </div>
      <H4 color="text-df-shade-lighter">Phase 4: peristaltic pump</H4>
      <div className="grid grid-cols-1 justify-items-center gap-4 align-middle sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2">
          <Para>
            The moment Iʼm most proud of might be my panicked splice and heat
            shrink to solve my peristaltic pump woes.
          </Para>
          <Para>
            I tried 4 different pumps. My original pump from my MVP had a tear
            in the tube.
          </Para>
          <Para>
            I tried to replace the torn tube but could not find silicone with
            the same squishyness.
          </Para>
          <Para>
            I tried to move an existing tube around which was missing the white
            bead that makes part of its design but it would pump without it. I
            tried cable ties to simulate the white bead effect but that didnʼt
            help much either!
          </Para>
          <Para>
            Out the box, the peristaltic pumps have one end extremely
            short--this makes no sense to me. I tried taping an extra length but
            it was not water tight of course.
          </Para>
          <Para>
            Eventually I spliced the short end into a new length of silicone
            tubing and sealed it with heat shrink. It seemed perfectly water
            tight!
          </Para>
        </div>
        <PlainMediumImage
          src="/final-project/peri-splice.JPG"
          alt="peristaltic pump spliced together"
        />
      </div>
      <H4 color="text-df-shade-lighter">Phase 4: compiling all the code</H4>
      <WideGrid>
        <WideContainer>
          <Para>
            The moment Iʼm least proud of might be the sheer hours spent
            debugging my code... something about my attempt to use the C++ class
            system broke everything indiscernibly.
          </Para>
          <Para>
            Pins could not be controlled within classes, perhaps something to do
            with public and private and passing of variables...
          </Para>
          <Para>
            I had to pull out all the machine logic and put it back in the loop
            function while all the states were controlled by classes.
          </Para>
          <a
            href="/files/main-teatime.cpp"
            target="_blank"
            className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
          >
            View raw code
          </a>
          <PlainMediumImage
            src="/final-project/debugging.gif"
            alt="miserably debugging code"
          />
          <Para>Me at my most miserable...😂</Para>
        </WideContainer>
        <WideContainer>
          <SyntaxHighlighter language="cpp" style={tomorrow}>
            {`void loop()
{
    server.handleClient(); // Handle incoming requests:

    // check if user has set an alarm
    if (userSetReadyTime.length() != 0)
    {
        checkTime(); // Update time
        teaMakingMachine.update(); // State update
    }

    if (wind_strainer)
    {
        if (strainer_direction > 0)
        {
            myStepper.step(1.5 * stepsPerRevolution);
        }
        else
        {
            myStepper.step(-1.5 * stepsPerRevolution);
        }
        wind_strainer = false;
    }

    if (pour_water)
    {
        pinMode(water_motor_a_pin, OUTPUT);
        pinMode(water_motor_b_pin, OUTPUT);
        digitalWrite(water_motor_a_pin, HIGH);
        digitalWrite(water_motor_b_pin, LOW);
    }
    else
    {
        pinMode(water_motor_a_pin, OUTPUT);
        pinMode(water_motor_b_pin, OUTPUT);
        digitalWrite(water_motor_a_pin, LOW);
        digitalWrite(water_motor_b_pin, LOW);
    }
}
    `}
          </SyntaxHighlighter>
        </WideContainer>
      </WideGrid>
      <H4 color="text-df-shade-lighter">Phase 4: laser cutting</H4>
      <div className="grid grid-cols-1 justify-items-center gap-4 align-middle sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 md:col-span-3">
          <Para>
            I limited myself to flatpack structures because I want to take my
            machine apart and reassemble it easily.
          </Para>
        </div>
        <PlainMediumImage src="/final-project/laser-1.gif" alt="rhino cad" />
        <PlainMediumImage src="/final-project/laser-2.gif" alt="ucp settings" />
        <PlainMediumImage
          src="/final-project/laser-3.gif"
          alt="laser cutting"
        />
      </div>
      <H4 color="text-df-shade-lighter">Phase 4: soldering to protoboard</H4>
      <Para>
        My circuit diagram. During the showcase, there was one particular wire
        that would pop itself off a pin and it would take me a while to work out
        why my machine was not working!
      </Para>
      <PlainLargeImage
        src={"/final-project/final-circuit-diagram.jpeg"}
        alt={""}
      />
      <H4 color="text-df-shade-lighter">Phase 5: did not reach!</H4>
      <Para>
        I will have to continue developing this project in my own time.
      </Para>
      <Para>
        I am taking its components (and my skills!) back to the U.K. and I will
        find a{" "}
        <a
          href="https://openworkshopnetwork.com/"
          className="text-df-accent hover:text-df-shade-lighter underline underline-offset-3"
          target="_blank"
        >
          makerspace there
        </a>
        .
      </Para>
      <H4 color="text-df-shade-lighter">Showcase</H4>
      <Para>
        Crunch time was rewarded with an exciting atmosphere at the showcase. It
        was fun to see the difference in reactions between classmates who had
        seen the progress over the term and their friends and family who were
        just seeing a finished product! It was fabulous to see everyoneʼs
        projects on display.
      </Para>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <PlainLargeImage
          src="/final-project/snacks-tea.JPG"
          alt="party refreshments"
        />
        <PlainLargeImage
          src="/class-photo.jpeg"
          alt="showcase event participants"
        />
      </div>
    </div>
  );
}
