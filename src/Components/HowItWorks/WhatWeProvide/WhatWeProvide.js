import React from 'react';
import styles from "./WhatWeProvide.module.css"
import provideData from '../../../data/whatweprovide';

const WhatWeProvide = () => {
    return (
       <div className='container mx-auto p-10 mt-[30px]'>
             <div className='grid grid-cols-1 lg:grid-cols-3  gap-[30px]'>
           {
           provideData?.map(pd => <div className={`${styles.serviceContainer} `}>
            <img src={pd.img} alt="Services We Provide" className='w-[150px] block mx-auto'/>
                <h1 className='text-left mt-[12px] text-[30px] font-bold'>{pd.name}</h1>
                <p className='mt-[12px] text-gray-500 text-[18px] font-normal'>{pd.details}</p>
           </div>)
           }
        </div>
       </div>
    );
};

export default WhatWeProvide;