import React from 'react';
import "./ForWhomeWeWork.css"

const ForWhomeWeWork = () => {
    return (
        <div className='workingContainer mt-[50px] mb-[50px]'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-start gap-[40px]'>
                    <div>
                        <img src="https://i.ibb.co/C6z0Z7k/image2.gif" alt="Studio MetroDesk Whom We Work" />
                    </div>
                    <div>
                        <h2 className="text-[50px] font-bold mb-[8px]">We work alongside you, <br/> for you! </h2>
                       <div className='mt-[16px] lg:w-[650px]'>
                        <p className='text-[18px]'><span className='font-bold'>We designed our services</span> in a manner that you can get the best photo editing solutions in the industry within your budget, time and preference. Meet Studio Metrodesk, your online post-production partner!</p> <br></br>
                            <p className='text-[18px]'><span className='font-bold'>We are considered a back office </span>to product photographers, e-commerce businesses, Amazon sellers and global brands. Why spend weeks on editing, formatting images when you can simply get professionally done photos within hours?</p><br></br>
                            <p className='text-[18px]'><span className='font-bold'>Starting at $1 per image</span> Let us look after the edits, so you can get back to the work that needs you. </p>
                       </div>
                       <div className='mt-[10px]'>
                        <button className="tryUsFreeBtn">Get Started Now</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForWhomeWeWork;