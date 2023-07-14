import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import TrustedCompanies from "../../Components/Home/TrustedCompanies/TrustedCompanies";
import WhoWeHelp from "../../Components/Home/WhoWeHelp/WhoWeHelp";
import PhotoEditingServices from "../../Components/Home/PhotoEditingServices/PhotoEditingServices";
import DeliveryService from "../../Components/Home/DeliveryService/DeliveryService";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <DeliveryService/>
      <TrustedCompanies />
      <PhotoEditingServices />
      <WhoWeHelp />
    </div>
  );
};

export default HomePage;
