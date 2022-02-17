import React, { useEffect, useState } from 'react';
import '../styles/hero-section.scss';
import WelcomeTo from './WelcomeTo';
import { motion } from 'framer-motion';
import HeroSectionDinos from './HeroSectionDinos';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Autoplay]);
export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
  setDiscord,
}) {
  const slides = [
    '/imgs/hero-bg3.jpeg',
    '/imgs/hero-bg4.jpeg',

    '/imgs/hero-bg2.jpeg',
    '/imgs/hero-bg1.jpeg',
  ];
  // <img
  //         className="w-full h-full top-1/2  transform -translate-y-1/2 absolute left-0  object-cover  "
  //         src={currentBG ? currentBG : "/imgs/bg.jpg"}
  //         alt="dinos-splash"
  //       />
  const [currentBG, setCurrentBG] = useState(null);
  useEffect(() => {
    setCurrentBG(slides[Math.floor(Math.random() * slides.length)]);
  }, []);
  return (
    <motion.div id="hero-section" className="relative overflow-hidden">
      <div
        // style={{ maxWidth: 1920, margin: "0 auto" }}
        className="absolute w-full h-full overflow-hidden top-0 left-1/2 transform -translate-x-1/2 "
      >
        <div
          id="prev-slide"
          className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer hover:scale-110 transition-all"
        >
          <img src="/imgs/arrow-prev.svg" alt="previous slide" />
        </div>
        <div
          id="next-slide"
          className="absolute top-1/2 transform -translate-y-1/2 rotate-180 right-4 z-10 cursor-pointer hover:scale-110 transition-all"
        >
          <img src="/imgs/arrow-prev.svg" alt="previous slide" />
        </div>
        <Swiper
          navigation={{ nextEl: '#next-slide', prevEl: '#prev-slide' }}
          loop
          autoplay={{ delay: 3500 }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide>
              <img
                className="w-full h-full top-1/2  transform -translate-y-1/2 absolute left-0  object-cover  "
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
          setDiscord={setDiscord}
        />
        {/* <HeroSectionDinos /> */}
      </div>
    </motion.div>
  );
}
