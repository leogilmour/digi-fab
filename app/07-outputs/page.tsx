"use client";

import { WideContainer, WideGrid } from "../../components/gridStuff";
import { FunH2, H3 } from "../../components/headers";
import { PlainLargeImage, PlainMediumImage } from "../../components/images";
import { WeeklyWrapper } from "../../components/layouts";
import { Mvp, MvpReview } from "../projects/final-project/components";

export default function Page() {
  return (
    <WeeklyWrapper week={7}>
      <div className="p-2 py-8 pb-16 sm:px-4 md:px-6 lg:px-8">
        <h1 className="my-4 mb-12 text-center text-3xl">
          Week 4 Part 1: Outputs
        </h1>
        <FunH2>Output 01: Peristaltic pump</FunH2>
        <WideGrid>
          <WideContainer>
            <p>
              I confirmed the peristaltic pump was working one day and, yet,
              found it refused to the next... 🐞 This course is really “the art
              of debugging” 😂
            </p>
            <br />
            <p>
              Bubbles were appearing in the destination mug so I knew the pump
              was doing something and briefly wondered whether it wasnʼt powered
              enough to bring the water up. After jiggling it around like a
              siphon, I got some water through but a few droplets appeared from
              the motor casing so I realised there must be a leak!
            </p>
            <br />
            <p>
              Inside, within the silicon tube, is a ball bearing that sits
              between the entry and the motors. At this point there was a small
              tear in the tube. It still didnʼt explain why the pump had worked
              the day before. Looking at the mechanics, I realised that the tear
              at the entry would be an issue but if I reversed the pump, it
              would be fine. MVP saved!
            </p>
            <br />
          </WideContainer>
          <WideContainer>
            <p>
              <i>Not working...</i>
            </p>
            <PlainMediumImage
              src={"/peri-motor.gif"}
              alt={"Peristaltic pump setup not working"}
            />
          </WideContainer>
          <WideContainer>
            <H3>Oscilloscope</H3>
            <PlainLargeImage
              src={"/double-motor-oscilloscope-setup.jpg"}
              alt={"Oscilloscope reading of the peristaltic pump"}
            />
            <br />
            <p>
              I used an oscilloscope to visualise the signals sent to the
              peristaltic pump. It was only my experimental code to check I
              could run both motors.
            </p>
            <br />
            <p>
              As expected, the oscilloscope shows a high voltage for 3 seconds
              followed by a low voltage for 9. During the low voltage, the
              stepper motor was running.
            </p>
            <br />
            <p>
              The time domain is the time it takes to complete one cycle of the
              signal. From the first peak of the high voltage to the next is the
              time domain. In this case, it was 12 seconds. T = 1/f. So this
              cycle has a frequency of 0.083 Hz (like its speed).
            </p>
          </WideContainer>
          <WideContainer>
            <br />
            <PlainLargeImage
              src={"/osc.gif"}
              alt={"Oscilloscope reading of the peristaltic pump pin node"}
            />
            <PlainLargeImage
              src={"/osc-2.jpg"}
              alt={"Oscilloscope reading of the pump"}
            />
          </WideContainer>
        </WideGrid>
        <br />
        <FunH2>Output 02: Stepper motor</FunH2>
        <WideGrid>
          <WideContainer>
            <p>
              I have introduced a stepper motor to control the teabag strainer.
              To ensure I donʼt break a mug with an overzealous stepper motor
              jamming in the strainer, I am using the stepper motor to power a
              3D printed winch. This means the string will slack if the strainer
              is too big for the mug diameter.
            </p>
            <br />
            <p>
              I used a stepper library to make it easier to control the stepper.
              It was not without hiccups! It would wind up the strainer but I
              could not get it to unwind. Setting the steps to a negative number
              did not work. Eventually I realised, with Claude.aiʼs help, that
              it was my pin nodes. Just because the pin nodes are superficially
              in consecutive order on the MC board does not mean they are
              consecutive in any meaningful way. It took me an embarrassing
              amount of time to realise this, but I think it makes sense with
              how the stepper motor works and the internal pairs.
            </p>
            <br />
            <p>
              My winch has one slot printed into the spindle so that it fits the
              stepper motor and another in the main drum so the string is offset
              from the centre ensuring the winch drum canʼt rotate freely
              within. The stepper can wind it one way and then the other which
              might be useful for calibration.
            </p>
          </WideContainer>
          <WideContainer>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <PlainMediumImage
                src={"/winch-wheel.gif"}
                alt={"Stepper motor with 3D printed winch"}
              />
              <PlainMediumImage
                src={"/winch-stepper.gif"}
                alt={"Stepper motor with 3D printed winch"}
              />
            </div>
          </WideContainer>
        </WideGrid>
        <br />
        <FunH2>Minimum Viable ...Prototype!</FunH2>
        <Mvp />
        <FunH2>Review and to do list</FunH2>
        <MvpReview />
      </div>
    </WeeklyWrapper>
  );
}
