import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCrop } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import {
  FaPenNib,
  FaTshirt,
  FaVectorSquare,
  FaPersonBooth,
} from "react-icons/fa";

import { GiCutDiamond, GiBottleVapors } from "react-icons/gi";
import "./ServicesDropdown.css";

const ServicesDropdown = () => {
  const [hoverStates, setHoverStates] = useState([false, false]);

  const handleMouseOver = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = true;
      return updatedStates;
    });
  };

  const handleMouseOut = (index) => {
    setHoverStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = false;
      return updatedStates;
    });
  };

  const services = [
    {
      icon: <FaCrop className="text-sky-600" />,
      title: "Editorial Retouching",
      description: "We Make Every Part of Your Image Tell A Great Story",
    },
    {
      icon: <GiCutDiamond className="text-sky-600" />,
      title: "Jewelry Retouching",
      description: "Glare With Glimmer",
    },
    {
      icon: <FaPersonBooth className="text-sky-600" />,
      title: "Model & Skin Retouching",
      description: "With You - All The Way",
    },
    {
      icon: <FaTshirt className="text-sky-600" />,
      title: "Apparel Retouching",
      description: "Trend Up Your Style Game",
    },
    {
      icon: <GiBottleVapors className="text-sky-600" />,
      title: "Cosmetics Retouching",
      description: "What looks beautiful, feels beautiful!",
    },
    {
      icon: <ImHeadphones className="text-sky-600" />,
      title: "Fashion Retouching",
      description: "Create Your Brand Story",
    },
  ];

  return (
    <div className="dropdown dropdown-hover">
      <label
        tabIndex={0}
        className="flex justify-center items-center text-[#595a5c] hover:text-sky-600 text-lg xl:text-xl font-semibold hover:cursor-pointer"
      >
        <h2>Services</h2>
        <MdKeyboardArrowDown />
      </label>

      {/* Dropdown Content */}

      <div
        tabIndex={0}
        className="dropdown-content flex gap-2 z-[1] p-2 drop-shadow-2xl shadow-2xl bg-white border border-black rounded-xl w-[1000px] h-[400px]"
      >
        <div className="mr-10">
          <h2 className="text-[#595a5c] text-sm font-semibold mb-4">
            Photo Editing Services
          </h2>

          <div className="flex items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
            <FaCrop className="text-[#595a5c]" />

            <div>
              <h2 className="text-base font-bold">Multi Clipping Path</h2>
              <h2 className="text-sm text-[#595a5c] font-medium">
                Your Offshore Post Production Team
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
            <FaPenNib className="text-[#595a5c]" />

            <div>
              <h2 className="text-base font-bold">Clipping Path</h2>
              <h2 className="text-sm text-[#595a5c] font-medium">
                Stand Out From The Competition
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
            <FaTshirt className="text-[#595a5c]" />

            <div>
              <h2 className="text-base font-bold">Invisible Mannequin</h2>
              <h2 className="text-sm text-[#595a5c] font-medium">
                When less becomes more
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
            <FaVectorSquare className="text-[#595a5c]" />

            <div>
              <h2 className="text-base font-bold">Vector Conversion</h2>
              <h2 className="text-sm text-[#595a5c] font-medium">
                Everything made simpler!
              </h2>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-sky-600 text-sm font-semibold mb-4">
            High-end Retouching Services
          </h2>

          <div>
            {services.map((service, index) => (
              <div className="h-[55px]" key={index}>
                <div
                  className="flex items-center gap-2"
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseOut={() => handleMouseOut(index)}
                >
                  {service.icon}
                  <h2 className="text-base font-bold duration-300 ease-in-out hover:text-sky-600 hover:cursor-pointer">
                    {service.title}
                  </h2>
                </div>
                <div>
                  {hoverStates[index] && (
                    <div className="slide-effect">
                      <h2 className="slideDown ml-[25px] text-[#595a5c] text-sm font-medium">
                        {service.description}
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
