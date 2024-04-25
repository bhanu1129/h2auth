import contact from "../assets/contact/contact.png";
import contact2 from "../assets/contact/contact2.png";

import { PiMapPinLineFill } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

const Contact = () => {
  return (
    <main className="mb-16">
      <section className="bg-[#EEE6DC] flex flex-col md:flex-row justify-center gap-10 md:gap-0 md:justify-between md:items-end pt-20 md:pt-44 lg:pt-32 px-5 mb-16">

        <img src={contact2} alt="contact" className="w-56 md:w-56" />
        <h2 className="text-6xl lg:text-8xl text-center font-semibold place-self-center text-teal-950">
          Contact Us
        </h2>
        <img
          src={contact}
          alt="contactdev"
          className="self-center w-80 md:w-56 lg:w-80"
        />
      </section>

      <section className="bg-[#F7F4EF] mx-4 md:mx-10 md:my-36 flex flex-col md:flex-row md:flex-wrap justify-center gap-10">
        <div className="flex flex-col mb-10 md:mb-10 lg:mb-0 md:w-[30%]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="bg-teal-950 text-white p-4 rounded-full">
              <PiMapPinLineFill className="text-5xl" />
            </div>
            <h3 className="text-3xl font-semibold text-teal-950">
              Our Address
            </h3>
            <span className="text-center text-xl font-light">
              A105, Silver Crown, Silver County Road, HSR Layout, Bengaluru,
              5601102
            </span>
          </div>
        </div>

        <div className="flex flex-col mb-10 md:mb-10 lg:mb-0 md:w-[30%]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="bg-teal-950 text-white p-4 rounded-full">
              <LuPhoneCall className="text-5xl" />
            </div>
            <h3 className="text-3xl font-semibold text-teal-950">
              Contact Info
            </h3>
            <span className="text-center text-xl font-light">
              +91 9814068029
              <br /> +91 7087785757
            </span>
          </div>
        </div>

        <div className="flex flex-col mb-10 md:mb-0 md:w-[30%]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="bg-teal-950 text-white p-4 rounded-full">
              <MdOutlineSupportAgent className="text-5xl" />
            </div>
            <h3 className="text-3xl font-semibold text-teal-950">
              Live Support
            </h3>
            <span className="text-center text-xl font-light">
              surya@h2auth.com
              <br /> nitin@h2auth.com
            </span>
          </div>
        </div>
      </section>

      <section className="lg:flex bg-white mx-4 md:mx-10 rounded-2xl px-7 py-12">
        <div className="mb-12 lg:w-[50%]">
          <h3 className="text-3xl md:text-6xl font-semibold text-teal-950">
            Feel Free To Contact Us Today And Get Your Solution!
          </h3>
          <img src={contact2} alt="contact" className="w-56 md:w-64" />
        </div>
        <div className="lg:w-[50%]">
          {/* <form className="flex flex-col gap-3">
            <input type="text" placeholder="Your Name" className="contact-form"/>
            <input type="email" placeholder="Your Email" className="contact-form"/>
            <input type="number" placeholder="Your Number"className="contact-form"/>
            <input type="text" placeholder="Subject"className="contact-form"/>
            <textarea placeholder="Your Message" className="contact-form"/>
            <button className="btn1 self-start">Submit Now</button>
          </form> */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="contact-form"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact-form"
            />
            <input
              type="number"
              placeholder="Your Number"
              className="contact-form"
            />
            <input type="text" placeholder="Subject" className="contact-form" />
            <textarea
              placeholder="Your Message"
              className="contact-form md:col-span-2"
            />
            <button className="btn1 place-self-start">Submit Now</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
