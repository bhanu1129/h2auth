import React from "react";
import Lottie from "lottie-react";
import circle from "../../lotties/circle.json";
import arrow from "../../lotties/arrow.json";
import arrow2 from "../../lotties/arrow2.json";
import line from "../../lotties/line.json";
import line2 from "../../lotties/line2.json";
import { features } from "../../data";

const Features = () => {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.5, 0.45],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 85],
      },
    ],
  };
  const interactivity2 = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.5, 0.45],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 50],
      },
    ],
  };

  return (
    <section className="mx-4 md:mx-10">
      <div className="mx-auto mb-5 text-center md:max-w-[70%] lg:max-w-[80%]">
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-950 mb-5">
          {features.title}
        </h2>
        <p className="text-xl font-light leading-8 lg:max-w-[50vw] mx-auto text-teal-900">
          {features.desc}
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-semibold text-teal-950 text-center mb-16">
          {features.subtitle}
        </h3>

        <div className="flex flex-col relative text-2xl md:text-4xl lg:text-5xl font-semibold text-teal-950 max-w-[90vw] mx-auto h-[80vh]">
          <div className="absolute md:top-1 md:left-2 lg:left-28 lg:top-[-1rem] transform rotate-[-25deg]">
            <Lottie
              animationData={line}
              className="size-20 md:size-24 lg:size-36"
              interactivity={interactivity2}
              loop="false"
            />
          </div>
          <span className="absolute lg:left-24 transform rotate-[-25deg]">
            {features.feature1}
          </span>

          <div className="absolute right-40 md:right-1/2 lg:right-80 lg:top-2 transform rotate-[30deg]">
            <Lottie
              animationData={line2}
              className="size-24 md:size-36 lg:size-40"
              interactivity={interactivity2}
              loop="false"
            />
          </div>
          <span className="absolute right-36 md:right-1/2 lg:right-72 lg:top-5 transform rotate-[30deg]">
            {features.feature2}
          </span>

          <span className="absolute right-2 lg:right-16 transform rotate-[45deg]">
            {features.feature3}
          </span>

          <div className="relative top-28 left-12 md:top-36 md:left-24 lg:left-96 lg:top-24 transform max-w-64">
            <div className="absolute top-[-1.5rem] left-[-1rem] lg:top-[-2.4rem] lg:left-[-2.4rem]">
              <Lottie
                animationData={circle}
                className="size-44 md:size-64 lg:size-[21rem]"
                interactivity={interactivity}
                loop="false"
              />
            </div>
            <span className="absolute">{features.feature4}</span>
          </div>

          <span className="absolute top-48 md:top-64 lg:left-24 lg:top-40 transform rotate-[25deg]">
            {features.feature5}
          </span>

          <div className="absolute bottom-[43%] md:inline-block md:bottom-1/2 md:right-[40%] lg:right-[57%] lg:bottom-[40%] transform">
            <Lottie
              animationData={arrow}
              className="size-36"
              interactivity={interactivity2}
              loop="true"
            />
          </div>
          <span className="absolute bottom-[70%] right-1 md:bottom-[60%] md:right-10 lg:right-1/3 lg:bottom-1/2 transform rotate-[-25deg] max-w-48">
            {features.feature6}
          </span>

          <span className="absolute bottom-1/2 left-1/2 md:left-1 md:bottom-48 lg:left-0 lg:bottom-48 transform rotate-[-5deg]">
            {features.feature7}
          </span>

          <span className="absolute bottom-1/3 right-64 md:bottom-36 md:right-1/2 lg:right-96 lg:bottom-48 transform rotate-[-2deg]">
            {features.feature8}
          </span>

          <div className="absolute bottom-16 right-0 lg:right-0 lg:bottom-48 transform">
            <Lottie
              animationData={arrow2}
              style={{ height: "300px", width: "300px" }}
              loop="true"
            />
          </div>
          <span className="absolute bottom-[15%] right-10 md:right-14 lg:right-16 lg:bottom-48 transform rotate-[10deg] max-w-40">
            {features.feature9}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Features;
