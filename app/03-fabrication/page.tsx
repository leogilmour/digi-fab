"use client";
import Image from "next/image";
import { WideContainer, WideGrid } from "../../components/gridStuff";
import { PlainMediumImage } from "../../components/images";

export default function Page() {
  return (
    <div className="p-2 px-8 py-8 pb-16 sm:px-32">
      <h1 className="my-4 mb-12 text-center text-3xl">
        Week 2 Part 1: Hand Tools and Fabrication
      </h1>
      <h3 className="text-df-shade-lighter mb-8 text-2xl">Kinetic Sculpture</h3>
      <WideGrid>
        <WideContainer>
          Building this structure in CAD was interesting--especially fun to get
          the gears to work properly:
          <div className="my-4">
            <Image
              src="/carousel-motors.gif"
              alt="Carousel with moving gears"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </WideContainer>
        <WideContainer>
          I am currently waiting for my pieces to be cut out and Iʼm super
          nervous that either I wonʼt be able to get my external gear to be
          completely on centre; that my internal gear wonʼt align with it very
          easily (mounting underneath); and / or that my top gears will stick.
          <div className="my-4">
            <Image
              src="/laser.gif"
              alt="Laser cutter tracing a gear"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </WideContainer>
        <WideContainer>
          Ok so the gears on the top work! Just about... all nine surrounding do
          work but between all the connections they end up getting stuck in the
          corrugated cardboard :( but it is still a proof of concept.
          <div className="my-4">
            <Image
              src="/top-gears.gif"
              alt="9 gears moving in sync"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </WideContainer>
        <WideContainer>
          The motor sits on the base on a platform holder to raise it to the
          external gear that sticks underneath the floor of the carousel. As the
          motor turns its own gear it turns the carousel base. This is connected
          to the carousel top with some struts. As the carousel turns, its top
          gears are spun by a centre gear which is fixed to the grounded
          spindle. These twirling gears have fixed M5 screws which twirl the
          artwork (in this instance, jewellery) as if carousel figurines.
          <div className="my-4">
            <Image
              src="/top-gears.gif"
              alt="9 gears moving in sync"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </WideContainer>
      </WideGrid>
      <h3 className="text-df-shade-lighter my-8 text-2xl">Review</h3>
      <WideGrid>
        <WideContainer>
          <p>
            I struggled to export sketches of my 3D model. I think next time I
            will try to sketch individual components in 2D space and then
            assemble them together afterwards.
          </p>
        </WideContainer>
        <WideContainer>
          <p>
            The corrugated cardboard means the interconnecting face of the gear
            teeth does not have a true surface. This mean the gears got caught
            on each other. It works as a proof of concept but I need to trace
            the gears onto a real 3D material like acrylic.
          </p>
          <div className="my-4">
            <Image
              src="/motor-external.gif"
              alt="9 gears moving in sync"
              unoptimized
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
        </WideContainer>
        <WideContainer>
          <p>
            On reviewing the earrings turning, because the gears they are
            attached to have the same number of teeth as the fixed central gear,
            each earring does one revolution in the same time the carousel does
            one revolution. Their spinning movement is therefore not
            discernible.
          </p>
          <p>
            I need the nine earring gears to have 1/4 the number of teeth as the
            central gear.
          </p>
        </WideContainer>
        <WideContainer>
          <p>
            I would like to improve the fittings that provide a fixing for the
            earrings, swapping bulldog clips for something custom:
          </p>
          <PlainMediumImage
            src={"/carousel-trinkets.jpg"}
            alt={"Earrings handing from bulldog clips"}
          />
        </WideContainer>
      </WideGrid>
      <h3 className="text-df-shade-lighter my-8 text-2xl">
        Circuit voltage and current
      </h3>
      <WideGrid>
        <WideContainer>
          <p>Finding the current drawn by the circuit:</p>
          <PlainMediumImage
            src="/volts.JPG"
            alt="Close up of multimeter volt reading"
          />
          <p>My volt reading (parallel across the motor)</p>

          <PlainMediumImage
            src="/ohms.jpg"
            alt="Close up of multimeter resistance reading"
          />
          <p>My resistance reading (also parallel across the motor)</p>

          <p className="my-4">
            <i>Ohmʼs law finds V = IR</i>
          </p>
          <p>
            Therefore this circuit is drawing a current of 1.4 volts / 1805 ohms
            = 0.78 milliamps. I think itʼs a series circuit so the current will
            be the same throughout.
          </p>
        </WideContainer>
      </WideGrid>
    </div>
  );
}
