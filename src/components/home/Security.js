import secure from "../../assets/home/secure.png";

const Security = () => {
  return (
    <section className="mx-4 md:mx-10 flex flex-col lg:flex-row justify-center items-center relative z-10">
      <div>
        <h2 className="text-4xl md:text-5xl font-semibold text-teal-950 mb-5">Security. Privacy. Convenience.</h2>
        <p className="text-xl font-light leading-8 mb-10 text-teal-900">
          Our system provides your users with the best security and multiple
          authentication methods without any hassle or inconvenience. This
          ensures that you can onboard more and more users without worrying
          about their privacy.
        </p>
      </div>
      <div className="">
        <img src={secure} alt="secure" />
      </div>
    </section>
  );
};

export default Security;
