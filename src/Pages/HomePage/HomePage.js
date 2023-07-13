import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import TrustedCompanies from "../../Components/Home/TrustedCompanies/TrustedCompanies";
import WhoWeHelp from "../../Components/Home/WhoWeHelp/WhoWeHelp";
import PhotoEditingServices from "../../Components/Home/PhotoEditingServices/PhotoEditingServices";
import Testimonials from "../../Components/Home/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <PhotoEditingServices />
      <WhoWeHelp />
      <Testimonials />
    </div>
  );
};

export default HomePage;
