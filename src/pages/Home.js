import DevFriendly from "../components/home/DevFriendly";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Integration from "../components/home/Integration";
import Main from "../components/home/Header";
import Security from "../components/home/Security";
import Team from "../components/home/Team";

import arrow from "../assets/arrow.svg";

const Home = () => {
  return (
    <main className="pt-16 md:pt-20 lg:pt-24">
      <div className="mb-40 mt-16 md:mt-24 lg:mt-28">
        <Main />
      </div>
      <div className="mb-24 mt-24 md:mt-28">
        <Security />
      </div>
      <div className="relative mt-48 ">
        <img src={arrow} className="absolute size-40 top-48 md:left-0 md:size-64 lg:size-96 lg:top-[-10rem] opacity-50" />
        <Features />
      </div>
      <div className="mb-24">
        <Integration />
      </div>
      <div className="mb-24">
        <DevFriendly />
      </div>
      <div className="mb-24">
        <Team />
      </div>
      <div className="mb-20 lg:mb-12">
        <FAQ />
      </div>
    </main>
  );
};

export default Home;
