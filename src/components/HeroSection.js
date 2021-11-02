import React from "react";
import "../styles/hero-section.scss";
import WelcomeTo from "./WelcomeTo";
import { motion } from "framer-motion";
import HeroSectionDinos from "./HeroSectionDinos";

export default function HeroSection({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  return (
    <motion.div id="hero-section" className="relative">
      <img
        className=" w-full h-full  object-cover absolute bottom-0 right-0  2xl:h-auto"
        src="/imgs/bg.png"
        alt="dinos-splash"
      />
      <div className="gradient"></div>
      <div className="my-container relative splash">
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
