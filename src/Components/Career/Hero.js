import React from 'react';

const Hero = () => {
    return (
        <div className='bg-blue-50'>
            <div className='container mx-auto p-10'>
                <h1 className='text-center font-bold text-[40px] lg:text-[55px] leading-[40px] lg:leading-[70px]'>Career At Light House</h1>
                <p className='text-center lg:w-[850px] block mx-auto mt-[12px] text-[18px]'>Are you a passionate, hardworking, highly motivated individual who loves to go the extra mile to get a job done? You are at the right place. Join the global team of Light House and go beyond, like a rocket.</p>
                <div className='flex justify-center items-center mt-[12px]'>
                    <button className='bg-blue-600 hover:bg-blue-800 p-[20px] text-white rounded-lg'>View Open Positions</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;