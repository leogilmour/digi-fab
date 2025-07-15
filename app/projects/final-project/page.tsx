"use client";

import { Hr } from "../../../components/spacers";
import {
  Introduction,
  PredictedBillOfMaterials,
  PredictedTimeline,
  ProjectGoals,
} from "./components";

export default function Page() {
  return (
    <div className="p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 className="my-3 text-center text-3xl">Final project</h1>
      <h2 className="text-df-shade-lighter mb-8 text-center text-xl">
        <i>A machine to help you wake up in the morning, with a cup of tea.</i>
      </h2>
      <p className="text-center text-3xl">🌞 ⏰ 🫖 ☕️ 🐄</p>
      <br />
      <Introduction />
      <Hr />
      <ProjectGoals />
      <Hr />
      <PredictedBillOfMaterials />
      <Hr />
      <PredictedTimeline />
      <Hr />
    </div>
  );
}
