import React from 'react';
import {FaHands, FaCheck, FaHandshake} from "react-icons/fa"

const Works = () => {
    return (
        <div className='container mx-auto p-10'>
            <h1 className='font-bold text-[40px] lg:text-[55px] leading-[40px] lg:leading-[70px] text-center'>Works At Light House</h1>
            <p className='text-center lg:w-[850px] block mx-auto text-[18px] mt-[12px]'>We’re a globally acclaimed, growing platform for highly skilled professionals, and being part of Studio Metrodesk means putting customers first. Join our ever-evolving team.
            We are well-recognized in the industry for ou</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-[48px] items-center justify-items-center gap-[20px]'>
                <div className='bg-blue-50 hover:bg-blue-100 cursor-pointer p-6 w-full rounded-lg'>
                    <FaHands className='text-[60px]'/>
                    <h2 className='text-[35px] font-bold'>Core Values</h2>
                    <div className=''>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Persistent Quality</div>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Passionate & Result-driven</div>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>High Achieving Enterprise</div>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Customer Centricity</div>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Friendly Collaboration</div>
                    </div>
                </div>
                <div className='bg-blue-50 hover:bg-blue-100 cursor-pointer p-6 w-full rounded-lg'>
                <FaHandshake className='text-[60px]'/>
                    <h2 className='text-[35px] font-bold'>Benefits</h2>
                    <div className=''>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Flexible PTO </div>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Diversified & Friendly Workforce</div>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Home to New Ideas</div>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Cutting Edge Technology & Resources </div>
                      <div className='flex items-center gap-[10px] mt-[12px] text-[20px]'><FaCheck/>Maternal & Paternal Leave</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;