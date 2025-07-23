"use client";

import { Grid, ItemContainer } from "../../components/gridStuff";
import { FunH2, H4 } from "../../components/headers";
import { PlainSmallImage } from "../../components/images";
import { WeeklyWrapper } from "../../components/layouts";

export default function Page() {
  return (
    <WeeklyWrapper week={1}>
      <div className="p-2 px-8 py-8 pb-16 sm:px-32">
        <h1 className="my-4 mb-12 text-center text-3xl">
          Week 1: Final Project Proposal
        </h1>
        <FunH2>INSPIRATION</FunH2>
        <Grid>
          <ItemContainer>
            The breakfast machine from Chitty Chitty Bang Bang (see also,
            Wallace and Gromit...)
            <PlainSmallImage
              src="/chitty-bang.jpeg"
              alt="The breakfast machine scene from the film"
            />
          </ItemContainer>
          <ItemContainer>
            Iris van Herpen
            <PlainSmallImage
              src="/iris-van-herpen.gif"
              alt="gif of Iris V H moving outfit on catwalk"
            />
          </ItemContainer>

          <ItemContainer>
            This floating table...
            <PlainSmallImage
              src="/floating-table.png"
              alt="floating table with tension instead of legs"
            />
          </ItemContainer>
          <ItemContainer>
            The carousel display for Fabergé eggs... Fabergé eggs in general
            <PlainSmallImage
              src="/carousel.gif"
              alt="A carousel that turns with necklaces hanging instead of animals"
            />
          </ItemContainer>
          <ItemContainer>
            Robot wars
            <PlainSmallImage
              src="/robot-wars.gif"
              alt="robot wars spin attack"
            />
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
        <br />
        <FunH2>IDEAS</FunH2>
        <div className="m-auto max-w-xl">
          <H4>Idea One: A fried egg machine 🎡</H4>
          <p>
            The machine would select an egg from a revolving holder of a
            half-dozen, and crack it into ... a hot pan? Could it add the oil
            beforehand? Some method of timing would switch it off? This is an
            attempt to make the Chitty Chitty Bang Bang machine feasible in
            scale. This is probably my preferred idea... 🍳
          </p>
          <H4>Idea Two: A suitcase that turns into a wardrobe 🧳</H4>
          <p>
            A whole suitcase is probably too ambitious... the smaller version
            could be a jewellery case that turns into some kind of display? Like
            popping up into a revolving display case. Ok... this is quite extra.
            I grew up watching Clueless 💅.
          </p>
          <H4>Idea Three: A toy that runs away from my dog barking 🐕</H4>
          <p>
            A small toy, like a robot from robot wars, that would have sound
            sensors and run in the opposite direction from any noise. It would
            be shaped so that she could not pick it up with her mouth because...
            she is quick to destroy things. So perhaps inspired by some
            defensive bugs 🐞.
          </p>
        </div>
        <br />
        <FunH2>POST-CLASS IDEA</FunH2>
        <div className="m-auto max-w-xl">
          <H4>
            Final Idea: An alarm clock that wakes you with a cup of tea ☕️
          </H4>
          <p>
            This is inspired by the 60s / 70s miracle machines: “Teasmades”
            (which for some unknown reason faded in popularity). What could be
            better than being woken up with a cup of tea in bed?
          </p>
          <p>
            Basic features are an alarm clock which schedules the boiling water,
            but some even include lights. It would be fun to improve this
            variant with a SAD light that slowly turned on in advance of the cup
            of tea. Also, the option to sync with Amazon Alexa alarms or mobile
            phone alarms. There are many teasmade{" "}
            <a href="https://www.teasmade.uk/">fanatics</a> and they often have
            milk in a tiny thermos flask. It would be cool if a little robot arm
            opened the flask and poured in the milk too 🥛🐄.
          </p>
          <PlainSmallImage
            src={"/goblin-teasmade.jpg"}
            alt={"A Goblin Teasmade"}
          />
        </div>
      </div>
    </WeeklyWrapper>
  );
}
