import React from "react";
import PlansAndPricing from "../../Components/HowItWorks/PlansAndPricing/PlansAndPricing";
import SomeOurWork from "../../Components/HowItWorks/SomeOurWork/SomeOurWork";
import AllTitle from "../../Hooks/AllTitle/AllTitle";


const HowItWorks = () => {
  AllTitle("How It Works");
  return (
    <div>
      <PlansAndPricing />
      <SomeOurWork />
    </div>
  );
};

export default HowItWorks;
