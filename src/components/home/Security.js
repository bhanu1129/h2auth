import secure from "../../assets/home/secure.png";
import { security } from "../../data";

const Security = () => {
  return (
    <section className="mx-4 md:mx-10 flex flex-col lg:flex-row justify-center items-center relative z-10">
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-950 mb-5">
          {security.title}
        </h2>
        <p className="text-xl font-light leading-8 mb-10 text-teal-900">
          {security.desc}
        </p>
      </div>
      <div className="">
        <img src={secure} alt="secure" />
      </div>
    </section>
  );
};

export default Security;
