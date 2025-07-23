"use client";
import Image from "next/image";
import { WideContainer, WideGrid } from "../../components/gridStuff";
import { PlainMediumImage, PlainSmallImage } from "../../components/images";
import { ButtonLink } from "../../components/buttonLink";
import {
  PredictedBillOfMaterials,
  PredictedTimeline,
  ProjectGoals,
} from "../projects/final-project/components";
import { FunH2 } from "../../components/headers";
import { WeeklyWrapper } from "../../components/layouts";

export default function Page() {
  return (
    <WeeklyWrapper week={5}>
      <div className="p-2 px-8 py-8 pb-16 sm:px-32">
        <h1 className="my-4 mb-12 text-center text-3xl">
          Week 3 Part 1: 3D Design, Printing, Scanning
        </h1>
        <FunH2>Design and 3D print a component</FunH2>
        <WideGrid>
          <WideContainer>
            <p>
              Even though itʼs not my final project, iterating on my kinetic
              sculpture is a great framework for learning new skills. On
              reviewing my jewellery carousel prototype I wanted to create a
              bespoke fitting for the jewellery to replace the bulldog clips.
              This was not something I was able to do (obviously) in 2D parts.
              For extra jshzsh I designed a star-shaped hook. This allows
              earrings to sit in the lower star points but also little arms to
              support a necklace.
            </p>
            <br />
            <p>
              There is a loop (not visible in picture) which is the diameter to
              fit the screw sitting under the gear above the carousel roof.
            </p>
          </WideContainer>
          <WideContainer>
            <PlainMediumImage
              src={"/star-hook.png"}
              alt={"My first attempt at the star hook in fusion"}
            />
          </WideContainer>
          <WideContainer>
            <br />
            <p>This version was a small disaster 😂.</p>
            <br />
            <p>
              In an attempt to optimise the structural integrity of the hook, I
              chose a complex print orientation. This is because the Prusa
              Slicer prints 2D layers which fuse together. The fusing together
              of the layers is not as strong as the strength within the layer
              itself.
            </p>
            <br />
            <p>
              Prusa added a lot of organic supports to make my proposed print
              orientation to work.
            </p>
            <br />
            <p>
              It was impossible to remove them and unsurprisingly the hook
              broke... between slices where these prints are weakest.
            </p>
            <PlainMediumImage
              src={"/broken-star.jpg"}
              alt={"Broken spaghetti star piece"}
            />
          </WideContainer>
          <WideContainer>
            <div className="my-4">
              <Image
                src="/organic-struts.gif"
                alt="3D printer printing organic struts"
                unoptimized
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
          </WideContainer>
          <WideContainer>
            <p>
              <b>So we try again!</b>
            </p>
            <br />
            <p>
              I increased the thickness by 1mm and I removed all the curvature
              which probably made the hook more fiddly than it needed to be (and
              possibly weaker). I also changed the design a little.
            </p>
            <PlainMediumImage
              src={"/star-hook-new.png"}
              alt={"New star hook design"}
            />
          </WideContainer>
          <WideContainer>
            <p>Star hook v2 downloads:</p>
            <br />
            <div>
              <ButtonLink href="/files/star-hook-v10.f3d.zip" download>
                .f3d for Fusion
              </ButtonLink>
              <br />
              <ButtonLink href="/files/follow-tutorial.f3d.zip" download>
                .stl mesh for PrusaSlicer
              </ButtonLink>
              <br />
              <ButtonLink href="/files/follow-tutorial.f3d.zip" download>
                .gcode of slices for Prusa i3 MK3S
              </ButtonLink>
            </div>
          </WideContainer>
          <WideContainer>
            <p>
              Thinking about different printer layouts, I decided to go for the
              green one that would reduce organic supports while, hopefully,
              still optimising for the expected force directions. There is a
              weakness between the loop around the screw and the arm holding the
              star which is fairly critical. We will have to see what happens.
            </p>
            <div className="flex flex-wrap gap-1">
              <PlainSmallImage src={"/layout-3.png"} alt={""} />
              <PlainSmallImage src={"/layout-2.png"} alt={""} />
              <PlainSmallImage src={"/layout-1.png"} alt={""} />
            </div>
          </WideContainer>
          <WideContainer>
            <p>
              <b>Finished product</b>
            </p>
            <div className="flex flex-wrap gap-1">
              <PlainSmallImage
                src={"/star-hook-with-screw.jpg"}
                alt={"red star hook with screw fixture"}
              />
              <PlainSmallImage
                src={"/carousel-with-star.jpg"}
                alt={"Proto carousel with star hook"}
              />
            </div>
            <br />
            <p>
              Screwing the screw into the star hook was quite difficult and I
              was a little concerned about the PLA slices holding but since I
              want the hook to rotate with the screw itʼs good itʼs a tight fit.
              If the screw rotates within the hook, itʼs a fail. This being
              said, I am surprised I didnʼt accommodate a kerf-like parameter
              into my design, e.g. screwDiam + kerf, to take the additive
              tolerance into consideration. I restarted my design at some point
              so perhaps I dropped the param.
              <br />
              (I canʼt use a hexagon shaped hole because thatʼs reserved for the
              gear above which will rotate the hexagon nut.)
            </p>
            <br />
            <p>
              I think varying the length of the star stem would be visually good
              and practically smart for different sized earrings.
            </p>
          </WideContainer>
        </WideGrid>
        <br />
        <FunH2>3D Scanning</FunH2>
        <WideGrid>
          <WideContainer>
            <p>
              I scanned a tiny hedgehog shaped planter. This was not an ideal
              choice because of its shiny glaze.
            </p>
            <PlainMediumImage
              src={"/hedgie-ready-for-close-up.jpg"}
              alt={
                "Tiny hedgehog planter ready for his close up on revolving table in lightbox"
              }
            />
          </WideContainer>
          <WideContainer>
            <p>
              3D scanning and editing is an absolute nightmare. Respectfully, I
              hope I never have to do it again 😅.
            </p>
            <PlainMediumImage
              src={"/scan-mesh-merge.JPG"}
              alt={"multiple scans trying to merge"}
            />
          </WideContainer>
          <WideContainer>
            <p>
              Itʼs not terrible but I could not get the fill tool to work on the
              planter brim.
            </p>
            <div className="my-4">
              <Image
                src="/hedgehog-scan.gif"
                alt="3D scan of hedgehog planter"
                unoptimized
                width={300}
                height={300}
                className="rounded-md"
              />
            </div>
          </WideContainer>
          <WideContainer>
            <p>Hedgehog RevoPoint Scans</p>
            <br />
            <p>
              To be honest I have no idea if the revo file works without the
              data folder but I did not want to add 130MB to my Github repo
              (which I think would be irreversible!)
            </p>
            <br />
            <ButtonLink href="/files/LG-hedgie-planter.revo.zip" download>
              .revo file (maybe)
            </ButtonLink>
          </WideContainer>
        </WideGrid>
        <FunH2>Review</FunH2>
        <WideGrid>
          <div className="max-w-2xl">
            <p>
              I will get to test my star hook properly once I have finished
              refining my V2 jewellery carousel (kinetic sculpture).
            </p>
            <br />
            <p>
              The 3D printed items are definitely fragile between slices and
              cutting away (organic) scaffolding needs to take this into
              consideration. I want to take the “kerf” into consideration next
              time.
            </p>
            <p>Increasing the PLA thickness is one improvement I made.</p>
            <br />
            <p>
              I might inadvertently alter any project plans to ensure they donʼt
              require 3D scanning of any sort!
            </p>
            <br />
            <h4>
              <b>Carousel pieces</b>
            </h4>
            <br />
            <p>
              As part of my refining the carousel, I have been designing 2D
              pieces that can slot together to create the base.
            </p>
            <br />
            <p>
              Aside from being a neater design, it also wonʼt require glue,
              allowing me to disassemble and reassemble the carousel.
            </p>
            <br />
            <p>
              I think the spacing is a little tight so I might decrease the kerf
              parameter. I also want to round the corners of sliding pieces for
              easier assembly. I need to create space for the external gear from
              the base above.
            </p>
          </div>
          <WideContainer>
            <p>First attempt</p>
            <PlainMediumImage
              src={"/carousel-base-old.jpg"}
              alt={"old carousel base"}
            />
            <br />
            <p>Half of the new base design</p>
            <PlainMediumImage
              src={"/carousel-base-proto.jpg"}
              alt={"new carousel base"}
            />
          </WideContainer>
        </WideGrid>
        <FunH2>Final Project</FunH2>
        <br />
        <ProjectGoals />
        <br />
        <PredictedBillOfMaterials />
        <br />
        <PredictedTimeline />
      </div>
    </WeeklyWrapper>
  );
}
