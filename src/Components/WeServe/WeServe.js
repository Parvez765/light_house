import React from 'react';
import servicePhoto from "../../Assets/WeServe/photo.png"
import "./WeServe.css"


const WeServe = () => {

const cardData = [
    {
        id: 1,
        img : "https://i.ibb.co/cyMRrTp/alarm-clock-check.png",
        title : "100% On Time Delivery",
        details : "At Studio Metrodesk, we hate being late as much as you do."
    },
    {
        id: 2,
        img : "https://i.ibb.co/jrW6XGq/Clock-Icon.png",
        title : "1 Hour Turnaround Time",
        details : "Get your images back in as little as 1-hour, even if you have hundreds of shots to get through."
    },
    {
        id: 3,
        img : "https://i.ibb.co/mv5gyZ9/LikeIcon.png",
        title : "Great Delivery",
        details : "At Studio Metrodesk, we hate being late as much as you do."
    }
]
    return (
        <div className='container mx-auto'>
            <div className="mb-14">
                <div className="mb-24 mx-4">
                    <div className='grid justify-items-center items-center grid-cols-1 lg:grid-cols-2'>
                        <div>
                            <h1 className='text-[50px] font-bold leading-[50px]'>We Serve 4000+ Business and Photo Edits 10000+ Images Daily</h1>
                            <p className='mt-[12px] text-[20px]'>With our growing expert team, scaling to meet your photo processing needs is easy!With our growing expert team, scaling to meet your photo processing needs is easy</p>
                            {/* Card Container */}
                            
                                {/* Card Content */}
                                <div className='mt-[20px]'>
                                    {
                                        cardData?.map(cd => 
                                        <div className='flex items-center gap-[16px] cardContainer mb-[10px] p-5'>
                                            <div>
                                                <img src={cd.img} alt="Light House We Serve"/>
                                            </div>
                                            <div>
                                                <h3 className='font-bold text-[22px]'>{cd.title}</h3>
                                                <p className='text-[18px]'>{cd.details}</p>
                                            </div>
                                        </div>)
                                    }
                                </div>
                            
                        </div>
                        <div>
                            <img src={servicePhoto} alt="Light House We Serve"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeServe;