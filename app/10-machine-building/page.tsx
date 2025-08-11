"use client";

import { WideGrid } from "../../components/gridStuff";
import { FunH2 } from "../../components/headers";
import { PlainMediumImage } from "../../components/images";
import { WeeklyWrapper } from "../../components/layouts";
import { Para } from "../../components/typography";
import { Hr } from "../../components/spacers";

export default function Page() {
  return (
    <WeeklyWrapper week={10}>
      <div className="p-2 py-8 pb-16 sm:px-4 md:px-6 lg:px-8">
        <h1 className="my-4 mb-12 text-center text-3xl">
          Week 5 Part 2: Machine building
        </h1>
        <FunH2>Assemble and program a drawing machine</FunH2>
        <Para>We brainstormed fun ideas for our end effector:</Para>
        <div className="grid list-disc grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://www.mycakeschool.com/images/2010/02/Writing-on-Cake-.jpg)] bg-cover bg-center"></div>
            <p>Cake / cookie icer</p>
          </div>
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://www.lasercuttinginc.us/wp-content/uploads/2015/10/IMG_7049-e.jpg)] bg-cover bg-center"></div>
            <p>Magnifying glass and laser to burn wood...</p>
          </div>
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://artclubblog.com/wp-content/uploads/2012/07/p1130148.jpg)] bg-cover bg-center"></div>
            <p>Cyanotypes (tracing a bright LED over the special paper)</p>
          </div>
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://stoysnetcdn.com/patc/patc32/patc32_1.jpg)] bg-cover bg-center"></div>
            <p>Wooly willy (A magnetic wand moves and places metal filings)</p>
          </div>
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://i.pinimg.com/736x/10/7a/a4/107aa4b01d8b1bb12d783bb7b9e1d6a0.jpg)] bg-cover bg-center"></div>
            <p>Ferromagnetic fluid</p>
          </div>
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://club.chicacircle.com/wp-content/uploads/2014/11/Fall-Leaf-and-Owl-Puffy-Paint-Window-Decorations-DIY.jpg)] bg-cover bg-center"></div>
            <p>Puff paint for window decals or t-shirts</p>
          </div>
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://chromatek.net/cdn/shop/products/CHROMATEK-WatercolorPens-54-04s.jpg)] bg-cover bg-center"></div>
            <p>Brush pen</p>
          </div>
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://www.thisiscolossal.com/wp-content/uploads/2018/04/sisyphus-2.jpg)] bg-cover bg-center"></div>
            <p>
              Sisyphus machine (move a ball bearing through sand with a magnet)
            </p>
          </div>
          <div>
            <div className="bg-df-accent block min-h-60 min-w-full bg-[url(https://i.ebayimg.com/images/g/NIgAAOSw0PpjsoZ9/s-l1200.jpg)] bg-cover bg-center"></div>
            <p>Japanese karesansui machine</p>
          </div>
        </div>
        <Para>...some ideas are more achievable than others!</Para>
        <Hr />
        <p>
          <a
            href="https://adrianb31.github.io/Phys_12/10_machine/index.html"
            target="_blank"
            className="text-df-accent underline underline-offset-3 hover:opacity-80"
          >
            Adrianʼs documentation of our project
          </a>
        </p>
        <br />
        <p>
          <a
            href="https://github.com/leogilmour/mr-frosty"
            target="_blank"
            className="text-df-accent underline underline-offset-3 hover:opacity-80"
          >
            Our GitHub repo for our code
          </a>
        </p>
        <Hr />
        <FunH2>Class demo</FunH2>
        <Para>
          With{" "}
          <a
            href="https://adrianb31.github.io/Phys_12/13_finalproject/index.html"
            target="_blank"
            className="text-df-accent underline underline-offset-3 hover:opacity-80"
          >
            Adrian
          </a>
          ,{" "}
          <a
            href="https://eckay.github.io/phys_s-12/13_finalproject/final.html"
            target="_blank"
            className="text-df-accent underline underline-offset-3 hover:opacity-80"
          >
            Emma
          </a>
          , and{" "}
          <a
            href="https://nickkosty.github.io/phys-s-12/13_finalproject/index.html"
            target="_blank"
            className="text-df-accent underline underline-offset-3 hover:opacity-80"
          >
            Nick
          </a>
          , we decided to create a drawing robot that extruded frosting.
        </Para>
        <Para>
          Emma, incredibly, programmed the machine to draw in cursive. (
          <a
            href="https://nathanmelenbrink.github.io/ps70/index.html"
            target="_blank"
            className="text-df-accent underline underline-offset-3 hover:opacity-80"
          >
            PS70
          </a>{" "}
          is the name of the class during Fall and Spring terms.)
        </Para>
        <WideGrid>
          <PlainMediumImage src={"/machine-building/ps70-icing.gif"} alt={""} />
          <div className="my-4">
            <iframe
              width="236"
              height="420"
              src="https://www.youtube.com/embed/lgoz2hiLHM8"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </WideGrid>
        <Para>Myriad things went wrong.</Para>
        <div className="grid list-disc grid-cols-1 justify-items-center gap-4 align-middle sm:grid-cols-2 md:grid-cols-3">
          <PlainMediumImage
            src="/machine-building/fusion-mistake.jpg"
            alt="A photo of a 3D printed part that I missed one resize face"
          />
          <PlainMediumImage
            src="/machine-building/spag-1.jpg"
            alt="My first 3D print spaghetti"
          />
          <PlainMediumImage
            src="/machine-building/spag-2.jpg"
            alt="My first 3D print spaghetti 2"
          />
          <div className="col-span-1 md:col-span-3">
            <Para>
              When altering the design of the 3D model for the syringe extruder,
              there was one face I somehow missed. I attempted to drill
              perforations to rip it out.
            </Para>
            <Para>
              Additionally, I encountered my first 3D printing “spaghetti” fail.
            </Para>
          </div>
          <PlainMediumImage
            src="/machine-building/machine-1.jpg"
            alt="late night working"
          />
          <PlainMediumImage
            src="/machine-building/machine-2.jpg"
            alt="late night working 2"
          />
          <PlainMediumImage
            src="/machine-building/orchestral-classmate.jpg"
            alt="Serenaded by the summer orchestra, featuring a classmate as first violin"
          />
          <div className="col-span-1 md:col-span-3">
            <Para>
              We were nowhere near to having a working machine in time for class
              so we transplanted to Cabot library to continue debugging.
            </Para>
            <Para>
              The summer orchestra was playing in the courtyard below so I did
              not have to miss my classmate performing the first violin.
            </Para>
          </div>
          <PlainMediumImage
            src="/machine-building/watery-icing.jpg"
            alt="We tried watery icing which had less viscosity and was easier to extrude but created a mess on the graham cracker"
          />
          <PlainMediumImage
            src="/machine-building/ps70-iced.jpg"
            alt="Finished PS70 graham cracker"
          />
          <PlainMediumImage
            src="/machine-building/judy-pancake.jpg"
            alt="A photo of a pancake extruded by a different team"
          />
          <div className="col-span-1 md:col-span-3">
            <Para>
              We tried watery icing which was less viscous and therefore easier
              to extrude but created an unappealing mess on the graham cracker.
            </Para>
            <Para>
              We ended up with a finished PS70 graham cracker in the class demo.
            </Para>
            <Para>
              I loved the pancake drawing machine created by{" "}
              <a
                href="https://judyw2054.github.io/Digital-Fabrication/10_machine/index.html"
                target="_blank"
                className="text-df-accent underline underline-offset-3 hover:opacity-80"
              >
                Judyʼs group{" "}
              </a>
              . I wish we could have collaborated to ice their pancakes!
            </Para>
          </div>
        </div>
      </div>
    </WeeklyWrapper>
  );
}
