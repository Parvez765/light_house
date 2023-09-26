import React from 'react';
import PricingHero from '../../Components/Pricing/PricingHero/PricingHero';
import AllTitle from '../../Hooks/AllTitle/AllTitle';
import Pricing from '../../Components/Home/Pricing/Pricing';
import FAQ from '../../Components/Home/FAQ/FAQ';
import SpeakWith from '../../Components/Home/SpeakWith/SpeakWith';
import MissionAndVision from '../../Components/HowItWorks/MissionAndVision/MissionAndVision';
import HireTeam from '../../Components/HowItWorks/HireTeam/HireTeam';
import FindTeam from '../../Components/Pricing/FindTeam/FindTeam';
import PreviewWork from '../../Components/Pricing/PreviewWork/PreviewWork';

const PricingPage = () => {
    AllTitle("Pricing")
    return (
        <div>
            <PricingHero/>
            <Pricing/>
            <FindTeam/>
            {/* <PreviewWork/> */}
            <FAQ/>
            <SpeakWith/>
            <HireTeam/>
            <MissionAndVision/>
        </div>
    );
};

export default PricingPage;