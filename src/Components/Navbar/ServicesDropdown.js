import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCrop } from "react-icons/fa";
import { ImHeadphones } from "react-icons/im";
import { LiaGlassesSolid } from "react-icons/lia";
import {
  FaPenNib,
  FaTshirt,
  FaVectorSquare,
  FaPersonBooth,
  FaCar,
  FaPizzaSlice,
} from "react-icons/fa";

import {
  GiCutDiamond,
  GiBottleVapors,
  GiSofa,
  GiConverseShoe,
  GiFamilyHouse,
} from "react-icons/gi";

import serviceStyle from "./ServicesDropdown.module.css";

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
      icon: <FaCrop className="text-sky-600 text-xl" />,
      title: "Editorial Retouching",
      description: "Make Your Image Tell A Great Story",
    },
    {
      icon: <GiCutDiamond className="text-sky-600 text-xl" />,
      title: "Jewelry Retouching",
      description: "Glare With Glimmer",
    },
    {
      icon: <FaPersonBooth className="text-sky-600 text-xl" />,
      title: "Model & Skin Retouching",
      description: "With You - All The Way",
    },
    {
      icon: <FaTshirt className="text-sky-600 text-xl" />,
      title: "Apparel Retouching",
      description: "Trend Up Your Style Game",
    },
    {
      icon: <GiBottleVapors className="text-sky-600 text-xl" />,
      title: "Cosmetics Retouching",
      description: "What looks beautiful, feels beautiful!",
    },
    {
      icon: <ImHeadphones className="text-sky-600 text-xl" />,
      title: "Fashion Retouching",
      description: "Create Your Brand Story",
    },
    {
      icon: <GiSofa className="text-sky-600 text-xl" />,
      title: "Furniture Retouching",
      description: "Scale Up With Us",
    },
    {
      icon: <LiaGlassesSolid className="text-sky-600 text-xl" />,
      title: "EyeWear Retouching",
      description: "Blending Perfection With Style",
    },
    {
      icon: <GiConverseShoe className="text-sky-600 text-xl" />,
      title: "FootWear Retouching",
      description: "Tell Your Brand Story With Us",
    },
    {
      icon: <FaCar className="text-sky-600 text-xl" />,
      title: "Automotive Retouching",
      description: "Get Your Automation done",
    },
    {
      icon: <GiFamilyHouse className="text-sky-600 text-xl" />,
      title: "Real Estate Retouching",
      description: "Make Interior & Exterior Beautiful",
    },
    {
      icon: <FaPizzaSlice className="text-sky-600 text-xl" />,
      title: "Food Retouching",
      description: "Make Your Food Picture Lit",
    },
  ];

  return (
    <div className="dropdown dropdown-hover">
      <label
        tabIndex={1}
        className="flex justify-center items-center text-[#595a5c] hover:text-sky-600 text-lg xl:text-xl font-semibold hover:cursor-pointer"
      >
        <h2>Services</h2>
        <MdKeyboardArrowDown />
      </label>

      {/* Dropdown Content */}

      <div
        tabIndex={1}
        className="dropdown-content flex gap-2 z-[1] px-6 pt-14 pb-2 drop-shadow-xl shadow-2xl bg-white lg:left-[-370px] rounded-xl w-[1000px]"
      >
        <div className="mr-10">
          <h2 className="text-[#595a5c] text-sm font-semibold mb-4">
            Photo Editing Services
          </h2>

          <div className="flex items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
            <FaCrop className="text-[#595a5c] text-xl" />

            <div>
              <h2 className="text-base font-bold">Multi Clipping Path</h2>
              <h2 className="text-sm text-[#595a5c] font-medium">
                Your Offshore Post Production Team
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
            <FaPenNib className="text-[#595a5c] text-xl" />

            <div>
              <h2 className="text-base font-bold">Clipping Path</h2>
              <h2 className="text-sm text-[#595a5c] font-medium">
                Stand Out From The Competition
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
            <FaTshirt className="text-[#595a5c] text-xl" />

            <div>
              <h2 className="text-base font-bold">Invisible Mannequin</h2>
              <h2 className="text-sm text-[#595a5c] font-medium">
                When less becomes more
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
            <FaVectorSquare className="text-[#595a5c] text-xl" />

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

          <div className="w-[600px]">
            <div className="grid grid-flow-col-dense grid-cols-2 grid-rows-6 gap-x-10">
              {services.map((service, index) => (
                <div className="h-[55px]" key={index}>
                  <div
                    className="flex items-center gap-2 hover:cursor-pointer duration-300 ease-in-out hover:text-sky-600"
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
                  >
                    {service.icon}
                    <h2 className="text-base font-bold">{service.title}</h2>
                  </div>
                  <div>
                    {hoverStates[index] && (
                      <div className={serviceStyle.sliderDiv}>
                        <h2
                          className={`${serviceStyle.slideDown} ml-[28px] text-[#595a5c] text-sm font-medium`}
                        >
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
    </div>
  );
};

export default ServicesDropdown;
