"use client";

import { useState } from "react";
import { Accordion } from "../../../components/accordion";
import {
  Brainstorm,
  Introduction,
  MvpPlan,
  MvpReview,
  PredictedBillOfMaterials,
  PredictedTimeline,
  ProjectGoals,
  Mvp,
  HeatingOptions,
  Competitors,
  NextVersionPlan,
  CrunchTime,
} from "./components";

export default function Page() {
  // In your parent component
  const [recentlyClosedAccordion, setRecentlyClosedAccordion] = useState<
    string | null
  >(null);

  const handleAccordionClose = (title: string) => {
    setRecentlyClosedAccordion(title);

    // Optional: Clear the highlight after a delay
    setTimeout(() => {
      setRecentlyClosedAccordion(null);
    }, 3000); // Remove highlight after 3 seconds
  };
  return (
    <div className="m-auto max-w-7xl p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 id="top" className="my-3 text-center text-3xl">
        Final project
      </h1>
      <h2 className="text-df-shade-lighter mb-8 text-center text-xl">
        <i>A machine to help you wake up in the morning, with a cup of tea.</i>
      </h2>
      <p className="text-center text-3xl">🌞 ⏰ 🫖 ☕️ 🐄</p>
      <br />
      <p className="text-center">
        <a
          href="#video"
          className="hover:text-df-accent underline-offset-4 hover:underline"
        >
          Skip to the video ⬇
        </a>
      </p>
      <div>
        <Accordion
          title="Project overview"
          isRecentlyClosed={recentlyClosedAccordion === "Project overview"}
          onClose={handleAccordionClose}
        >
          <Introduction />
        </Accordion>
        <Accordion
          title="Project goals"
          isRecentlyClosed={recentlyClosedAccordion === "Project goals"}
          onClose={handleAccordionClose}
        >
          <ProjectGoals />
        </Accordion>
        <Accordion
          title="Brainstorming"
          isRecentlyClosed={recentlyClosedAccordion === "Brainstorming"}
          onClose={handleAccordionClose}
        >
          <Brainstorm />
        </Accordion>
        <Accordion
          title="Predicted Bill of Materials"
          isRecentlyClosed={
            recentlyClosedAccordion === "Predicted Bill of Materials"
          }
          onClose={handleAccordionClose}
        >
          <PredictedBillOfMaterials />
        </Accordion>
        <Accordion
          title="Predicted Timeline"
          isRecentlyClosed={recentlyClosedAccordion === "Predicted Timeline"}
          onClose={handleAccordionClose}
        >
          <PredictedTimeline />
        </Accordion>
        <Accordion
          title="Review of ideas"
          isRecentlyClosed={recentlyClosedAccordion === "Review of ideas"}
          onClose={handleAccordionClose}
        >
          <HeatingOptions />
        </Accordion>
        <Accordion
          title="Competitors"
          isRecentlyClosed={recentlyClosedAccordion === "Competitors"}
          onClose={handleAccordionClose}
        >
          <Competitors />
        </Accordion>
        <Accordion
          title="MVP Plan"
          isRecentlyClosed={recentlyClosedAccordion === "MVP Plan"}
          onClose={handleAccordionClose}
        >
          <MvpPlan />
        </Accordion>
        <Accordion
          title="Minimum Viable ...Prototype!"
          isRecentlyClosed={
            recentlyClosedAccordion === "Minimum Viable ...Prototype!"
          }
          onClose={handleAccordionClose}
        >
          <Mvp />
        </Accordion>
        <Accordion
          title="MVP Review"
          isRecentlyClosed={recentlyClosedAccordion === "MVP Review"}
          onClose={handleAccordionClose}
        >
          <MvpReview />
        </Accordion>
        <Accordion
          title="Next Version Plan"
          isRecentlyClosed={recentlyClosedAccordion === "Next Version Plan"}
          onClose={handleAccordionClose}
        >
          <NextVersionPlan />
        </Accordion>
        <Accordion
          title="Crunch Time"
          isRecentlyClosed={recentlyClosedAccordion === "Crunch Time"}
          onClose={handleAccordionClose}
        >
          <CrunchTime />
        </Accordion>
        <div className="relative mx-auto aspect-video w-full max-w-4xl">
          <iframe
            id="video"
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/SvG6iy52M8g"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
      <br />
      <p className="text-center">
        <a
          href="#top"
          className="hover:text-df-accent underline-offset-4 hover:underline"
        >
          Back to the top ⬆
        </a>
      </p>
    </div>
  );
}
