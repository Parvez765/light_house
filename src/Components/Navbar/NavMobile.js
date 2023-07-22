import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsListNested } from "react-icons/bs";
import { ImCross, ImHeadphones } from "react-icons/im";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import {
  FaCar,
  FaCrop,
  FaPenNib,
  FaPersonBooth,
  FaPizzaSlice,
  FaTshirt,
  FaVectorSquare,
} from "react-icons/fa";
import {
  GiBottleVapors,
  GiConverseShoe,
  GiCutDiamond,
  GiFamilyHouse,
  GiSofa,
} from "react-icons/gi";
import { LiaGlassesSolid } from "react-icons/lia";

import NavStyle from "./NavMobile.module.css";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

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

const NavMobile = () => {
  // ----It is the state to open the sidebar----
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // -----It is the state to expand the menu components-----
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };

  const [open2, setOpen2] = useState(false);
  const toggle2 = () => {
    setOpen2(!open2);
  };

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
  // Expand 1
  const [expanded1, setExpanded1] = useState(false);

  const toggleExpand1 = () => {
    setExpanded1(!expanded1);
  };

  // Expand 2
  const [expanded2, setExpanded2] = useState(false);

  const toggleExpand2 = () => {
    setExpanded2(!expanded2);
  };

  // Expand 3
  const [expanded3, setExpanded3] = useState(false);

  const toggleExpand3 = () => {
    setExpanded3(!expanded3);
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className="text-4xl font-bold hover:text-gray-400 ease-in-out duration-300 w-[40px] flex justify-center items-center hover:border-r-4 hover:border-black"
      >
        <BsListNested />
      </button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        size={400}
        direction="right"
        lockBackgroundScroll={false}
        className={`overflow-y-scroll overflow-x-hidden ${NavStyle.scrollDesign}`}
      >
        <div className="w-full border border-black">
          <div className="flex justify-end mr-8 mt-6">
            <ImCross
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold hover:text-gray-400 ease-in-out duration-300"
            />
          </div>

          <div className="w-full my-10">
            <div className="flex flex-col items-center text-lg font-semibold gap-6 w-full h-full">
              <Link
                to="/how_it_works"
                className="text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out"
              >
                How It Works
              </Link>

              <div className="flex flex-col items-center gap-4">
                <div
                  onClick={toggle1}
                  className="text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer flex items-center"
                >
                  <h2>Services</h2>

                  <>
                    {!open1 ? (
                      <MdKeyboardArrowRight className="text-2xl" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl" />
                    )}
                  </>
                </div>

                <div className={`flex flex-col ${NavStyle.sliderDiv}`}>
                  <>
                    {open1 && (
                      <div className={NavStyle.slideDown}>
                        <div className="mb-10">
                          <h2 className="text-[#595a5c] text-sm text-center font-semibold mb-10 underline underline-offset-4">
                            Photo Editing Services
                          </h2>

                          <div className="flex flex-col items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
                            <FaCrop className="text-[#595a5c] text-xl" />

                            <div className="flex flex-col items-center">
                              <h2 className="text-base font-bold">
                                Multi Clipping Path
                              </h2>
                              <h2 className="text-sm text-[#595a5c] font-medium">
                                Your Offshore Post Production Team
                              </h2>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
                            <FaPenNib className="text-[#595a5c] text-xl" />

                            <div className="flex flex-col items-center">
                              <h2 className="text-base font-bold">
                                Clipping Path
                              </h2>
                              <h2 className="text-sm text-[#595a5c] font-medium">
                                Stand Out From The Competition
                              </h2>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
                            <FaTshirt className="text-[#595a5c] text-xl" />

                            <div className="flex flex-col items-center">
                              <h2 className="text-base font-bold">
                                Invisible Mannequin
                              </h2>
                              <h2 className="text-sm text-[#595a5c] font-medium">
                                When less becomes more
                              </h2>
                            </div>
                          </div>

                          <div className="flex flex-col items-center gap-2 mb-4 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out">
                            <FaVectorSquare className="text-[#595a5c] text-xl" />

                            <div className="flex flex-col items-center">
                              <h2 className="text-base font-bold">
                                Vector Conversion
                              </h2>
                              <h2 className="text-sm text-[#595a5c] font-medium">
                                Everything made simpler!
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h2 className="text-[#595a5c] text-sm text-center font-semibold mb-10 underline underline-offset-4">
                            High-end Retouching Services
                          </h2>

                          <div className="">
                            <div className="flex flex-col items-center gap-2">
                              {services.map((service, index) => (
                                <div className="h-[80px] w-[250px]" key={index}>
                                  <div
                                    className="flex flex-col items-center gap-2 hover:cursor-pointer duration-300 ease-in-out hover:text-sky-600"
                                    onMouseOver={() => handleMouseOver(index)}
                                    onMouseOut={() => handleMouseOut(index)}
                                  >
                                    {service.icon}
                                    <h2 className="text-base font-bold">
                                      {service.title}
                                    </h2>
                                  </div>
                                  <div>
                                    {hoverStates[index] && (
                                      <div className={NavStyle.sliderDiv}>
                                        <h2
                                          className={`${NavStyle.slideDown} text-center text-[#595a5c] text-sm font-medium break-all`}
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
                    )}
                  </>
                </div>
              </div>

              {/* Services Section */}
              <div className="relative">
                {/* Service Button */}
                <div
                  className="flex justify-between items-center text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer border border-gray-400 px-4 py-4 rounded-r-lg"
                  onClick={toggleExpand1}
                >
                  <h2>Services</h2>
                  <>
                    {expanded1 ? (
                      <MdKeyboardArrowRight className="text-2xl" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl" />
                    )}
                  </>
                </div>

                <div
                  className={`${NavStyle.navigationContent} ${
                    expanded1 ? NavStyle.expanded : ""
                  }`}
                >
                  {/* Photo Editing Service Button */}
                  <div className="relative">
                    <div
                      className="flex justify-between items-center text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer border border-gray-400 ml-4 px-4 py-4 rounded-r-lg"
                      onClick={toggleExpand2}
                    >
                      <h2>Photo Editing Service</h2>
                      <>
                        {expanded2 ? (
                          <MdKeyboardArrowRight className="text-2xl" />
                        ) : (
                          <MdKeyboardArrowDown className="text-2xl" />
                        )}
                      </>
                    </div>

                    <div
                      className={` ${NavStyle.navigationContent} ${
                        expanded2 ? NavStyle.expanded : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border border-gray-400 ml-10 px-4 py-4 rounded-r-lg">
                        <FaCrop className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">
                            Multi Clipping Path
                          </h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            Your Offshore Post Production Team
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border border-gray-400 ml-10 px-4 py-4 rounded-r-lg">
                        <FaPenNib className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">Clipping Path</h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            Stand Out From The Competition
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border border-gray-400 ml-10 px-4 py-4 rounded-r-lg">
                        <FaTshirt className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">
                            Invisible Mannequin
                          </h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            When less becomes more
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border border-gray-400 ml-10 px-4 py-4 rounded-r-lg">
                        <FaVectorSquare className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">
                            Vector Conversion
                          </h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            Everything made simpler!
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* High-end Retouching Services */}
                  <div className="relative">
                    <div
                      className="flex justify-between items-center text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer border border-gray-400 ml-4 px-4 py-4 rounded-r-lg"
                      onClick={toggleExpand3}
                    >
                      <h2>High-end Retouching Service</h2>
                      <>
                        {expanded3 ? (
                          <MdKeyboardArrowRight className="text-2xl" />
                        ) : (
                          <MdKeyboardArrowDown className="text-2xl" />
                        )}
                      </>
                    </div>

                    <div
                      className={` ${NavStyle.navigationContent} ${
                        expanded3 ? NavStyle.expanded : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border border-gray-400 ml-10 px-4 py-4 rounded-r-lg">
                        <FaCrop className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">
                            Multi Clipping Path
                          </h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            Your Offshore Post Production Team
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border border-gray-400 ml-10 px-4 py-4 rounded-r-lg">
                        <FaPenNib className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">Clipping Path</h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            Stand Out From The Competition
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border border-gray-400 ml-10 px-4 py-4 rounded-r-lg">
                        <FaTshirt className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">
                            Invisible Mannequin
                          </h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            When less becomes more
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border border-gray-400 ml-10 px-4 py-4 rounded-r-lg">
                        <FaVectorSquare className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">
                            Vector Conversion
                          </h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            Everything made simpler!
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavMobile;
