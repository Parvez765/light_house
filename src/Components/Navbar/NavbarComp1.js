import React from "react";
import logo from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./NavbarComp1.css";
import ServicesDropdown from "./ServicesDropdown";
import "./NavbarComp1.css";
import NavMobile from "./NavMobile";

const NavbarComp1 = () => {
  return (
    <div className="flex justify-between items-center py-4 px-10 lg:px-2 xl:px-16 2xl:px-32 navItem">
      <div className="flex justify-center items-center">
        <NavLink to="/">
          <img
            src={logo}
            className="w-[220px] xl:w-[250px] hover:scale-105 duration-300 ease-in-out hover:cursor-pointer"
            alt=""
          />
        </NavLink>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-4 2xl:gap-12">
        <NavLink
          to="/how_it_works"
          className="text-[#595a5c] hover:text-sky-600 duration-300 ease-in-out"
        >
          <h2 className="text-lg xl:text-xl font-semibold">How It Works</h2>
        </NavLink>

        <div>
          <ServicesDropdown />
        </div>

        <NavLink
          to="/company"
          className="flex justify-center items-center text-[#595a5c] hover:text-sky-600 duration-300 ease-in-out"
        >
          <h2 className="text-lg xl:text-xl font-semibold">Company</h2>
          <MdKeyboardArrowDown />
        </NavLink>

        <NavLink
          to="/pricing"
          className="text-[#595a5c] hover:text-sky-600 duration-300 ease-in-out"
        >
          <h2 className="text-lg xl:text-xl font-semibold">Pricing</h2>
        </NavLink>
      </div>

      <div className="hidden lg:flex justify-center items-center gap-2">
        <NavLink
          to="/get_quote"
          className="text-[#595a5c] hover:text-sky-600 duration-300 ease-in-out mr-2 xl:mr-4"
        >
          <h2 className="text-lg xl:text-xl font-semibold">Get a quote</h2>
        </NavLink>

        <NavLink
          to="/login"
          className="hover:bg-sky-600 hover:text-white border border-gray-400 hover:border-transparent rounded-lg duration-300 ease-in-out"
        >
          <h2 className="text-lg xl:text-xl font-semibold py-1.5 px-4">
            Login
          </h2>
        </NavLink>

        <NavLink
          to="/get_started"
          className="text-white bg-sky-700 hover:bg-sky-600 rounded-lg duration-300 ease-in-out"
        >
          <h2 className="text-lg xl:text-xl font-semibold py-1.5 px-4">
            Get Started
          </h2>
        </NavLink>
      </div>

      {/* Navigation bar for mobile responsive */}
      <NavMobile />
    </div>
  );
};

export default NavbarComp1;
