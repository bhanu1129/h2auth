import { useState } from "react";
import faq from "../../assets/home/faq.png";
import { FiPlus } from "react-icons/fi";
import { faqs } from "../../data";

const FAQ = () => {
  return (
    <section className="mx-4 md:mx-10">
      <h2 className="mb-16 text-5xl font-semibold text-teal-950 text-center w-[80vw] mx-auto">
        {faqs.title}
      </h2>
      <div className="lg:flex gap-10">
        <div className="mb-16 lg:max-w-[50%]">
          {faqs.faqs.map((faq, index) => {
            return <Dropdown title={faq.title} desc={faq.desc} key={index} />;
          })}
        </div>
        <div>
          <img src={faq} alt="faq" />
        </div>
      </div>
    </section>
  );
};

const Dropdown = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`text-xl font-semibold flex lg:gap-10 text-left items-center rounded-2xl py-2 px-8 transition-colors duration-300 ease-in-out ${
          isOpen ? "bg-teal-950 text-white" : "bg-[#EEE6DC] text-black"
        }`}
      >
        <span>{title}</span>
        <div className="flex items-center justify-center text-2xl font-light bg-white rounded-full text-black p-2">
          <div
            className={`transition-all duration-500 ${
              isOpen ? "rotate-[135deg]" : ""
            }`}
          >
            <FiPlus />
          </div>
        </div>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-teal-950 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden p-3 text-xl font-light leading-8">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
