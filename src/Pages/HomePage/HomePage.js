import React from "react";
import Hero from "../../Components/Home/Hero/Hero";
import TrustedCompanies from "../../Components/Home/TrustedCompanies/TrustedCompanies";
import WhoWeHelp from "../../Components/Home/WhoWeHelp/WhoWeHelp";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <WhoWeHelp />
    </div>
  );
};

export default HomePage;
