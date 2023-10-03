import React from 'react';
import UnlockingTheMagic from '../../Components/HowItWorks/UnlockingTheMagic/UnlockingTheMagic';
import BestTeams from '../../Components/HowItWorks/BestTeams/BestTeams';
import HireTeam from '../../Components/HowItWorks/HireTeam/HireTeam';
import WeServe from '../../Components/Home/WeServe/WeServe';
import FAQ from '../../Components/Home/FAQ/FAQ';
import SpeakWith from '../../Components/Home/SpeakWith/SpeakWith';
import MissionAndVision from '../../Components/HowItWorks/MissionAndVision/MissionAndVision';
import PlansAndPricing from "../../Components/HowItWorks/PlansAndPricing/PlansAndPricing";
import SomeOurWork from "../../Components/HowItWorks/SomeOurWork/SomeOurWork";
import AllTitle from "../../Hooks/AllTitle/AllTitle";




const HowItWorks = () => {
  
    AllTitle("How It Works");
  return (
    <div>
      <PlansAndPricing />
      <SomeOurWork />
           <BestTeams/>
           <HireTeam/>
           <WeServe/>
           <FAQ/>
           <SpeakWith/>
           <MissionAndVision/>
    </div>
  );
};

export default HowItWorks;
