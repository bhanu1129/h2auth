import DevFriendly from "../components/home/DevFriendly";
import FAQ from "../components/home/FAQ";
import Features from "../components/home/Features";
import Integration from "../components/home/Integration";
import Main from "../components/home/Main";
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
      <div className="relative mt-48 mb-24">
        <img src={arrow} className="absolute left-5 top-[-10rem] opacity-50" />
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
