"use client";

import { Hr } from "../../../components/spacers";
import {
  Brainstorm,
  Introduction,
  MvpPlan,
  MvpReview,
  PredictedBillOfMaterials,
  PredictedTimeline,
  ProjectGoals,
  H3,
  Mvp,
  HeatingOptions,
} from "./components";

export default function Page() {
  return (
    <div className="m-auto max-w-7xl p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 className="my-3 text-center text-3xl">Final project</h1>
      <h2 className="text-df-shade-lighter mb-8 text-center text-xl">
        <i>A machine to help you wake up in the morning, with a cup of tea.</i>
      </h2>
      <p className="text-center text-3xl">🌞 ⏰ 🫖 ☕️ 🐄</p>
      <br />
      <Introduction />
      <Hr />
      <ProjectGoals />
      <Brainstorm />
      <Hr />
      <PredictedBillOfMaterials />
      <Hr />
      <PredictedTimeline />
      <Hr />
      <p>Review of ideas</p>
      <HeatingOptions />
      <p>Review of “competitors” aside from original teasmade.</p>
      <MvpPlan />
      <H3>Minimum Viable ...Prototype!</H3>
      <Mvp />
      <H3>MVP Review</H3>
      <MvpReview />
    </div>
  );
}
