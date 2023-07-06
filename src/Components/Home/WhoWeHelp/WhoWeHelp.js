import React from "react";
import frame1 from "../../../Assets/WhoWeHelp/Frame_1.png";
import frame2 from "../../../Assets/WhoWeHelp/Frame_2.png";
import frame3 from "../../../Assets/WhoWeHelp/Frame_3.png";
import frame4 from "../../../Assets/WhoWeHelp/Frame_4.png";

const WhoWeHelp = () => {
  const ourCustomers = [
    {
      title: "Photographers",
      details:
        "Busy professional photographers with a huge number of images from their recent product photoshoots.",
      img: frame1,
    },
    {
      title: "E-commerce Businesses",
      details:
        "They want to use their time to move the needle instead of fiddling around in photo editing using Photoshop.",
      img: frame2,
    },
    {
      title: "Studios & Agencies",
      details:
        "With tight client deadlines and tons of other deliverables to wrangle, agencies need us the most.",
      img: frame3,
    },
    {
      title: "Growing Brands",
      details:
        "That require the right visual style for their product lines and a rock solid image editing team.",
      img: frame4,
    },
  ];
  return (
    <div>
      <div>
        <div className="mb-10 mx-4">
          <h2 className="text-4xl font-bold text-center mb-4">Who We Help</h2>
          <h2 className="text-[#595a5c] text-lg font-medium text-center">
            Our services are perfect for those who want to outsource their image
            editing works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 lg:px-10 xl:mx-20 2xl:mx-32">
          {ourCustomers?.map((customers) => (
            <div className="p-6 hover:bg-sky-200 duration-500 ease-in-out rounded-xl">
              <h2 className="text-2xl font-semibold text-center md:text-left mb-2">
                {customers?.title}
              </h2>
              <h2 className="text-[#595a5c] font-medium mb-2">
                {customers?.details}
              </h2>
              <h2 className="text-sky-600 font-semibold hover:cursor-pointer mb-4">
                Learn More...
              </h2>
              <img src={customers?.img} className="w-full" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeHelp;
