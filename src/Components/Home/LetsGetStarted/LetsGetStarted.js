import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { BsClipboardCheck, BsCartCheck } from "react-icons/bs";

const LetsGetStarted = () => {
  // All State Declaration
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  //   All Mouse Enter
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

        <div className="flex flex-col">
          <div
            className="border border-black hover:cursor-pointer rounded-t-xl py-3 px-1"
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
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
            <h2 className="text-center text-lg">Check our service quality</h2>
          </div>

          <div
            className="border border-black hover:cursor-pointer py-3 px-1"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
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
            className="border border-black hover:cursor-pointer py-3 px-1"
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
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
            <h2 className="text-center text-lg">Get personalized solutions</h2>
          </div>

          <div
            className="border border-black hover:cursor-pointer py-3 px-1"
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}
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
      </div>
    </div>
  );
};

export default LetsGetStarted;
