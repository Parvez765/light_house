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

const SomeOurWork = () => {
  const someWorks = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
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
        pauseOnMouseEnter={true}
        speed={2000}
        modules={[Autoplay]}
        className={`mySwiper ${styles.mainDiv}`}
      >
        {someWorks?.map((someWork, i) => {
          return (
            <SwiperSlide
              key={i}
              className="rounded-xl shadow-xl drop-shadow-2xl"
            >
              <div>
                <img
                  src={someWork?.img}
                  className="h-[400px] w-full rounded-xl object-cover object-center"
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
