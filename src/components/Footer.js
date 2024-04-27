import logo from "../assets/logo.png";
import { footer } from "../data";

const Footer = () => {
  return (
    <section className="bg-[#CEDCFF] mx-4 md:mx-10 mb-10 rounded-2xl px-5 pt-16 pb-8">
      <div>
        <img src={logo} alt="logo" className="h-12 md:h-14 lg:h-24 mb-8" />
        <p className="text-xl md:text-2xl font-light leading-8 mb-10 lg:w-[80%]">
          {footer.desc}
        </p>
        <div className="flex flex-col lg:flex-row text-lg md:text-xl mb-10 gap-3 lg:gap-10">
          <a
            href="https://www.facebook.com/"
            className="cursor-pointer hover:underline"
            target="blank"
          >
            {footer.social1}
          </a>
          <a
            href="https://twitter.com/"
            className="cursor-pointer hover:underline"
            target="blank"
          >
            {footer.social2}
          </a>
          <a
            href="https://www.instagram.com/"
            className="cursor-pointer hover:underline"
            target="blank"
          >
            {footer.social3}
          </a>
          <a
            href="https://www.linkedin.com/"
            className="cursor-pointer hover:underline"
            target="blank"
          >
            {footer.social4}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
