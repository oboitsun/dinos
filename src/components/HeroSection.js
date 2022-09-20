import React, { useEffect, useState } from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/swiper.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);
export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
  setDiscord,
}) {
  const slides = [
    "/imgs/backs/bg1.jpg",
    "/imgs/backs/bg2.jpg",
    "/imgs/backs/bg3.jpg",
    "/imgs/backs/bg4.jpg",
    // "/imgs/backs/bg5.jpg",
    // '/imgs/backs/bg6.jpg',
    // "/imgs/backs/bg7.jpg",
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
        className="absolute w-full h-full overflow-hidden bottom-0 left-1/2 transform -translate-x-1/2 z-10"
      >
        <img
          className="absolute w-auto h-1/2 z-10 bottom-5 left-0 pointer-events-none hidden lg:block"
          src="/imgs/eggs-hero-left.png"
          alt="eggs"
        />
        <img
          className="absolute w-auto h-1/2 z-10 bottom-5 right-0 pointer-events-none hidden lg:block"
          src="/imgs/eggs-hero-right.png"
          alt="eggs"
        />
        <div
          id="prev-slide"
          className="hidden lg:block absolute  top-2/3 lg:top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer hover:scale-110 transition-all"
        >
          <img src="/imgs/arrow-prev.svg" alt="previous slide" />
        </div>
        <div
          id="next-slide"
          className="hidden lg:block absolute top-2/3 lg:top-1/2 transform -translate-y-1/2 rotate-180 right-4 z-10 cursor-pointer hover:scale-110 transition-all"
        >
          <img src="/imgs/arrow-prev.svg" alt="previous slide" />
        </div>
        <Swiper
          navigation={{ nextEl: "#next-slide", prevEl: "#prev-slide" }}
          loop
          autoplay={{ delay: 3500 }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide>
              <LazyLoadImage
                width={"100%"}
                height={"100%"}
                wrapperClassName="w-full h-full bottom-0  transform  absolute left-1/2 -translate-x-1/2  object-cover  "
                src={slide}
                alt="dinos-splash"
                effect="blur"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="gradient z-20"></div>
      <div className="my-container relative splash  z-10 ">
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
