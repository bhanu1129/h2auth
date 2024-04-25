import home from "../../assets/home/home.png";
import { Link } from "react-router-dom";
import curve from "../../assets/curve.svg";

const Main = () => {
  return (
    <section className="relative mx-4 md:mx-10">
      <div className="mb-16 flex gap-6 md:gap-10 flex-col justify-center items-center text-center">
        <div className="text-4xl lg:text-6xl text-teal-950 font-semibold">
          <h1>Welcome To H2Auth</h1>
          <h1>Your Trusted Authentication Partner!</h1>
        </div>
        <div className="text-teal-900 font-normal text-xl mb-8 md:mb-4 md:text-lg md:font-light">
          <span className="">
            H2Auth simplifies authentication for your applications, providing
            robust security without the hassle. &nbsp;
          </span>
          <br />
          <span className="">
            Focus on building your product while we handle authentication.
          </span>
        </div>

        <Link to="/contact">
          <button className="btn2">Contact Us</button>
        </Link>
      </div>
      <img src={home} alt="home" className="rounded-3xl z-10 relative" />
      <img
        src={curve}
        className="absolute h-80 md:h-[35rem] lg:h-[60rem] top-96 md:top-64 lg:top-72 opacity-80 z-0 "
      />
    </section>
  );
};

export default Main;
