import React, { useEffect, useState } from "react";
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
    "/imgs/hero-bg3.jpeg",
    "/imgs/hero-bg4.jpeg",

    "/imgs/hero-bg2.jpeg",
    "/imgs/hero-bg1.jpeg",
  ];
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
        <img
          className="w-full h-full top-1/2  transform -translate-y-1/2 absolute left-0  object-cover  "
          src={currentBG ? currentBG : "/imgs/bg.jpg"}
          alt="dinos-splash"
        />
      </div>
      <div className="gradient z-10"></div>
      <div className="my-container relative splash z-10">
        <WelcomeTo
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
        />
        {/* <HeroSectionDinos /> */}
      </div>
    </motion.div>
  );
}
