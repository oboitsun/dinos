import React from "react";

import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);
export default function Slider2({ setLegend, idx, slides }) {
  return (
    <div className="w-full relative z-10 h-full flex items-end ">
      <img className="absolute  bottom-0" src="/imgs/slider1-bg.png" alt="bg" />

      <Swiper
        onSlideChangeTransitionStart={() => {
          setLegend((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
        }}
        initialSlide={1}
        autoplay={{ delay: 2500 }}
        className="swiper"
        loop={true}
        centeredSlides
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: "#swpr-next2",
          prevEl: "#swpr-prev2",
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide className="slide-wrapper" key={i}>
            {slide.type === "dino" ? (
              <img className="slide-img  " src={slide.imgSrc} alt="splash" />
            ) : (
              <img className="slide-img egg-img" src={slide.imgSrc} alt="splash" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
