import contact from "../assets/contact/contact.png";
import contact2 from "../assets/contact/contact2.png";

import { PiMapPinLineFill } from "react-icons/pi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

import { contactDet } from "../data";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = collection(db, "contacts");
      await addDoc(docRef, {
        name,
        email,
        number,
        subject,
        message,
      });
      toast.success("Your message was sent successfully!");
    } catch (e) {
      toast.error("Error Sending Message!");
    }
  };

  return (
    <main className="mb-16">
      <section className="bg-[#EEE6DC] flex flex-col md:flex-row justify-center gap-10 md:gap-0 md:justify-between md:items-end pt-20 md:pt-44 lg:pt-32 px-5 mb-16">
        <img src={contact2} alt="contact" className="w-56 md:w-56" />
        <h2 className="text-6xl lg:text-8xl text-center font-semibold place-self-center text-teal-950">
          {contactDet.title}
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
              {contactDet.contact1.title}
            </h3>
            <span className="text-center text-xl font-light">
              {contactDet.contact1.det}
            </span>
          </div>
        </div>

        <div className="flex flex-col mb-10 md:mb-10 lg:mb-0 md:w-[30%]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="bg-teal-950 text-white p-4 rounded-full">
              <LuPhoneCall className="text-5xl" />
            </div>
            <h3 className="text-3xl font-semibold text-teal-950">
              {contactDet.contact2.title}
            </h3>
            <span className="text-center text-xl font-light">
              {contactDet.contact2.det1}
              <br /> {contactDet.contact2.det2}
            </span>
          </div>
        </div>

        <div className="flex flex-col mb-10 md:mb-0 md:w-[30%]">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="bg-teal-950 text-white p-4 rounded-full">
              <MdOutlineSupportAgent className="text-5xl" />
            </div>
            <h3 className="text-3xl font-semibold text-teal-950">
              {contactDet.contact3.title}
            </h3>
            <div className="text-center text-xl font-light">
              <span className="hover:underline cursor-pointer">
                {contactDet.contact3.det1}
              </span>
              <br />
              <span className="hover:underline cursor-pointer">
                {contactDet.contact3.det2}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:flex bg-white mx-4 md:mx-10 rounded-2xl px-7 py-12">
        <div className="mb-12 lg:w-[50%]">
          <h3 className="text-3xl md:text-6xl font-semibold text-teal-950">
            {contactDet.formTitle}
          </h3>
          <img src={contact2} alt="contact" className="w-56 md:w-64" />
        </div>
        <div className="lg:w-[50%]">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="contact-form"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="contact-form"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Your Number"
              className="contact-form"
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              className="contact-form"
              required
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              className="contact-form md:col-span-2 h-32 lg:h-48"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn1 place-self-start">
              {contactDet.formBtn}
            </button>
          </form>
        </div>
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={true}
        closeOnClick
        rtl={false}
        limit={3}
      />
    </main>
  );
};

export default Contact;
