"use client";

import { JSX } from "react";
import { Para } from "../../components/typography";
import { PlainSmallImage } from "../../components/images";
import { FunH2 } from "../../components/headers";

function Caption({
  children,
}: {
  children: string | JSX.Element | (string | JSX.Element)[];
}) {
  return <p className="w-full py-4 text-left">{children}</p>;
}

export default function Page() {
  return (
    <div className="m-auto max-w-6xl p-2 py-8 pb-16 sm:px-4 md:px-6 lg:px-8">
      <FunH2>Miscellany</FunH2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-2 md:col-span-3">
          <Para>
            I want to make a mini version of this, and now I think I have the
            skills!{" "}
            <a
              href="https://www.zoonewengland.org/engage/boston-lights/"
              className="hover:text-df-accent text-df-shade-lighter underline underline-offset-4"
              target="_blank"
            >
              From the Boston Lights
            </a>
            . Made this video with my new Adobe Premiere Pro skills 😎.
          </Para>
          <div className="relative mx-auto aspect-video w-full max-w-4xl">
            <iframe
              id="video"
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/YZbQYqC1qKE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
        </div>
        <div>
          <PlainSmallImage
            src="/final-project/soft-serve.JPG"
            alt="Softserve"
          />
          <PlainSmallImage
            src="/final-project/soft-serve-2.JPG"
            alt="Happy workers"
          />
          <Caption>
            Çinar fuelled us through the late night push with cherry-lime soft
            serve 💜💚
          </Caption>
        </div>
        <div>
          <Caption>
            Future digital fabrication class: biological sensors
          </Caption>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              The water quality in Warsaw, the capital city of Poland, is
              monitored by 8 clams. If the water gets too toxic, they close, and
              this triggers analyses that can immediately shut off the
              city&#39;s water supply, if at least 4 are close.{" "}
              <a href="https://t.co/q664GZF1Ez">pic.twitter.com/q664GZF1Ez</a>
            </p>
            &mdash; World of Engineering (@engineers_feed){" "}
            <a href="https://twitter.com/engineers_feed/status/1954602451287568660?ref_src=twsrc%5Etfw">
              August 10, 2025
            </a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </div>
    </div>
  );
}
