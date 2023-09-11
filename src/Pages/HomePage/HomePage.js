import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import TrustedCompanies from "../../Components/Home/TrustedCompanies/TrustedCompanies";
import WhoWeHelp from "../../Components/Home/WhoWeHelp/WhoWeHelp";
import PhotoEditingServices from "../../Components/Home/PhotoEditingServices/PhotoEditingServices";
import DeliveryService from "../../Components/Home/DeliveryService/DeliveryService";
import ForWhomeWeWork from "../../Components/Home/ForWhomeWeWork/ForWhomeWeWork";
import Testimonials from "../../Components/Home/Testimonials/Testimonials";
import WeServe from "../../Components/WeServe/WeServe";
import SpeakWith from "../../Components/SpeakWith/SpeakWith";
import FAQ from "../../Components/FAQ/FAQ";
import Pricing from "../../Components/Pricing/Pricing";
import LetsGetStarted from "../../Components/Home/LetsGetStarted/LetsGetStarted";
import AllTitle from "../../Hooks/AllTitle/AllTitle";

const HomePage = () => {
  AllTitle("Home");
  return (
    <div>
      <Hero />
      <DeliveryService />
      <TrustedCompanies />
      <ForWhomeWeWork />
      <LetsGetStarted />
      <PhotoEditingServices />
      <Pricing />
      <WeServe />
      <WhoWeHelp />
      <Testimonials />
      <FAQ />
      <SpeakWith />
    </div>
  );
};

export default HomePage;
