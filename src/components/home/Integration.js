import Lottie from "lottie-react";
import circleWhite from "../../lotties/circleWhite.json";
import arrowWhite from "../../lotties/arrowWhite.json";
import arrowWhite2 from "../../lotties/arrowWhite2.json";

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
        Integration Process
      </h2>
      <div className="flex flex-col gap-10">
        <Step
          step="01"
          head="Request A Meeting"
          det="We'll discuss what exactly does your application require and how we can
        help you make your application as safe and secure as possible."
        />

        <Step
          step="02"
          head="Receive Custom Plan"
          det="We'll create and share a plan specifically for you application and requirements with all the technical details about the system we'll be creating for your application so there is complete transparency in what services you are getting."
        />

        <div className="absolute top-72 right-[-5rem] md:right-[-3rem] lg:right-32 transform rotate-[-45deg]">
          <Lottie
            animationData={arrowWhite}
            style={{ height: "250px", width: "250px" }}
            interactivity={interactivity}
            loop="false"
          />
        </div>

        <Step
          step="03"
          head="Deployment"
          det="After the plan is confirmed, we'll go ahead and deploy and environment according to the plan that will be running specifically for your application."
        />

        <Step
          step="04"
          head="Integration"
          det="We'll provide you with the steps on to integrate our authentication system with your application. We support both Mobile and Web applications."
        />

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
