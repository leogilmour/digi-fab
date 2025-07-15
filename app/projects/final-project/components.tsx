import { JSX } from "react";
import { TableGrid } from "../../../components/gridStuff";
import { PlainSmallImage } from "../../../components/images";

function H3({ children }: { children: string }) {
  return (
    <h3 className="text-df-shade-lighter text-md my-4 font-black tracking-widest uppercase">
      {children}
    </h3>
  );
}

function H4({ children }: { children: string }) {
  return <h4 className="text-df-shade-lighter text-md my-4">{children}</h4>;
}

function Li({ children }: { children: string }) {
  return <li className="my-2">{children}</li>;
}

function Table({ children }: { children: JSX.Element[] }) {
  return (
    <table className="table-auto border-separate border-spacing-2 border">
      {children}
    </table>
  );
}

function Td({ children }: { children: string | JSX.Element }) {
  return <td className="border-spacing-2 border p-1">{children}</td>;
}
export function Introduction() {
  return (
    <>
      <H3>Introduction</H3>
      <p>
        In the 1950s, 60, 70s, and even the 80s, Teasmades were all the rage in
        the UK. A brand I particularly like was called{" "}
        <a
          href="https://www.teasmade.uk/the-goblin-logo/"
          className="text-df-shade-lighter underline"
        >
          <i>Goblin</i>
        </a>
        , seen here in action:
      </p>
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
      <p>
        I think that terrible buzzer contributed to their fall in popularity but
        there are plenty of enthusiasts as demonstrated{" "}
        <a
          href="https://www.teasmade.uk/"
          className="text-df-shade-lighter underline"
        >
          <i>here</i>
        </a>{" "}
        who keep the old school machines alive.
      </p>
      <p>
        I have looked at buying an old Goblin machine but I have been deterred
        mostly by the buzzer. If only I had the skills to create my own
        version...
      </p>
    </>
  );
}

export function ProjectGoals() {
  return (
    <>
      <H3>Project goals</H3>
      <H4>My proposed features</H4>
      <p>A machine which:</p>
      <ol>
        <li>Queries a user-set input for a time to be ready,</li>
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
          An extra machine component which adds a specified amount of milk from
          a tiny thermos flask. A tiny fridge would be too extreme.
        </Li>
        <Li>
          The ability to set the machine alarm time from household integrations
          like Amazon Alexa devices.
        </Li>
        <Li>
          A S.A.D. light which slowly brightens in parallel with the tea
          preparation.
        </Li>
      </ol>
      <H4>Project considerations</H4>
      <p>
        The likely web-based interface needs to be password protected so only I
        can determine when the alarm goes off 😂
      </p>
      <br />
      <p>
        Being woken up by a malfunctioning robot throwing boiling water on my
        face...
      </p>
      <br />
      <p>Internet going down meaning my alarm doesnʼt trigger</p>
      <br />
      <p>
        Switching to and from British Summer Time meaning the machine
        potentially mis-times the wake up call.
      </p>
    </>
  );
}

export function PredictedBillOfMaterials() {
  return (
    <>
      <H3>Predicted Bill of Materials</H3>
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
          <Td>Motor (+ driver) for pump</Td>
          <Td>$4.15</Td>
          <Td>
            <a
              href="https://www.wiltronics.com.au/product/10137/yellow-motor-3-12vdc-2-flats-shaft/"
              target="_blank"
            >
              https://www.wiltronics.com.au/product/10137/yellow-motor-3-12vdc-2-flats-shaft/
            </a>
          </Td>
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
            <Td>Digital thermometer</Td>
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
            <Td>Alt handled sieve</Td>
            <Td>$4.49</Td>
            <Td>H Mart</Td>
          </tr>
          <tr>
            <Td>Motor (+ driver) for winch</Td>
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
      <H3>Predicted timeline</H3>
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
      <p>
        Thoughtlet: should the water amount be determined by the quantity in the
        kettle or by a factor that the user sets?
      </p>
    </>
  );
}
