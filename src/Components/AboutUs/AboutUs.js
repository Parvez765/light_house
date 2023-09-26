import React from "react";
import AllTitle from "../../Hooks/AllTitle/AllTitle";
import bgImg from "../../Assets/AboutUs/pic1.jpeg";
import onlyLogo from "../../Assets/AboutUs/only_logo.png";

const AboutUs = () => {
  AllTitle("About Us");
  return (
    <div className="my-10">
      <div className="flex flex-col items-center mb-10 mx-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Welcome to
        </h2>
        <h2 className="text-5xl md:text-6xl font-bold text-center text-sky-900">
          lighthouse
        </h2>
      </div>

      <img
        src={bgImg}
        className="w-full h-[300px] xl:h-[400px] object-cover object-center mb-24 md:mb-32"
        alt=""
      />

      <div className="flex flex-col lg:flex-row justify-center gap-20 mx-4 mb-32">
        <div className="flex flex-col text-center">
          <h2 className="text-gray-600 text-5xl sm:text-7xl font-bold">
            5000+
          </h2>
          <h2 className="text-gray-600 text-xl font-medium">
            companies are thriving with our help
          </h2>
        </div>

        <div className="flex flex-col text-center">
          <h2 className="text-gray-600 text-5xl sm:text-7xl font-bold">
            12000+
          </h2>
          <h2 className="text-gray-600 text-xl font-medium">
            images edited every day
          </h2>
        </div>

        <div className="flex flex-col text-center">
          <h2 className="text-gray-600 text-5xl sm:text-7xl font-bold">
            1795+
          </h2>
          <h2 className="text-gray-600 text-xl font-medium">
            individuals trained and empowered in 15+ years
          </h2>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-6 mx-4">
        <div className="max-w-xl">
          <h2 className="text-6xl font-bold">Actually...</h2>
          <h2 className="text-6xl font-bold mb-6">it was never about 'us' !</h2>

          <h2 className="text-xl text-gray-600 font-medium">
            Our mission is simple! We empower people and build a bridge of
            harmony between our photo editors and you! No matter wherever you
            are or how timezones set us apart, we make your work easy and
            effortless.
          </h2>
        </div>

        <img src={onlyLogo} className="w-[150px] md:w-[200px]" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
