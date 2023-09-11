import React from "react";
import Hero from "../../Components/Home/Hero/Hero"
import DeliveryService from "../../Components/Home/DeliveryService/DeliveryService"
import TrustedCompanies from "../../Components/Home/TrustedCompanies/TrustedCompanies"
import ForWhomeWeWork from "../../Components/Home/ForWhomeWeWork/ForWhomeWeWork"
import LetsGetStarted from "../../Components/Home/LetsGetStarted/LetsGetStarted"
import PhotoEditingServices from "../../Components/Home/PhotoEditingServices/PhotoEditingServices"
import Pricing from "../../Components/Home/Pricing/Pricing"
import WeServe from "../../Components/Home/WeServe/WeServe"
import WhoWeHelp from "../../Components/Home/WhoWeHelp/WhoWeHelp"
import Testimonials from "../../Components/Home/Testimonials/Testimonials"
import FAQ from "../../Components/Home/FAQ/FAQ"
import SpeakWith  from "../../Components/Home/SpeakWith/SpeakWith"
import AllTitle from "../../Hooks/AllTitle/AllTitle";

const HomePage = () => {
  AllTitle("Home");
  return (
    <div>
      <Hero/>
      <DeliveryService/>
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
