"use client";

import { WideContainer, WideGrid } from "../../components/gridStuff";
import { FunH2 } from "../../components/headers";
import { PlainLargeImage, PlainMediumImage } from "../../components/images";
import { WeeklyWrapper } from "../../components/layouts";

export default function Page() {
  return (
    <WeeklyWrapper week={8}>
      <div className="p-2 py-8 pb-16 sm:px-4 md:px-6 lg:px-8">
        <h1 className="my-4 mb-12 text-center text-3xl">
          Week 4 Part 2: CNC milling, moulding, and casting
        </h1>
        <FunH2>01: CNC milling</FunH2>
        <WideGrid>
          <WideContainer>
            <p>
              I designed a frame in Fusion but it was not easy for me to think
              about the negative necessary to go from milling to moulding to
              casting...
            </p>
            <br />
            <PlainLargeImage src={"/frame-design.png"} alt={"Frame design"} />
          </WideContainer>
          <WideContainer>
            <p>
              For example, this extrusion does not make sense for the mould I
              wanted...
            </p>
            <br />
            <PlainLargeImage src={"/initial-3d.png"} alt={"Frame design"} />
          </WideContainer>
          <WideContainer>
            <p>
              Haha of course I can no longer open this file to show the milled
              version...
            </p>
            <br />
            <PlainLargeImage
              src={"/corrupted-message.png"}
              alt={"Corrupted file message"}
            />
          </WideContainer>
          <WideContainer>
            <p>Hereʼs a view in the browser version of Fusion:</p>
            <br />
            <PlainLargeImage
              src={"/browser-view.png"}
              alt={"Frame design for mould"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              I had to simplify it because I kept crashing the computer that
              operates the mill
            </p>
            <br />
            <PlainLargeImage
              src={"/crashing-the-comp.png"}
              alt={"Crashing the computer"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              But we got there eventually! The SRM-20 only milled with 1/16th
              bit so there is a groove pattern on the frame front... We will see
              what happens.
            </p>
            <br />
            <PlainLargeImage
              src={"/milled-frame.jpg"}
              alt={"Frame design milled into wax"}
            />
          </WideContainer>
        </WideGrid>
        <FunH2>02: Moulding</FunH2>
        <WideGrid>
          <WideContainer>
            <p>
              I made up silicon to make a mould of the milled frame. While I was
              waiting for it to solidify, I used a craft knife to create my
              photo layers.
            </p>
            <br />
            <PlainLargeImage
              src={"/craft-knife.jpg"}
              alt={"Craft knife blade and shards of images"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              The back image is the full photo, and they gradually build up to
              create perspective and depth.
            </p>
            <br />
            <PlainMediumImage
              src={"/layered-photo.gif"}
              alt={"Layering up the image"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              Paper tolling is a technique where you cut out layers of paper
              images and build them up to create a 3D effect.
            </p>
            <br />
            <PlainMediumImage
              src={"/the-theory.gif"}
              alt={"Craft knife blade and shards of images"}
            />
          </WideContainer>
          <WideContainer>
            <p>This gives a vague sense of the final piece...</p>
            <br />
            <PlainLargeImage
              src={"/frame-theory.jpg"}
              alt={"images layered in the silicon frame mould"}
            />
          </WideContainer>
          <WideContainer>
            <p>After 5 hours of drying, the silicon came out ok:</p>
            <br />
            <PlainLargeImage
              src={"/frame-mould.jpg"}
              alt={"Silicon mould of the milled frame"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              I used up the excess silicon mixture in some old moulds from
              previous students:
            </p>
            <br />
            <PlainLargeImage
              src={"/extra-moulds.jpg"}
              alt={"Silicon moulds from previous students"}
            />
          </WideContainer>
          <p>
            <i>
              Supplies: NicPro Silicone Rubber for Mold Making. Hardness: 15A.
            </i>
          </p>
        </WideGrid>
        <br />
        <FunH2>03: Casting</FunH2>
        <WideGrid>
          <WideContainer>
            <p>
              For the photograph to work I needed an epoxy resin with a promise
              of crystal clarity.
            </p>
            <br />
            <p>
              <i>
                Supplies: Shabebe Epoxy Resin Excellent Clear Cast Crystal
                Clear. Resin and Hardener.
              </i>
            </p>
            <br />
            <p>
              The product promised a work time of 40 minutes which was great for
              my layering but in an ideal world, I would have left each layer to
              fully dry between pours. This would have taken 24 hours
              unfortunately.
            </p>
            <br />
            <p>
              Aside from plastic mixing cups for silicon (can be reused) and
              paper cups for the resin, the crucial gear was: toothpicks!
            </p>
          </WideContainer>
          <WideContainer>
            <PlainLargeImage
              src={"/epoxy-workspace.jpg"}
              alt={"Workspace for epoxy resin casting"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              This shows the final piece after unpeeling the resin from the
              silicon mould. I did not expect the green and blue colours from
              the photographs to change to pinks and reds. Also, the crystal
              clear side is the exposed surface whereas my photograph is quite
              blurry (not helped by the grooved surface!)
            </p>
            <br />
            <PlainMediumImage
              src={"/frame-reveal.gif"}
              alt={"Unpeeling the resin from the silicon mould"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              With my spare moulds and spare resin I made a small fish. Encased
              in the resin are some dried leaves from a sprig of cranberry I
              collected when visiting Cape Cod for the 4th of July weekend. This
              fish mould turned out to be quite fitting!
            </p>
            <br />
            <PlainMediumImage
              src={"/cape-cod.gif"}
              alt={"A resin fish with cranberry leaves from Cape Cod"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              All in all, super fun task, I think Iʼll do more resin casting
              experiments!
            </p>
            <br />
            <p>
              Even though it lacks the clarity, I can see the layers and make
              out the effect of the frame.
            </p>
            <br />
            <p>
              If I tried again, I would create a mould with a frame lid and
              build from the bottom... this would allow me greater control of
              the bubbles and a crystal clear finish over the image. (The final
              big photo trapped this big bubble.)
            </p>
          </WideContainer>
          <WideContainer>
            <PlainLargeImage src={"/finished-pieces.jpg"} alt={""} />
          </WideContainer>
        </WideGrid>
      </div>
    </WeeklyWrapper>
  );
}
