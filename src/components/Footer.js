import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <section className="bg-[#CEDCFF] mx-4 md:mx-10 mb-10 rounded-2xl px-5 pt-16 pb-8">
      <div>
        <img src={logo} alt="logo" className="h-12 md:h-14 lg:h-24 mb-8" />
        <p className="text-xl md:text-2xl font-light leading-8 mb-10 lg:w-[80%]">
          H2Auth team is a group of professionals focused on providing
          comprehensive authentication solutions.
        </p>
        <div className="flex flex-col lg:flex-row text-lg md:text-xl mb-10 gap-3 lg:gap-10">
          <a className="cursor-pointer hover:underline">Facebook</a>
          <a className="cursor-pointer hover:underline">Twitter</a>
          <a className="cursor-pointer hover:underline">Instagram</a>
          <a className="cursor-pointer hover:underline">Linkedin</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
