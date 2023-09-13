import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import styles from "./SomeOurWork.module.css";

import img1 from "../../../Assets/SomeOurWork/img1.webp";
import img2 from "../../../Assets/SomeOurWork/img2.webp";
import img3 from "../../../Assets/SomeOurWork/img3.webp";
import img4 from "../../../Assets/SomeOurWork/img4.webp";
import img5 from "../../../Assets/SomeOurWork/img5.webp";
import img6 from "../../../Assets/SomeOurWork/img6.webp";
import img7 from "../../../Assets/SomeOurWork/img7.webp";
import img8 from "../../../Assets/SomeOurWork/img8.webp";

import img9 from "../../../Assets/SomeOurWork/img9.webp";
import img10 from "../../../Assets/SomeOurWork/img10.webp";
import img11 from "../../../Assets/SomeOurWork/img11.webp";
import img12 from "../../../Assets/SomeOurWork/img12.webp";
import img13 from "../../../Assets/SomeOurWork/img13.webp";
import img14 from "../../../Assets/SomeOurWork/img14.webp";
import img15 from "../../../Assets/SomeOurWork/img15.webp";
import img16 from "../../../Assets/SomeOurWork/img16.webp";

const SomeOurWork = () => {
  const slider1 = [
    { slide1: img1 },
    { slide1: img2 },
    { slide1: img3 },
    { slide1: img4 },
    { slide1: img5 },
    { slide1: img6 },
    { slide1: img7 },
    { slide1: img8 },
  ];

  const slider2 = [
    { slide2: img9 },
    { slide2: img10 },
    { slide2: img11 },
    { slide2: img12 },
    { slide2: img13 },
    { slide2: img14 },
    { slide2: img15 },
    { slide2: img16 },
  ];

  return (
    <div className="my-28">
      <div className="mx-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-sky-600">Samples</span> of some of our work
        </h2>

        <h2 className="text-[#595a5c] text-lg font-semibold text-center mb-16">
          The following showcases some of our most recent projects, which we
          completed for some of the biggest brands, businesses, photographers,
          and editorial agencies in the globe.
        </h2>
      </div>

      {/* 1st slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay]}
        className={`mySwiper ${styles.mainDiv}`}
      >
        {slider1?.map((someWork, i) => {
          return (
            <SwiperSlide
              key={i}
              className="rounded-t-xl shadow-xl drop-shadow-2xl"
            >
              <div>
                <img
                  src={someWork?.slide1}
                  className="h-[360px] w-full rounded-t-xl object-cover object-center"
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* 2nd slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1536: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay]}
        className={`mySwiper ${styles.mainDiv}`}
      >
        {slider2?.map((someWork, i) => {
          return (
            <SwiperSlide
              key={i}
              className="rounded-b-xl shadow-xl drop-shadow-2xl"
            >
              <div>
                <img
                  src={someWork?.slide2}
                  className="h-[360px] w-full rounded-b-xl object-cover object-center"
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SomeOurWork;
