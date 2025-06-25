"use client";

import Image from "next/image";
import { JSX } from "react";

function Caption({
  children,
}: {
  children: string | JSX.Element | (string | JSX.Element)[];
}) {
  return <p className="w-full py-4 text-left">{children}</p>;
}

function AboutContainer({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="max-w-xs justify-center justify-items-center gap-4 text-center align-top">
      {children}
    </div>
  );
}

function ImageWithBorder({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={160}
      height={160}
      className="border-df-accent rounded-full border-2 border-solid"
    />
  );
}

export default function Page() {
  return (
    <div className="h-min items-center justify-items-center pt-10 pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className="items-top row-start-2 flex flex-wrap justify-center gap-[32px]">
        <h1 className="w-full text-center text-2xl">About me</h1>
        <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
          <AboutContainer>
            <ImageWithBorder
              src="/leo-with-paper-mache-postbox.jpeg"
              alt="Image of Leo with a papier mache postbox"
            />
            <Caption>
              I’m Leo 🌊
              <br />I made this papier-mache post box for a workshop 💌 I
              organised.
              <br />
              The Wes Anderson postlady outfit is intentional. 😆
            </Caption>
          </AboutContainer>
          <AboutContainer>
            <ImageWithBorder
              src="/somerville.png"
              alt="Small map of Somerville in Boston"
            />
            <Caption>
              I’m from London 🇬🇧 but living in a homestay, in Somerville, for
              the (🔥 hot!?) summer.
            </Caption>
          </AboutContainer>
          <AboutContainer>
            <ImageWithBorder
              src="/hes.jpg"
              alt="Harvard Extension School logo"
            />
            <Caption>
              I abandoned my undergrad engineering degree in 2015. 🚒
              <br /> In 2020 (#lockdown-reflection), I started a liberal arts
              degree through Harvard’s Extension School. I absolutely love it.
              🫀
            </Caption>
          </AboutContainer>
          <AboutContainer>
            <ImageWithBorder
              src="/interests-or-insp.png"
              alt="Black and white image of feather headress on a 50s model"
            />
            <Caption>
              Figuring out what interests me is an ongoing project... 🌕 So far:
              <br />
              <br />
              creative writing 🪶, reading short stories 📚, collecting
              libraries 💳, tutoring maths ♾️, coding 💻...
              <br />
              <br />
              themed event and party planning 🎃, hosting workshops 💃, making
              stuff in papier-mâché 📮...
              <br />
              <br />
              philosophy-and-daydreaming 🧐, costumes and intricate fashion 🎩,
              quirky inventions and gizmos ⚙️...
              <br />
              <br />
              travelling by train 🚂, cooking new things 🍳, the gothic 🦇 ...
              <br />
              <br />
              Meanwhile, A.I. 🤖 terrifies me and I feel personally threatened
              😂
            </Caption>
            <Caption>
              🌖 Waning interests: technology 📡, entrepreneurship 💼 (
              <i>maybe</i>)
            </Caption>
          </AboutContainer>
          <AboutContainer>
            <ImageWithBorder
              src="/my-dog.jpg"
              alt="An image of Squiffy the dog"
            />
            <Caption>
              I adore my family dog. She is called Squiffy and quite deranged
              (and misbehaved 🙈).
              <br />
              She is a patterdale terrier... Not sure if they frequent the U.S.
            </Caption>
          </AboutContainer>
          <AboutContainer>
            <ImageWithBorder
              src="/my-grandad.jpg"
              alt="An image of my grandad John Haynes"
            />
            <Caption>
              Growing up, I would hang out in my grandad’s workshop and he would
              teach me how to make or fix things.
              <br />
              He was an engineer with many stories, like the time he set up the
              first television in Sydney University or his experience as an
              engineer in the merchant navy. Or how he built vintage cars from
              scratch.
              <br />I would love to recreate his workshop but it’s an
              intimidating project!
            </Caption>
          </AboutContainer>
        </div>
      </main>
    </div>
  );
}
