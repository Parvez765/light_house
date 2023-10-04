import React from 'react';
import "./SpeakWith.css"
import { FaEnvelopeOpenText } from "react-icons/fa"
import youngMan from "../../../Assets/callUs/young.png"

const SpeakWith = () => {
    return (
        <div className='contactContainer'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h1 className='font-bold text-[25px] lg:text-[35px]'>Speak With Our Customer Care</h1>
                    <p>Hi, I would love to answer your questions. Give me a call or send an email.</p>
                </div>
                <div className='informationContainer lg:w-[850px] block mx-auto mt-[30px] rounded-lg'>
                    <div className='flex items-center justify-center lg:justify-between'>
                        <div className='flex flex-col justify-between p-10 '>
                            <div>
                                <h1 className='font-bold text-[30px]'>Shariar Tanvir</h1>
                                <p className='mb-[15px] lg:mb-[0px]'>Vice President, Light House</p>
                            </div>
                            <div>
                                <p className='font-bold text-[20px] lg:text-[30px]'>+(973) 262 9181</p>
                                <div className='flex items-center gap-[10px]'><FaEnvelopeOpenText /><p>tanvir@lighthouse.com</p></div>
                            </div>
                        </div>
                        <div>
                            <img src={youngMan} alt="Light House Young Man" className='w-[350px] pt-6 hidden lg:block'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpeakWith;