import React from "react";
import logo from "../../Assets/logo.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

const FooterComp1 = () => {
  return (
    <div>
      <div className="flex justify-between gap-4">
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

      <div className="flex flex-col gap-6">
        <div className="">
          <img src={logo} className="w-[250px]" alt="" />
        </div>

        <div className="flex items-center gap-8">
          <BsFacebook className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
          <BsInstagram className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
          <BsTwitter className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
          <BsYoutube className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
          <BsLinkedin className="text-2xl text-gray-400 hover:text-black duration-300 ease-in-out hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FooterComp1;
