import React from "react";
import logo from "../../Assets/logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const FooterComp1 = () => {
  return (
    <div>
      {/* Trial advertisement and marketing */}
      <div className="flex justify-between gap-4 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Start your 30-day free trial
          </h2>
          <h2 className="text-[#595a5c] font-medium">
            Join over 4,000+ startups who are already growing !
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <h2 className="hover:bg-sky-600 hover:cursor-pointer hover:text-white border border-gray-400 hover:border-transparent rounded-lg duration-300 ease-in-out text-base xl:text-lg font-semibold py-1.5 px-4">
            Learn More
          </h2>

          <h2 className="bg-sky-600 hover:bg-sky-800 hover:cursor-pointer text-white rounded-lg duration-300 ease-in-out text-base xl:text-lg font-semibold py-1.5 px-4">
            Get Started
          </h2>
        </div>
      </div>

      <div className="flex justify-between gap-6">
        {/* Logo and social links */}
        <div className="flex flex-col gap-6">
          <NavLink to="/" className="hover:scale-105 duration-300 ease-in-out">
            <img src={logo} className="w-[250px]" alt="" />
          </NavLink>

          <div className="flex items-center gap-8">
            <BsFacebook className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
            <BsInstagram className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
            <BsTwitter className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
            <BsYoutube className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
            <BsLinkedin className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
          </div>
        </div>

        {/* Parent Div of All Footer Links */}
        <div className="flex gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Services</h2>

            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Clipping Path
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Multi-Clipping Path
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Ghost Mannequin
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Photo Retouching
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Vector Conversion
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Embroidery Digitizing
            </h2>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">About</h2>

            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Testimonials
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              About Us
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Our Team
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Careers
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              FAQs
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Terms & Conditions
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Privacy Policy
            </h2>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Support</h2>

            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Contact Us
            </h2>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Business</h2>

            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Get Free Trial
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Get A Quote
            </h2>
            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Sign In/Up
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp1;
