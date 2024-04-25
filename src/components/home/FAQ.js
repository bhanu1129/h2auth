import { useState } from "react";
import faq from "../../assets/home/faq.png";
import { FiPlus } from "react-icons/fi";

const FAQ = () => {
  return (
    <section className="mx-4 md:mx-10">
      <h2 className="mb-16 text-5xl font-semibold text-teal-950 text-center w-[80vw] mx-auto">
        Frequently Asked Questions
      </h2>
      <div className="lg:flex gap-10">
        <div className="mb-16 lg:max-w-[50%]">
          <Dropdown
            title="What Is Authentication As A Service, And How Does H2Auth Differ From Traditional Authentication Methods?"
            desc="Authentication as a service (AaaS) is a cloud-based solution that handles user authentication for applications. H2Auth offers a seamless, secure, and scalable approach to authentication, eliminating the need for businesses to build and maintain complex authentication systems in-house. Unlike traditional methods, H2Auth provides a centralized platform with robust security measures, including multi-factor authentication and continuous monitoring, ensuring a hassle-free authentication experience for both businesses and users."
          />
          <Dropdown
            title="Can H2Auth Integrate With My Existing Applications And Platforms?"
            desc="Yes, absolutely! H2Auth is designed to integrate seamlessly with a wide range of applications and platforms, including web and mobile apps, APIs, and various frameworks. Our comprehensive documentation and developer-friendly APIs make integration straightforward, allowing you to leverage the power of H2Auth without disrupting your existing workflows."
          />
          <Dropdown
            title="How Does H2Auth Ensure The Security Of User Data And Credentials?"
            desc="Security is our top priority at H2Auth. We employ industry-leading encryption techniques, secure token-based authentication, and robust access controls to safeguard user data and credentials. Additionally, we continuously monitor our systems for any suspicious activity and promptly respond to potential security threats to ensure the integrity and confidentiality of your data."
          />
          <Dropdown
            title="Can I Customize The Authentication Flows To Match My Brand And User Experience?"
            desc="Absolutely! H2Auth offers extensive customization options, allowing you to tailor authentication flows to reflect your brand identity and enhance the user experience. From customizing the login and registration forms to implementing single sign-on (SSO) solutions and branded email templates, H2Auth empowers you to create a seamless and cohesive authentication experience for your users."
          />
          <Dropdown
            title="What Level Of Support Does H2Auth Provide To Its Customers?"
            desc="At H2Auth, we are committed to providing exceptional customer support every step of the way. Whether you have questions about integration, need assistance with troubleshooting, or require guidance on implementing specific authentication features, our dedicated support team is here to help. You can reach out to us via email, phone, or our online support portal, and we'll ensure that your queries are addressed promptly and efficiently."
          />
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
          <div className={`transition-all duration-500 ${isOpen ? 'rotate-[135deg]' : ''}`}><FiPlus /></div>
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
