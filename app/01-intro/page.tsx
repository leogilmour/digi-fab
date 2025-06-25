"use client";

import Image from "next/image";
import { JSX } from "react";

function Grid({ children }: { children: JSX.Element[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}

function ItemContainer({
  children,
}: {
  children: string | JSX.Element | (string | JSX.Element)[];
}) {
  return (
    <li className="max-w-xs justify-center justify-items-center gap-4 text-center align-top">
      {children}
    </li>
  );
}

function StyledImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={160}
      height={160}
      className="shadow-df-shade mt-4 rounded-md shadow-2xl"
    />
  );
}

export default function Page() {
  return (
    <div className="p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 className="my-4 mb-12 text-center text-3xl">
        Week 1: Final Project Proposal
      </h1>
      <h3 className="text-df-shade-lighter mb-8 text-2xl">
        Sources of ispiration!
      </h3>
      <Grid>
        <ItemContainer>
          The breakfast machine from Chitty Chitty Bang Bang (see also, Wallace
          and Gromit...)
          <StyledImage
            src="/chitty-bang.jpeg"
            alt="The breakfast machine scene from the film"
          />
        </ItemContainer>
        <ItemContainer>
          Iris van Herpen
          <StyledImage
            src="/iris-van-herpen.gif"
            alt="gif of Iris V H moving outfit on catwalk"
          />
        </ItemContainer>

        <ItemContainer>
          This floating table...
          <StyledImage
            src="/floating-table.png"
            alt="floating table with tension instead of legs"
          />
        </ItemContainer>
        <ItemContainer>
          The carousel display for Fabergé egg... Fabergé egg in general
          <StyledImage
            src="/carousel.gif"
            alt="A carousel that turns with necklaces hanging instead of animals"
          />
        </ItemContainer>
        <ItemContainer>
          Robot wars
          <StyledImage src="/robot-wars.gif" alt="robot wars spin attack" />
        </ItemContainer>
        <ItemContainer>
          Simone Giertz of course...
          <iframe
            width="200"
            height="113"
            src="https://www.youtube.com/embed/G5VQUDpK9Iw?si=v4OYLW9uGpweEtC4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </ItemContainer>
        <ItemContainer>
          I also love my dog, games, and neat storage ideas
        </ItemContainer>
      </Grid>
      <h3 className="text-df-shade-lighter my-8 mt-16 text-2xl">IDEAS</h3>
      <div className="m-auto max-w-xl">
        <h4 className="my-8 text-xl">Idea One: A fried egg machine</h4>
        <p>
          The machine would select an egg from a revolving holder of a
          half-dozen, and crack it into ... a hot pan? Could it add the oil
          beforehand? Some method of timing would switch it off? This is an
          attempt to make the Chitty Chitty Bang Bang machine feasible in scale.
          This is probably my preferred idea...
        </p>
        <h4 className="my-8 text-xl">
          Idea Two: A suitcase that turns into a wardrobe
        </h4>
        <p>
          A whole suitcase is probably too ambitious... the smaller version
          could be a jewellery case that turns into some kind of display? Like
          popping up into a revolving display case. Ok... this is quite extra. I
          grew up watching Clueless 💅.
        </p>
        <h4 className="my-8 text-xl">
          Idea Three: A toy that runs away from my dog barking
        </h4>
        <p>
          A small toy, like a robot from robot wars, that would have sound
          sensors and run in the opposite direction from any noise. It would be
          shaped so that she could not pick it up with her mouth because... she
          is quick to destroy things. So perhaps inspired by some defensive
          bugs.
        </p>
      </div>
    </div>
  );
}
