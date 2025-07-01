"use client";

import { Grid, ItemContainer } from "../../components/gridStuff";
import { PlainSmallImage } from "../../components/images";

export default function Page() {
  return (
    <div className="p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 className="my-4 mb-12 text-center text-3xl">
        Week 1 Part 2: 2D Design
      </h1>
      <h3 className="text-df-shade-lighter mb-8 text-2xl">
        Fusion for modelling
      </h3>
      <Grid>
        <ItemContainer>
          The breakfast machine from Chitty Chitty Bang Bang (see also, Wallace
          and Gromit...)
          <PlainSmallImage
            src="/chitty-bang.jpeg"
            alt="The breakfast machine scene from the film"
          />
        </ItemContainer>
      </Grid>
      <h3 className="text-df-shade-lighter my-8 mt-16 text-2xl">
        Lasercutter + vinyl cutter
      </h3>
      <div className="m-auto max-w-xl">
        <h4 className="my-8 text-xl">My shoebox</h4>
        <p>Leo</p>
      </div>
      <div className="m-auto max-w-xl">
        <h4 className="my-8 text-xl">My useless box</h4>
        <p>Leo</p>
      </div>
    </div>
  );
}
