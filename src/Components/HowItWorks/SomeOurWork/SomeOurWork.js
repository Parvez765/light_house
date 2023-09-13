import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import img1 from "../../../Assets/SomeOurWork/img1.webp";
import img2 from "../../../Assets/SomeOurWork/img2.webp";
import img3 from "../../../Assets/SomeOurWork/img3.webp";
import img4 from "../../../Assets/SomeOurWork/img4.webp";
import img5 from "../../../Assets/SomeOurWork/img5.webp";
import img6 from "../../../Assets/SomeOurWork/img6.webp";
import img7 from "../../../Assets/SomeOurWork/img7.webp";

const SomeOurWork = () => {
  const someWorks = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
  ];

  return (
    <div className="mx-4 my-28">
      <div>
        <h2 className="text-5xl font-bold text-center mb-6">
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
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper mainDiv"
      >
        {someWorks?.map((someWork, i) => {
          return (
            <SwiperSlide key={i}>
              <div>
                <img src={someWork?.img} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SomeOurWork;
