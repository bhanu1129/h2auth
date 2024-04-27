import Lottie from "lottie-react";
import circleWhite from "../../lotties/circleWhite.json";
import arrowWhite from "../../lotties/arrowWhite.json";
import arrowWhite2 from "../../lotties/arrowWhite2.json";
import { integration } from "../../data";

const Integration = () => {
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
        frames: [0, 140],
      },
    ],
  };
  return (
    <section className="relative mx-4 md:mx-10 bg-[#1F3A2B] rounded-2xl py-16 px-20 md:px-24 lg:px-72 text-white">
      <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
        {integration.title}
      </h2>
      <div className="flex flex-col gap-10">

        {integration.steps.map((step, index) => {
          return (
            <Step
              step={step.step}
              head={step.head}
              det={step.det}
              key={index}
            />
          );
        })}

        <div className="absolute top-72 hidden lg:inline-block lg:right-32 transform rotate-[-45deg]">
          <Lottie
            animationData={arrowWhite}
            style={{ height: "250px", width: "250px" }}
            interactivity={interactivity}
            loop="false"
          />
        </div>
        <div className="absolute bottom-44 md:bottom-32 left-[-5rem] md:left-[-3rem] lg:left-28">
          <Lottie
            animationData={arrowWhite2}
            style={{ height: "200px", width: "250px" }}
            interactivity={interactivity}
            loop="false"
          />
        </div>
      </div>
    </section>
  );
};

const Step = ({ step, head, det }) => {
  const style = {
    height: 100,
    width: 100,
  };
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
        frames: [0, 97],
      },
    ],
  };
  return (
    <div>
      <div className="text-3xl md:text-4xl font-semibold flex flex-col gap-3 mb-3 justify-center items-center">
        <div className="relative">
          <div className="absolute left-[-1.5rem] top-[-2rem]">
            <Lottie
              animationData={circleWhite}
              style={style}
              interactivity={interactivity}
              loop="false"
            />
          </div>
          <h3>{step}</h3>
        </div>
        <h3>{head}</h3>
      </div>
      <p className="text-center md:text-lg">{det}</p>
    </div>
  );
};

export default Integration;
