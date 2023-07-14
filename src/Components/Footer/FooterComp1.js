import React from "react";
import logo from "../../Assets/logo.png";
import stripeLogo from "../../Assets/Footer/stripe.png";
import stripe1 from "../../Assets/Footer/Payment_1.png";
import stripe2 from "../../Assets/Footer/Payment_2.png";
import stripe3 from "../../Assets/Footer/Payment_3.png";
import stripe4 from "../../Assets/Footer/Payment_4.png";
import stripe5 from "../../Assets/Footer/Payment_5.png";
import stripe6 from "../../Assets/Footer/Payment_6.png";
import stripe7 from "../../Assets/Footer/Payment_7.png";
import stripe8 from "../../Assets/Footer/Payment_8.png";

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
    <div className="py-6 px-4 md:px-12 lg:px-24 2xl:px-32 bg-gradient-to-r from-sky-200 to-sky-100">
      {/* Trial advertisement and marketing */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-between gap-4 mb-20 mx-6">
        <div>
          <h2 className="text-3xl text-center lg:text-left font-bold mb-4">
            Start your 30-day free trial
          </h2>
          <h2 className="text-[#595a5c] text-center lg:text-left font-medium">
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

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 lg:gap-6 mb-10 mx-6">
        {/* Logo and social links */}
        <div className="flex flex-col items-start gap-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex flex-col items-start">
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

          <div className="flex flex-col items-start">
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

          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-2">Support</h2>

            <h2 className="text-gray-500 font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer mb-1">
              Contact Us
            </h2>
          </div>

          <div className="flex flex-col items-start">
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

      <div>
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-6 mx-6">
          <div>
            <img src={stripeLogo} className="w-[150px]" alt="" />
          </div>

          <h2 className="font-medium text-center md:text-left">
            Guaranteed safe & secure checkout
          </h2>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mx-6 mb-4">
          <img
            src={stripe1}
            className="w-[60px] hover:scale-110 duration-300 ease-in-out"
            alt=""
          />
          <img
            src={stripe2}
            className="w-[60px] hover:scale-110 duration-300 ease-in-out"
            alt=""
          />
          <img
            src={stripe3}
            className="w-[60px] hover:scale-110 duration-300 ease-in-out"
            alt=""
          />
          <img
            src={stripe4}
            className="w-[60px] hover:scale-110 duration-300 ease-in-out"
            alt=""
          />
          <img
            src={stripe5}
            className="w-[60px] hover:scale-110 duration-300 ease-in-out"
            alt=""
          />
          <img
            src={stripe6}
            className="w-[60px] hover:scale-110 duration-300 ease-in-out"
            alt=""
          />
          <img
            src={stripe7}
            className="w-[60px] hover:scale-110 duration-300 ease-in-out"
            alt=""
          />
          <img
            src={stripe8}
            className="w-[60px] hover:scale-110 duration-300 ease-in-out"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-10 mx-6">
        <h2 className="text-gray-500 text-lg text-center font-medium">
          <span className="font-bold">©</span> 2023 Lighthouse Inc. - All rights
          reserved
        </h2>

        <div className="flex items-center gap-2">
          <h2 className="text-gray-500 text-sm sm:text-lg font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer">
            Privacy Policy
          </h2>
          <h2 className="text-gray-500 text-sm sm:text-lg font-medium">|</h2>
          <h2 className="text-gray-500 text-sm sm:text-lg font-medium hover:text-black duration-300 ease-in-out hover:cursor-pointer">
            Terms & Conditions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FooterComp1;
