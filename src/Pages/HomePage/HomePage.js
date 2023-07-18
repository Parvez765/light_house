import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import TrustedCompanies from "../../Components/Home/TrustedCompanies/TrustedCompanies";
import WhoWeHelp from "../../Components/Home/WhoWeHelp/WhoWeHelp";
import PhotoEditingServices from "../../Components/Home/PhotoEditingServices/PhotoEditingServices";
import DeliveryService from "../../Components/Home/DeliveryService/DeliveryService";
import ForWhomeWeWork from "../../Components/Home/ForWhomeWeWork/ForWhomeWeWork";
import Testimonials from "../../Components/Home/Testimonials/Testimonials";
import LetsGetStarted from "../../Components/Home/LetsGetStarted/LetsGetStarted";

const HomePage = () => {
  return (
    <div>
      {/* <Hero />
      <DeliveryService />
      <TrustedCompanies />
      <ForWhomeWeWork /> */}
      <LetsGetStarted />
      {/* <PhotoEditingServices />
      <WhoWeHelp />
      <Testimonials /> */}
    </div>
  );
};

export default HomePage;
