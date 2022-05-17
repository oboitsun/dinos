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
    "/imgs/baby_dinos/6.png",
    "/imgs/baby_dinos/7.png",
    "/imgs/baby_dinos/8.png",
    "/imgs/baby_dinos/9.png",
    "/imgs/baby_dinos/10.png",
    "/imgs/baby_dinos/11.png",
  ];
  const [slidesPerView, setSlidesPerView] = useState(5);
  useEffect(() => {
    const width = window.innerWidth;
    let perView = 5;
    if (width <= 480) {
      perView = 1;
    }
    if (width > 480) {
      perView = 5;
    }
    console.log(perView);

    window.addEventListener("resize", () => {
      if (width <= 480) {
        perView = 1;
      }
      if (width > 480) {
        perView = 5;
      }
      console.log(perView);
    });
    setSlidesPerView(perView);
  }, []);
  return (
    <div className=" SliderDinos my-container relative ">
      <div id="dinos-prev" className="slider-button slider-prev">
        <img src="/imgs/arrow-prev.svg" alt="prev slide" />
      </div>
      <div id="dinos-next" className="slider-button slider-next">
        <img src="/imgs/arrow-prev.svg" alt="next slide" />
      </div>
      <div className=" relative z-10 h-full flex items-end  w-4/5 mx-auto mb-10">
        <Swiper
          lazy
          autoplay={{ delay: 2500 }}
          className="swiper"
          loop={true}
          centeredSlides
          spaceBetween={0}
          slidesPerView={slidesPerView}
          navigation={{
            nextEl: "#dinos-next",
            prevEl: "#dinos-prev",
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide className="slide-wrapper" key={i}>
              <div className="w-full relative">
                <img className="w-full h-full object-cover  " src={slide} alt="baby dino" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
