"use client";

import Image from "next/image";
import { ButtonLink } from "../components/buttonLink";

export default function Home() {
  return (
    <div className="grid h-min grid-rows-[0px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Image
          src="/three-dimensional-printing-icon.png"
          alt="Icon of a 3D printer"
          width={50}
          height={50}
          className="m-auto text-center invert"
        />
        <h1 className="w-full text-center text-3xl">
          Summer 2025: Digital Fabrication
        </h1>
        <div className="flex flex-wrap items-center justify-start gap-4 align-middle sm:flex-row">
          <ButtonLink href="/01-intro">01 - Intro</ButtonLink>
          <ButtonLink href="/02-2d-design-cutting">02 - 2D Design</ButtonLink>
          <ButtonLink href="/03-fabrication">03 - Fabrication</ButtonLink>
          <ButtonLink href="/04-programming">04 - Programming</ButtonLink>
          <ButtonLink href="/05-3d-design">05 - 3D Design</ButtonLink>
          <ButtonLink href="/06-electronic-inputs">06 - Inputs</ButtonLink>
          <ButtonLink>07 - Outputs</ButtonLink>
          <ButtonLink>08 - CNC</ButtonLink>
          <ButtonLink>09 - Networking</ButtonLink>
          <ButtonLink>Machine Building</ButtonLink>
          <ButtonLink>Final Project</ButtonLink>
        </div>
        <div className="m-auto">
          <h2 className="my-2 w-full text-center text-2xl">
            Project progress:
          </h2>
          <p className="my-2 mb-8 w-full text-center text-sm">
            <i>(Same content, just different organisation)</i>
          </p>
          <div className="flex flex-wrap items-center justify-start gap-4 align-middle sm:flex-row">
            <ButtonLink href="">Kinetic Sculpture</ButtonLink>
            <ButtonLink href="/projects/final-project">
              Final Project
            </ButtonLink>
          </div>
        </div>
        <p className="mt-4">
          <i>Note</i>, I already have an HTML + CSS{" "}
          <a
            className="text-df-accent underline"
            href="https://leogilmour.com/"
          >
            website
          </a>{" "}
          hosted with GitHub Pages so I decided to build this one in NextJS
          (Framework) + Typescript (typed JavaScript) + Tailwind (for styling)
          and host it with Vercel.
        </p>
        <p className="text-xs">
          Image source: Rapid prototyping icons created by IYIKON -{" "}
          <a
            href="https://www.flaticon.com/free-icons/rapid-prototyping"
            title="rapid prototyping icons"
            className="text-df-accent underline"
          >
            Flaticon
          </a>
        </p>
      </main>
    </div>
  );
}
