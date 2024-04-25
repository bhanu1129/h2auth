import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#F7F4EF] py-4 px-6 flex items-center justify-between border-b fixed top-0 z-20 w-full">
      <Link to="/">
        <img src={logo} alt="logo" className="h-12 md:h-14 lg:h-16" />
      </Link>
      <div className="hidden md:flex">
        <Link to="/contact" className="btn1">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
