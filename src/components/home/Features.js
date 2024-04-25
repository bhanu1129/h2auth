import React from "react";
import Lottie from "lottie-react";
import circle from "../../lotties/circle.json";
import arrow from "../../lotties/arrow.json";
import arrow2 from "../../lotties/arrow2.json";
import line from "../../lotties/line.json";
import line2 from "../../lotties/line2.json";

const Features = () => {
  const style = {
    height: 350,
    width: 350,
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
        frames: [0,85],
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
        frames: [0, 40],
      },
    ],
  };

  return (
    <section className="mx-4 md:mx-10">
      <div className="mx-auto mb-5 text-center md:max-w-[70%] lg:max-w-[80%]">
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-950 mb-5">
          Features That Help You Grow Safely
        </h2>
        <p className="text-xl font-light leading-8 lg:max-w-[50vw] mx-auto text-teal-900">
          We prioritise the security of your users by implementing robust
          cybersecurity measures and using the most advanced technologies
          available.
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-semibold text-teal-950 text-center mb-16">
          Key Features
        </h3>

        <div className="flex flex-col relative text-2xl md:text-4xl lg:text-5xl font-semibold text-teal-950 max-w-[90vw] mx-auto h-[80vh]">
          <div className="absolute lg:left-28 lg:top-[-1rem] transform rotate-[-25deg]">
            <Lottie
              animationData={line}
              style={{ height: "150px", width: "150px" }}
              interactivity={interactivity2}
              loop="false"
            />
          </div>
          <span className="absolute lg:left-24 transform rotate-[-25deg]">
            JWTs
          </span>

          <div className="absolute lg:right-80 lg:top-2 transform rotate-[30deg]">
            <Lottie
              animationData={line2}
              style={{ height: "100px", width: "200px" }}
              interactivity={interactivity2}
              loop="false"
            />
          </div>
          <span className="absolute lg:right-72 transform rotate-[30deg]">
            Reliability
          </span>

          <span className="absolute lg:right-16 transform rotate-[45deg]">
            Encryption
          </span>

          <div className="relative lg:left-96 lg:top-24 transform">
            <div className="absolute top-[-2.4rem] left-[-2.4rem]">
              <Lottie
                animationData={circle}
                style={style}
                interactivity={interactivity}
                loop="false"
              />
            </div>
            <span className="absolute">Visibility</span>
          </div>

          <span className="absolute lg:left-24 lg:top-40 transform rotate-[25deg]">
            Scalable
          </span>

          <div className="absolute lg:right-[57%] lg:bottom-[40%] transform">
            <Lottie
              animationData={arrow}
              style={{ height: "150px", width: "150px" }}
              interactivity={interactivity2}
              loop="true"
            />
          </div>
          <span className="absolute lg:right-1/3 lg:bottom-1/2 transform rotate-[-25deg] max-w-60">
            2 Factor Authentication
          </span>

          <span className="absolute lg:left-0 lg:bottom-48 transform rotate-[-5deg]">
            APIs & SDKs
          </span>
          <span className="absolute lg:right-72 lg:bottom-48 transform rotate-[-2deg]">
            SSO
          </span>

          <div className="absolute lg:right-[-5rem] lg:bottom-48 transform">
            <Lottie
              animationData={arrow2}
              style={{ height: "300px", width: "300px" }}
              loop="true"
            />
          </div>
          <span className="absolute lg:right-0 lg:bottom-48 transform rotate-[10deg]">
            Access <br /> Control
          </span>
        </div>
      </div>
    </section>
  );
};

export default Features;
