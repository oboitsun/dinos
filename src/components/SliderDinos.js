import React, { useState, useEffect } from "react";

import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "../styles/slider-dinos.scss";

SwiperCore.use([Navigation, Autoplay]);

export default function SliderDinos({ setLegend, idx }) {
  const slides = [
    "/imgs/baby_dinos/1.png",
    "/imgs/baby_dinos/2.png",
    "/imgs/baby_dinos/3.png",
    "/imgs/baby_dinos/4.png",
    "/imgs/baby_dinos/5.png",
  ];
  const [slidesPerView, setSlidesPerView] = useState(5);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      let perView = 5;
      if (width <= 480) {
        perView = 1;
      }
      if (width > 480) {
        perView = 5;
      }
      console.log(perView);
      setSlidesPerView(perView);
    });
  }, []);
  return (
    <div className=" SliderDinos my-container relative ">
      <div className="slider-button slider-prev">
        <img src="/imgs/arrow-prev.svg" alt="prev slide" />
      </div>
      <div className="slider-button slider-next">
        <img src="/imgs/arrow-prev.svg" alt="next slide" />
      </div>
      <div className=" relative z-10 h-full flex items-end  w-4/5 mx-auto mb-10">
        <Swiper
          autoplay={{ delay: 2500 }}
          className="swiper"
          loop={true}
          centeredSlides
          spaceBetween={0}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: idx === 0 ? "#swpr-next" : "#swpr-next1",
            prevEl: idx === 0 ? "#swpr-prev" : "#swpr-prev1",
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide className="slide-wrapper" key={i}>
              <img className="slide-img  " src={slide} alt="baby dino" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
