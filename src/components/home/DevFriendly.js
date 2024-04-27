import devfriendly from "../../assets/home/devfriendly.png";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { devFriendly } from "../../data";

const DevFriendly = () => {
  return (
    <section className="mx-4 md:mx-10 lg:flex items-center gap-12">
      <div>
        <img src={devfriendly} alt="dev" className="lg:w-[60vw]" />
      </div>
      <div className="mt-10">
        <h2 className="mb-4 text-3xl md:text-6xl lg:text-4xl font-semibold text-teal-950">
          {devFriendly.title}
        </h2>
        <div className="mb-12 flex flex-col gap-4 text-xl font-light leading-8 text-teal-900">
          <div className="flex gap-2 items-center">
            <IoIosArrowDropright className="min-h-10 min-w-10 text-teal-900" />
            <p>{devFriendly.point1}</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosArrowDropright className="min-h-10 min-w-10 text-teal-900" />
            <p>{devFriendly.point2}</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosArrowDropright className="min-h-10 min-w-10 text-teal-900" />
            <p>{devFriendly.point3}</p>
          </div>
        </div>
        <Link to="/contact" className="btn1">
          {devFriendly.btn}
        </Link>
      </div>
    </section>
  );
};

export default DevFriendly;
