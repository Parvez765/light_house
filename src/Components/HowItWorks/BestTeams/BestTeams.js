import React from 'react';
import styles from "./BestTeam.module.css"
import teams from "../../../data/teams"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay } from 'swiper/modules';


const BestTeams = () => {

    return (
        <div>
            <h1 className='text-[30px] leading-[30px] lg:text-[60px] mt-[60px] text-center font-bold text-blue-900'>Let's Pair With Best Teams</h1>
            <p className='mt-[30px]  px-5 lg:px-0 text-center font-medium text-[22px] text-gray-600'>Find The Best Team From Us Who Will Be Ready To Get The Job Done</p>

            <div className='mt-[40px] mb-[40px]'>
            <Swiper
                   slidesPerView={4}
                   spaceBetween={10}
                   breakpoints={{
                     360: {
                       slidesPerView: 1,
                       spaceBetween: 20,
                     },
                     1024: {
                       slidesPerView: 2,
                       spaceBetween: 10,
                     },
                     1025:{
                        slidesPerView: 4,
                       spaceBetween: 10,
                     }
                   }}
                   centeredSlides={true}
                   autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                     pauseOnMouseEnter: true,
                   }}
                   modules={[Autoplay]}
                   className="mySwiper"
                >
               {
                    teams?.map(t => <div>
                        <SwiperSlide>
                          <div className={`lg:w-[450px] h-full  border block mx-auto ${styles.cardContainer}`}>
                            <img src={t.img} alt="Light House Team" className='w-full h-[450px] object-cover'/>
                               <div className='px-10 py-6'>
                              <div className='flex justify-between items-center'>
                             <div className='flex gap-[8px]'>
                             <FaStar className='text-yellow-400 text-[20px]'/>
                              <FaStar className='text-yellow-400 text-[20px]'/>
                              <FaStar className='text-yellow-400 text-[20px]'/>
                              <FaStar className='text-yellow-400 text-[20px]'/>
                              <FaStarHalfAlt className='text-yellow-400 text-[20px]'/>
                             </div>
                              <div>
                                <p className='text-[20px] font-medium'>4.5/5.00</p>
                              </div>
                              </div>
                               <h2 className='text-[30px] font-bold'>{t.name}</h2>
                                <p className='text-[26px] lg:text-[20px] font-medium text-blue-900'>{t.designation}</p>
                                <p className='mt-[15px] text-[22px] lg:text-[18px]'>{t.description}</p>
                               </div>
                          </div>
                        </SwiperSlide>
                    
                    </div>)
                }
            </Swiper>
               </div>

        </div>
    );
};

export default BestTeams;