"use client";
import Image from "next/image";
import { WideContainer, WideGrid } from "../../components/gridStuff";
import { MobileImage, PlainMediumImage } from "../../components/images";
import { ButtonLink } from "../../components/buttonLink";

export default function Page() {
  return (
    <div className="p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 className="my-4 mb-12 text-center text-3xl">
        Week 1 Part 2: 2D Design + cutting
      </h1>
      <h3 className="text-df-shade-lighter mb-8 text-2xl">1: Make a Box</h3>
      <WideGrid>
        <WideContainer>
          I designed my shoebox in a 2D sketch in Fusion. I didnʼt elaborate
          further than adding a handle! Oops! Then I got the lasercutter to sear
          it into some cardboard. I was quite unsure about the kerf... in the
          end I decided to make the teeth larger by the kerf amount (0.3mm) and
          the gaps smaller by the kerf amount... it seemed to do the job but
          this could perhaps be improved for future cuts. (Which is always more
          simple with parameters! Modify ➡️ Change parameters)
          <PlainMediumImage
            src="/close-up-parameters.png"
            alt="Close up of the parameters"
          />
          <PlainMediumImage
            src="/zoom-out-box.png"
            alt="The 2D of the box to be cut"
          />
        </WideContainer>
        <WideContainer>
          <p>
            I used Adobe Illustrator to write my name in my handwriting and
            exported the PNG file. Then, using Inkscape, the cutter sketched it
            onto a red vinyl sheet. ❤️ To be honest, I messed up the end of the
            ʼoʼ and I had to finish it by hand...!
          </p>
          <style>
            {`@keyframes rainbow {
                  0%   { background: #ff6464; }
                  20%  { background: #ff8922; }
                  40%  { background: #ffe730; }
                  60%  { background: rgb(130, 255, 130); }
                  80%  { background: #6c6cff; }
                  100% { background: #ff71de; }
            }`}
          </style>
          <Image
            width={300}
            height={300}
            src="/leo.png"
            alt="My handwritten name"
            className="mt-4 rounded-sm bg-amber-400"
            style={{
              animation: "rainbow 7s infinite alternate linear",
            }}
          />
          <p>PNGs are ripe for CSS animations!</p>
          <MobileImage
            src="/constructed-box.jpeg"
            alt="My constructed box with vinyl sticker"
          />
        </WideContainer>
        <WideContainer>
          As intended, hereʼs my Leo box hosting my lab materials: My useless
          box! (I misread the assignment and thought we were required to cut out
          the useless box too!)
          <MobileImage
            src="/useless-box.jpeg"
            alt="My box with my baby useless box"
          />
        </WideContainer>
      </WideGrid>
      <h3 className="text-df-shade-lighter my-8 text-2xl">
        2: Fusion 360 Tutorial
      </h3>
      <WideGrid>
        <WideContainer>
          <p>
            This was fun to play around with based on the recommended
            tutorials... I donʼt imagine I would ever need Sweep so it was fun
            to experiment.
          </p>
          <MobileImage src="/2d-wiggle.png" alt="wiggly 2D drawing" />
        </WideContainer>
        <WideContainer>
          <div className="justify-self-start">
            <Image
              src="/wiggle-experiment-med.gif"
              alt="GIF of wiggle in 3D shape"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          <p className="my-4 justify-self-start text-left">Fusion file:</p>
          <div className="justify-self-start">
            <ButtonLink href="/files/follow-tutorial.f3d.zip" download>
              Download Squiggle Wiggle
            </ButtonLink>
          </div>
        </WideContainer>
      </WideGrid>
      <h3 className="text-df-shade-lighter my-8 text-2xl">
        3: Fusion Modeling
      </h3>
      <WideGrid>
        <WideContainer>
          <p>I chose to model my new Pieni pen I bought in NYC 🗽:</p>
          <div className="my-4">
            <Image
              src="/pen-body.gif"
              alt="Body of the pen"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="my-4">
            <Image
              src="/pen-clicker.gif"
              alt="Clicker of the pen"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          <div className="my-4">
            <Image
              src="/pen-nib.gif"
              alt="Nib of the pen"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </WideContainer>
        <WideContainer>
          <div className="justify-self-start">
            <MobileImage src="/pieni-pen.png" alt="My finished pen" />
          </div>
          <p className="my-4 justify-self-start text-left">Fusion file:</p>
          <div className="justify-self-start">
            <ButtonLink href="/files/pieni-pen.f3d.zip" download>
              Download Pieni Pen
            </ButtonLink>
          </div>
        </WideContainer>
      </WideGrid>
      <br />
      <br />
      <WideGrid>
        <WideContainer>
          <p>
            And, my aussie hair oil... It was fun experimenting with the
            materials to get the translucent lid:
          </p>
          <MobileImage
            src="/aussie-oil.png"
            alt="Aussie hair oil bottle in 3D"
          />
        </WideContainer>
        <WideContainer>
          <p className="mb-2 justify-self-start text-left">Fusion file:</p>
          <div className="justify-self-start">
            <ButtonLink href="/files/aussie-bottle.f3d.zip" download>
              Download Aussie Bottle
            </ButtonLink>
          </div>
        </WideContainer>
      </WideGrid>
    </div>
  );
}
