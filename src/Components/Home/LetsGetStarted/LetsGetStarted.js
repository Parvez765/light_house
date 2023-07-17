import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { BsClipboardCheck, BsCartCheck } from "react-icons/bs";

// Components to load
import TryUsForFree from "./TryUsForFree";
import GetAQuote from "./GetAQuote";
import PlaceYourOrder from "./PlaceYourOrder";
import CustomOrder from "./CustomOrder";

const LetsGetStarted = () => {
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
  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div>
      <div>
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

        <div className="flex justify-center">
          <div className="flex justify-center gap-2 bg-cyan-300 py-4 px-2 rounded-xl w-[1100px]">
            <div className="flex flex-col">
              <div
                className={`border-[2px] border-white hover:cursor-pointer rounded-t-xl py-3 px-1 ${
                  activeComponent === "component1" ? "bg-gray-200" : ""
                }`}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                onClick={() => handleClick("component1")}
              >
                <div
                  className={
                    "flex justify-center mb-2 text-5xl duration-300 ease-in-out " +
                    (isHovered1 ? "text-sky-600" : "text-[#595a5c]")
                  }
                >
                  <AiOutlineLike />
                </div>

                <h2
                  className={
                    "text-center text-2xl font-semibold mb-2 duration-500 ease-in-out " +
                    (isHovered1 ? "text-black" : "text-[#595a5c]")
                  }
                >
                  Try Us For Free
                </h2>
                <h2 className="text-center text-lg">
                  Check our service quality
                </h2>
              </div>

              <div
                className={`border-[2px] border-white hover:cursor-pointer py-3 px-1 ${
                  activeComponent === "component2" ? "bg-gray-200" : ""
                }`}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                onClick={() => handleClick("component2")}
              >
                <div
                  className={
                    "flex justify-center mb-2 text-5xl duration-300 ease-in-out " +
                    (isHovered2 ? "text-sky-600" : "text-[#595a5c]")
                  }
                >
                  <BsClipboardCheck />
                </div>

                <h2
                  className={
                    "text-center text-2xl font-semibold mb-2 duration-500 ease-in-out " +
                    (isHovered2 ? "text-black" : "text-[#595a5c]")
                  }
                >
                  Get A Quote
                </h2>
                <h2 className="text-center text-lg">Let us quote you</h2>
              </div>

              <div
                className={`border-[2px] border-white hover:cursor-pointer py-3 px-1 ${
                  activeComponent === "component3" ? "bg-gray-200" : ""
                }`}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                onClick={() => handleClick("component3")}
              >
                <div
                  className={
                    "flex justify-center mb-2 text-5xl duration-300 ease-in-out " +
                    (isHovered3 ? "text-sky-600" : "text-[#595a5c]")
                  }
                >
                  <BsCartCheck />
                </div>

                <h2
                  className={
                    "text-center text-2xl font-semibold mb-2 duration-500 ease-in-out " +
                    (isHovered3 ? "text-black" : "text-[#595a5c]")
                  }
                >
                  Place Your Order
                </h2>
                <h2 className="text-center text-lg">
                  Get personalized solutions
                </h2>
              </div>

              <div
                className={`border-[2px] border-white rounded-b-xl hover:cursor-pointer py-3 px-1 ${
                  activeComponent === "component4" ? "bg-gray-200" : ""
                }`}
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
                onClick={() => handleClick("component4")}
              >
                <div
                  className={
                    "flex justify-center mb-2 text-5xl duration-300 ease-in-out " +
                    (isHovered4 ? "text-sky-600" : "text-[#595a5c]")
                  }
                >
                  <RiFileList2Line />
                </div>

                <h2
                  className={
                    "text-center text-2xl font-semibold mb-2 duration-500 ease-in-out " +
                    (isHovered4 ? "text-black" : "text-[#595a5c]")
                  }
                >
                  Custom Order
                </h2>
                <h2 className="text-center text-lg">Make business personal</h2>
              </div>
            </div>

            <div className="w-[800px]">
              {activeComponent === "component1" && <TryUsForFree />}
              {activeComponent === "component2" && <GetAQuote />}
              {activeComponent === "component3" && <PlaceYourOrder />}
              {activeComponent === "component4" && <CustomOrder />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsGetStarted;
