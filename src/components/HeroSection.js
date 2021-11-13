import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import HeroSectionDinos from "./HeroSectionDinos";
import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);
export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  const slides = [
    "/imgs/slider1-bg3.jpg",
    "/imgs/bg.jpg",
    "/imgs/slider1-bg2.jpg",
    "/imgs/slider2-bg.png",
  ];
  return (
    <motion.div id="hero-section" className="relative overflow-hidden">
      <div className="absolute w-full h-full overflow-hidden">
        <Swiper
          tyle={{ height: "100%" }}
          initialSlide={1}
          autoplay={{ delay: 2500 }}
          className="swiper"
          loop={true}
          centeredSlides
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides.map((slide, i) => (
            <SwiperSlide s className="slide-wrapper" key={i}>
              <img
                className="w-full h-full bottom-0 absolute left-0  object-cover  2xl:h-auto"
                src={slide}
                alt="dinos-splash"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="gradient z-10"></div>
      <div className="my-container relative splash z-10">
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />
        <HeroSectionDinos />
      </div>
    </motion.div>
  );
}
