import React from "react";
import AllTitle from "../../Hooks/AllTitle/AllTitle";
import pic1 from "../../Assets/AboutUs/pic1.jpeg";
import pic2 from "../../Assets/AboutUs/pic2.jpg";
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
        src={pic1}
        className="w-full h-[300px] xl:h-[400px] object-cover object-center mb-24 md:mb-32"
        alt=""
      />

      <div className="flex flex-col lg:flex-row justify-center gap-20 mx-4 mb-[100px] sm:mb-[250px]">
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

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 mx-4 mb-[200px]">
        <div className="max-w-xl">
          <h2 className="text-5xl sm:text-6xl font-bold">Actually...</h2>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            it was never about 'us' !
          </h2>

          <h2 className="text-xl text-gray-600 font-medium">
            Our mission is simple! We empower people and build a bridge of
            harmony between our photo editors and you! No matter wherever you
            are or how timezones set us apart, we make your work easy and
            effortless.
          </h2>
        </div>

        <img src={onlyLogo} className="w-[150px] md:w-[200px]" alt="" />
      </div>

      <div className="flex justify-center mb-[200px] mx-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-16 max-w-max rounded-2xl bg-gradient-to-br from-white from-50% via-white via-70% to-sky-300 to-100%">
          <div className="flex flex-col max-w-xl">
            <div class="flex mb-6">
              <h1 class="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-sky-600">
                We are a hybrid company.
              </h1>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold">
              Fully flexible to our employees and customers.
            </h2>
          </div>

          <h2 className="text-2xl text-gray-600 font-medium max-w-lg">
            At lighthouse, we have only one rule – act with utmost integrity and
            professionalism. No matter where you or we are, we make sure you get
            the service you need. Properly, consistently, perfectly.
          </h2>
        </div>
      </div>

      <div className="flex justify-center mx-4">
        <div className="bg-gradient-to-r from-yellow-100 to-green-100 flex flex-col items-center gap-10 max-w-max rounded-xl p-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <h2 className="text-5xl sm:text-6xl text-center md:text-left font-bold max-w-xl">
              We are a family of 300+ passionate individuals
            </h2>
            <h2 className="text-xl text-center md:text-left font-medium text-gray-600 max-w-xl">
              See how we're working to create a positive and reinforceable
              change in the world by building a bridge of harmony between you
              and one of your fellow earthmen.
            </h2>
          </div>

          <img
            src={pic2}
            className="xl:max-w-[1000px] object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
