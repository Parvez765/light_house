import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { BsClipboardCheck, BsCartCheck } from "react-icons/bs";

// Components to load

import GetAQuote from "./GetAQuote/GetAQuote";
import PlaceYourOrder from "./PlaceYourOrder/PlaceYourOrder";
import CustomOrder from "./CustomOrder/CustomOrder";
import TryUsForFree from "./TryUsForFree/TryUsForFree";

const LetsGetStarted = () => {
  // Components Background Color State
  const [bgColor, setBgColor] = useState(
    "bg-gradient-to-br from-cyan-200 from-10% via-white via-60% to-cyan-200 to-90%"
  );

  // Function to update background color
  const changeBgColor = (color) => {
    setBgColor(color);
  };

  // Button's Background color state
  const btnBgColor = [
    "bg-gradient-to-tl from-cyan-200 to-white",
    "bg-gradient-to-tl from-red-200 to-white",
    "bg-gradient-to-tl from-green-200 to-white",
    "bg-gradient-to-tl from-fuchsia-200 to-white",
  ];

  // To show the active button and background color index
  const [btnBgColorIndex, setBtnBgColorIndex] = useState(0); // Initial color index

  // All State Declaration
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  // To show the active component
  const [activeComponent, setActiveComponent] = useState("component1");

  // All Mouse Enter
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };
  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  // All Mouse Leave
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  // Function for showing the active component
  const handleButtonClick = (componentName, colorIndex) => {
    setActiveComponent(componentName);
    setBtnBgColorIndex(colorIndex);
  };

  return (
    <div>
      <div className="border border-black">
        <div className="mb-10 mx-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Let's Get Started...
          </h2>
          <h2 className="text-[#595a5c] text-lg font-medium text-center lg:mx-40 xl:mx-64 2xl:mx-96">
            Introducing a simpler and economical way to get the best photo
            editing solutions for Pro-photographers, Fashion, Apparel, and
            E-commerce businesses. Home to all your service needs, whether you
            want to test our quality, get a custom quote, place an order, or get
            a customized service.
          </h2>
        </div>

        <div className="flex justify-center pb-20 px-4">
          {/* Let's Get Started Div */}
          <div
            className={`${bgColor} flex flex-col xl:flex-row justify-center items-center xl:items-center gap-2 py-4 px-4 rounded-xl`}
          >
            {/* The 4 buttons which will change the component */}
            <div
              className={`${btnBgColor[btnBgColorIndex]} grid grid-cols-2 md:grid-cols-4 xl:flex xl:flex-col xl:w-[250px] xl:rounded-xl`}
            >
              <div
                className={`border-[2px] border-white hover:cursor-pointer xl:rounded-t-xl py-3 px-1 ${
                  activeComponent === "component1"
                    ? "border-b-sky-500 border-l-white xl:border-b-white xl:border-l-sky-500"
                    : "border-transparent"
                }`}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                onClick={() => handleButtonClick("component1", 0)}
              >
                <div
                  className={
                    `flex justify-center mb-2 text-3xl lg:text-5xl duration-300 ease-in-out ${
                      activeComponent === "component1" ? "text-sky-600" : ""
                    } ` + (isHovered1 ? "text-sky-600" : "text-[#595a5c]")
                  }
                >
                  <AiOutlineLike />
                </div>

                <h2
                  className={
                    `text-center text-xl lg:text-2xl font-semibold mb-2 duration-500 ease-in-out ${
                      activeComponent === "component1" ? "text-black" : ""
                    } ` + (isHovered1 ? "text-black" : "text-[#595a5c]")
                  }
                >
                  Try Us For Free
                </h2>
                <h2 className="text-center text-sm lg:text-lg">
                  Check our service quality
                </h2>
              </div>

              <div
                className={`border-[2px] border-white hover:cursor-pointer py-3 px-1 ${
                  activeComponent === "component2"
                    ? "border-b-red-400 border-l-white xl:border-b-white xl:border-l-red-400"
                    : "border-transparent"
                }`}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                onClick={() => handleButtonClick("component2", 1)}
              >
                <div
                  className={
                    `flex justify-center mb-2 text-3xl lg:text-5xl duration-300 ease-in-out ${
                      activeComponent === "component2" ? "text-red-400" : ""
                    } ` + (isHovered2 ? "text-red-400" : "text-[#595a5c]")
                  }
                >
                  <BsClipboardCheck />
                </div>

                <h2
                  className={
                    `text-center text-xl lg:text-2xl font-semibold mb-2 duration-500 ease-in-out ${
                      activeComponent === "component2" ? "text-black" : ""
                    } ` + (isHovered2 ? "text-black" : "text-[#595a5c]")
                  }
                >
                  Get A Quote
                </h2>
                <h2 className="text-center text-sm lg:text-lg">
                  Let us quote you
                </h2>
              </div>

              <div
                className={`border-[2px] border-white hover:cursor-pointer py-3 px-1 ${
                  activeComponent === "component3"
                    ? "border-b-green-600 border-l-white xl:border-b-white xl:border-l-green-600"
                    : "border-transparent"
                }`}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                onClick={() => handleButtonClick("component3", 2)}
              >
                <div
                  className={
                    `flex justify-center mb-2 text-3xl lg:text-5xl duration-300 ease-in-out ${
                      activeComponent === "component3" ? "text-green-600" : ""
                    } ` + (isHovered3 ? "text-green-600" : "text-[#595a5c]")
                  }
                >
                  <BsCartCheck />
                </div>

                <h2
                  className={
                    `text-center text-xl lg:text-2xl font-semibold mb-2 duration-500 ease-in-out ${
                      activeComponent === "component3" ? "text-black" : ""
                    } ` + (isHovered3 ? "text-black" : "text-[#595a5c]")
                  }
                >
                  Place Your Order
                </h2>
                <h2 className="text-center text-sm lg:text-lg">
                  Get personalized solutions
                </h2>
              </div>

              <div
                className={`border-[2px] border-white xl:rounded-b-xl hover:cursor-pointer py-3 px-1 ${
                  activeComponent === "component4"
                    ? "border-b-fuchsia-500 border-l-white xl:border-b-white xl:border-l-fuchsia-500"
                    : "border-transparent"
                }`}
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
                onClick={() => handleButtonClick("component4", 3)}
              >
                <div
                  className={
                    `flex justify-center mb-2 text-3xl lg:text-5xl duration-300 ease-in-out ${
                      activeComponent === "component4" ? "text-fuchsia-600" : ""
                    } ` + (isHovered4 ? "text-fuchsia-600" : "text-[#595a5c]")
                  }
                >
                  <RiFileList2Line />
                </div>

                <h2
                  className={
                    `text-center text-xl lg:text-2xl font-semibold mb-2 duration-500 ease-in-out ${
                      activeComponent === "component4" ? "text-black" : ""
                    } ` + (isHovered4 ? "text-black" : "text-[#595a5c]")
                  }
                >
                  Custom Order
                </h2>
                <h2 className="text-center text-sm lg:text-lg">
                  Make business personal
                </h2>
              </div>
            </div>

            {/* Components that will be changed */}
            <div className="sm:w-[500px] lg:w-[700px] xl:w-[800px]">
              {activeComponent === "component1" && (
                <TryUsForFree changeBgColor={changeBgColor} />
              )}
              {activeComponent === "component2" && (
                <GetAQuote changeBgColor={changeBgColor} />
              )}
              {activeComponent === "component3" && (
                <PlaceYourOrder changeBgColor={changeBgColor} />
              )}
              {activeComponent === "component4" && (
                <CustomOrder changeBgColor={changeBgColor} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsGetStarted;
