import devfriendly from "../../assets/home/devfriendly.png";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

const DevFriendly = () => {
  return (
    <section className="mx-4 md:mx-10 lg:flex items-center gap-12">
      <div>
        <img src={devfriendly} alt="dev" className="lg:w-[60vw]" />
      </div>
      <div className="mt-10">
        <h2 className="mb-4 text-3xl md:text-6xl lg:text-4xl font-semibold text-teal-950">
          Developer Friendly
        </h2>
        <div className="mb-12 flex flex-col gap-4 text-xl font-light leading-8 text-teal-900">
          <div className="flex gap-2 items-center">
            <IoIosArrowDropright className="min-h-10 min-w-10 text-teal-900" />
            <p>
              We have a TypeScript Based SDK that can be used with any web based
              application.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosArrowDropright className="min-h-10 min-w-10 text-teal-900" />
            <p>
              Mobile applications can directly make use of the APIs to create a
              customised setup for authentication.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosArrowDropright className="min-h-10 min-w-10 text-teal-900" />
            <p>
              Your backend servers can easily and securely confirm user identity
              using JWTs.
            </p>
          </div>
        </div>
        <Link to="/contact" className="btn1">Contact Us</Link>
      </div>
    </section>
  );
};

export default DevFriendly;
