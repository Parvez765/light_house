import React from 'react';

const WorkTogether = () => {
    return (
        <div className='container mx-auto p-10'>
            <h1 className='font-bold text-[40px] lg:text-[55px] leading-[40px] lg:leading-[70px] text-center'>Let's Work Together</h1>
            <p  className='text-center lg:w-[850px] block mx-auto text-[18px] mt-[12px]'>Following are the positions that we’re actively seeking applicants for. If you fit the description below email us your resume, and we will get back to you at our earliest convenience.</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-[60px] gap-[20px]'>
                <div className='bg-blue-50 p-6 rounded-lg'>
                    <h2 className='text-[30px] font-bold'>Jr. FrontEnd Developer</h2>
                    <p className='mt-[10px]'>No previous experience and educational certificates are needed to apply for joining as a developer. All you need is to have a motivated mindset for lifelong learning.</p>
                    <div className='mt-[10px]'>
                    <button className='bg-blue-600 hover:bg-blue-800 p-[14px] text-white rounded-lg'>Apply Now</button>
                    </div>
                </div>
                <div className='bg-blue-50 p-6 rounded-lg'>
                    <h2 className='text-[30px] font-bold'>Sr. MERN Developer</h2>
                    <p className='mt-[10px]'>If you have 1-3 years of working experience using React, this position is for you. Also, you must have a motivated mindset for advanced and trending technology learning.</p>
                    <div className='mt-[10px]'>
                    <button className='bg-blue-600 hover:bg-blue-800 p-[14px] text-white rounded-lg'>Apply Now</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-[30px] gap-[20px]'>
                <div className='bg-blue-50 p-6 rounded-lg'>
                    <h2 className='text-[30px] font-bold'>Flutter Developer</h2>
                    <p className='mt-[10px]'>If you have 3-5 years of working experience using Flutter, this position is for you. Also, you must have a motivated mindset for helping juniors to learn advanced and trending technology learning.</p>
                    <div className='mt-[10px]'>
                    <button className='bg-blue-600 hover:bg-blue-800 p-[14px] text-white rounded-lg'>Apply Now</button>
                    </div>
                </div>
                <div className='bg-blue-50 p-6 rounded-lg'>
                    <h2 className='text-[30px] font-bold'>Communication Manager</h2>
                    <p className='mt-[10px]'>If you have 3-5 years of high-end retouching experience using Google Suits, this position is for you. Also, you must have a motivated mindset for helping juniors to learn advanced and trending technology learning.</p>
                    <div className='mt-[10px]'>
                    <button className='bg-blue-600 hover:bg-blue-800 p-[14px] text-white rounded-lg'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkTogether;