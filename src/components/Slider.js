import React from "react";

import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);
export default function SplashCarousel({ setLegend, idx, slides }) {
  return (
    <div className="w-full relative z-10 h-full flex items-end ">
      {idx === 0 ? (
        <img className="absolute  bottom-0" src="/imgs/slider1-bg.png" alt="bg" />
      ) : (
        <img className="slider2-bg" src="/imgs/slider2-bg.png" alt="bg" />
      )}

      <Swiper
        onSlideChangeTransitionStart={() => {
          setLegend((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
        }}
        autoplay={{ delay: 2500 }}
        className="swiper"
        loop={true}
        centeredSlides
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: idx === 0 ? "#swpr-next" : "#swpr-next1",
          prevEl: idx === 0 ? "#swpr-prev" : "#swpr-prev1",
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide className="slide-wrapper" key={i}>
            {idx === 0 ? (
              <img className="slide-img  " src={slide} alt="splash" />
            ) : (
              <img className="slide-img egg-img" src={slide} alt="splash" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
