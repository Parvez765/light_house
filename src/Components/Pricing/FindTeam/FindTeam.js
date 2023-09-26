import React from 'react';

const FindTeam = () => {
    return (
        <div className='container mx-auto p-3 mt-[40px] lg:p-0  mb-[40px]'>
        <div>
         <div className={`grid lg:grid-cols-2 gap-[70px] px-10 py-10 items-center`}>
                 <div className=''>
                     <h1 className='text-[40px] text-center lg:text-left lg:text-[60px] font-bold leading-[55px] lg:leading-[70px]'>Let's Do The Best Deal With Best Team</h1>
                     <p className='font-medium  text-center lg:text-left text-[22px] mt-[12px]'>Doing it over and over again for every new task? Tiring! Sit back and relax with Studio Metrodesk. We’ve got you.</p>
                     <div className='flex justify-center lg:justify-start'>
                         <button className={` text-white`}>Hire Team</button>
                     </div>
                 </div>
                 <div className='flex justify-end'>
                     <img src="https://i.ibb.co/KWq0hsC/deal.jpgg" alt="Light House Best Team" className='rounded-lg w-full'/>
                 </div>
             </div>
        </div>
     </div>
    )
};

export default FindTeam;