import { FaArrowRightLong } from "react-icons/fa6";

const Team = () => {
  return (
    <section className="mx-4 md:mx-10 bg-[#EFF879] rounded-2xl text-teal-950 px-8 py-24">
      <h2 className="text-4xl text-center font-semibold mb-12">Meet Our Team</h2>

      <hr className="border-gray-400" />

      <div className="flex justify-between items-center px-5 py-10 transition-all duration-300 hover:bg-white rounded-2xl cursor-pointer">
        <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between md:w-[40vw]">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Surya Kant Bansal</h3>
          <span className="text-xl md:text-2xl">CEO</span>
        </div>
        <FaArrowRightLong />
      </div>

      <hr className="border-gray-400" />

      <div className="flex justify-between items-center px-5 py-10 transition-all duration-300 hover:bg-white rounded-2xl cursor-pointer">
        <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between md:w-[40vw]">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Nitin Dhiman</h3>
          <span className="text-xl md:text-2xl">CTO</span>
        </div>
        <FaArrowRightLong />
      </div>

      <hr className="border-gray-400" />
    </section>
  );
};

export default Team;
