import React from "react";
import "./Hero.css";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

const Hero = () => {
  const FIRST_IMAGE = {
    imageUrl: "https://i.ibb.co/VmWj82M/hero-Image-Before.png",
  };
  const SECOND_IMAGE = {
    imageUrl: "https://i.ibb.co/rfjBXtf/hero-Image-After.png",
  };

  return (
    <section className="container mx-auto">
      {/* Whole Container */}
      <div className="lg:mt-[50px] mb-[80px] p-[20px] grid lg:grid-cols-2 gap-[20px] items-center justify-center">
        <div>
          <h1 className="text-[60px] md:text-[80px] font-bold leading-[60px] lg:leading-[80px]">
            We Make <span className="text-sky-600">Retouching</span> Easy
          </h1>
          <p className="text-[18px] mt-[16px]">
            Photo Editing Solutions for Fashion, Apparel, E-commerce Businesses
            and Pro-Photographers. Our 100+ pro photo editors work 24/7 to
            provide you with the most personalized solutions in the market
          </p>
          <button className="tryUsFreeBtn">Try Us Free</button>
          <p className="mt-[8px] font-medium text-[#667085] text-[14px]">
            No Credit Card Required
          </p>
        </div>
        <div>
          <ReactBeforeSliderComponent
            firstImage={FIRST_IMAGE}
            secondImage={SECOND_IMAGE}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
