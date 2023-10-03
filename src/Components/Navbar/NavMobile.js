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
  // ----It is the state to open and close the sidebar----
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // It is the state for slide-down text effect on div
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

  // -----It is the state to expand the menu components-----
  // Service Expand 1
  const [serviceExpand1, setServiceExpand1] = useState(false);

  const toggleService1 = () => {
    setServiceExpand1(!serviceExpand1);
  };

  // Service Expand 2
  const [serviceExpand2, setServiceExpand2] = useState(false);

  const toggleService2 = () => {
    setServiceExpand2(!serviceExpand2);
  };

  // Service Expand 3
  const [serviceExpand3, setServiceExpand3] = useState(false);

  const toggleService3 = () => {
    setServiceExpand3(!serviceExpand3);
  };

  // Company Expand 1
  const [companyExpand1, setCompanyExpand1] = useState(false);

  const toggleCompany1 = () => {
    setCompanyExpand1(!companyExpand1);
  };

  return (
    <div className="block lg:hidden">
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
        <div className="w-full mt-10 mb-20">
          <div className="flex justify-end mr-8 mt-6">
            <ImCross
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold hover:text-gray-400 ease-in-out duration-300 hover:cursor-pointer"
            />
          </div>

          <div className="w-full mt-20 mb-6 px-4">
            <div className="flex flex-col items-start text-lg font-semibold gap-3 w-full h-full">
              <Link
                to="/how_it_works"
                className="text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out px-4 py-4"
              >
                How It Works
              </Link>

              {/* Services Section */}
              <div className="relative w-full">
                {/* Service Button */}
                <div
                  className="flex justify-between items-center text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer border-b-2 border-gray-400 px-4 py-4"
                  onClick={toggleService1}
                >
                  <h2>Services</h2>
                  <>
                    {serviceExpand1 ? (
                      <MdKeyboardArrowRight className="text-2xl" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl" />
                    )}
                  </>
                </div>

                <div
                  className={`${NavStyle.navigationContent} ${
                    serviceExpand1 ? NavStyle.expanded : ""
                  }`}
                >
                  {/* Photo Editing Service Button */}
                  <div className="relative">
                    <div
                      className="flex justify-between items-center text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer border-b-2 border-gray-400 ml-4 px-4 py-4"
                      onClick={toggleService2}
                    >
                      <h2>Photo Editing Service</h2>
                      <>
                        {serviceExpand2 ? (
                          <MdKeyboardArrowRight className="text-2xl" />
                        ) : (
                          <MdKeyboardArrowDown className="text-2xl" />
                        )}
                      </>
                    </div>

                    <div
                      className={` ${NavStyle.navigationContent} ${
                        serviceExpand2 ? NavStyle.expanded : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border-r-2 border-transparent hover:border-gray-400 ml-10 px-4 py-4">
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

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border-r-2 border-transparent hover:border-gray-400 ml-10 px-4 py-4">
                        <FaPenNib className="text-[#595a5c] text-xl" />

                        <div className="flex flex-col gap-1">
                          <h2 className="text-base font-bold">Clipping Path</h2>
                          <h2 className="text-sm text-[#595a5c] font-medium">
                            Stand Out From The Competition
                          </h2>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border-r-2 border-transparent hover:border-gray-400 ml-10 px-4 py-4">
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

                      <div className="flex items-center gap-2 hover:text-sky-600 hover:cursor-pointer duration-300 ease-in-out border-r-2 border-transparent hover:border-gray-400 ml-10 px-4 py-4">
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
                      className="flex justify-between items-center text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer border-b-2 border-gray-400 ml-4 px-4 py-4"
                      onClick={toggleService3}
                    >
                      <h2>High-end Retouching Service</h2>
                      <>
                        {serviceExpand3 ? (
                          <MdKeyboardArrowRight className="text-2xl" />
                        ) : (
                          <MdKeyboardArrowDown className="text-2xl" />
                        )}
                      </>
                    </div>

                    <div
                      className={`mt-4 ${NavStyle.navigationContent} ${
                        serviceExpand3 ? NavStyle.expanded : ""
                      }`}
                    >
                      {services.map((service, index) => (
                        <div
                          className="h-[60px] ml-14 duration-300 ease-in-out hover:cursor-pointer border-r-2 border-transparent hover:border-gray-400"
                          onMouseOver={() => handleMouseOver(index)}
                          onMouseOut={() => handleMouseOut(index)}
                          key={index}
                        >
                          <div className="flex items-center gap-2 hover:cursor-pointer duration-300 ease-in-out hover:text-sky-600">
                            {service.icon}
                            <h2 className="text-base font-bold">
                              {service.title}
                            </h2>
                          </div>

                          <div>
                            {hoverStates[index] && (
                              <div className={NavStyle.sliderDiv}>
                                <h2
                                  className={`${NavStyle.slideDown} ml-[28px] text-[#595a5c] text-sm font-medium break-all`}
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

              {/* Company Section */}
              <div className="relative w-full">
                <div
                  className="flex justify-between items-center text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out hover:cursor-pointer border-b-2 border-gray-400 px-4 py-4"
                  onClick={toggleCompany1}
                >
                  <h2>Company</h2>
                  <>
                    {companyExpand1 ? (
                      <MdKeyboardArrowRight className="text-2xl" />
                    ) : (
                      <MdKeyboardArrowDown className="text-2xl" />
                    )}
                  </>
                </div>
              </div>

              <Link
                to="/pricing"
                className="text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out px-4 py-4"
              >
                Pricing
              </Link>

              <Link
                to="/career"
                className="text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out px-4 py-4"
              >
                Career
              </Link>

              <Link
                to="/about_us"
                className="text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out px-4 py-4"
              >
                About Us
              </Link>

              <Link className="text-[#595a5c] text-xl hover:text-sky-600 duration-300 ease-in-out px-4 py-4">
                Get a quote
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 px-4 mt-20">
            <h2 className="border border-gray-400 hover:border-transparent text-black hover:text-white hover:bg-sky-600 hover:cursor-pointer rounded-md text-center text-xl font-bold duration-300 ease-in-out px-4 py-3 w-full">
              Login
            </h2>
            <h2 className="rounded-md text-center text-xl font-bold duration-300 ease-in-out px-4 py-3 w-full bg-sky-600 hover:bg-sky-500 hover:cursor-pointer text-white">
              Get Started
            </h2>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavMobile;
