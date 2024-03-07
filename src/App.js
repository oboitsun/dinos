import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";
import AboutUs from "./components/AboutUs";
import ComingSoonPopUp from "./components/ComingSoonPopUp";
import ContactUs from "./components/ContactUs";
import DiscordPopup from "./components/DiscordPopup";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import LoadingScreen from "./components/LoadingScreen";
import ModalMenu from "./components/ModalMenu";
import NFTUtils from "./components/NFTUtils";
import Percs from "./components/Percs";
import Roadmap3 from "./components/Roadmap3";
import SliderDinos from "./components/SliderDinos";
import "./styles/common.scss";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showDiscord, setDiscord] = useState({ show: false, what: "discord" });
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  //scrolling listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Luckiest Guy:300,400,500,700", "sans-serif"], // Add the desired Google Font families here
      },
      active: () => {
        setIsLoading(false);
      },
    });
  }, []);
  const props_through = {
    showPopup,
    showDiscord,
    setDiscord,
    setShowPopup,
    setUserAddress,
    userAddress,
  };

  return (
    <div className="bg-turf min-h-screen w-full">
      <Analytics />
      <AnimatePresence exitBeforeEnter>
        {!isLoading ? (
          <motion.div
            initial={{ filter: "blur(40px)" }}
            animate={{ filter: "blur(0px)" }}
            key={0}
            className=" relative overflow-hidden app bg-turf">
            <div id="top"></div>
            <Header
              {...props_through}
              setShowMenu={setShowMenu}
              showMenu={showMenu}
              scrolled={scrolled}
            />
            <HeroSection {...props_through} />
            <div className="about-section relative bg-lightTurf py-10">
              <img
                className="w-full h-auto absolute bottom-0 transform translate-y-1/2 left-0 z-10 pointer-events-none"
                src="/imgs/border.svg"
                alt="border"
              />
              <img
                className="w-full h-full object-cover absolute top-0 left-0 z-10 pointer-events-none"
                src="/imgs/turf.svg"
                alt="turf"
              />
              <div className="top-gradient absolute w-full h-10 top-0 left-0 z-10"></div>
              <div className="bottom-gradient absolute w-full h-20 bottom-0 left-0 z-10"></div>
              <SliderDinos />
              <NFTUtils />

              <AboutUs {...props_through} />
            </div>

            <Percs />

            {/* <Team /> */}

            <Roadmap3 />

            {/* <Roadmap2 /> */}
            {/* <Roadmap /> */}

            <div className=" lg:py-20 bg-faq relative">
              <img
                style={{ zIndex: 1 }}
                className="w-full h-full object-cover absolute top-0 left-0 z-auto"
                src="/imgs/turf.svg"
                alt="turf"
              />{" "}
              <img
                style={{ zIndex: 3 }}
                className="w-full h-auto absolute bottom-0 transform translate-y-1/2 left-0 "
                src="/imgs/border4.svg"
                alt="border"
              />
              {/* <div className="bg-gradient-to-b from-faq to-transparent absolute w-full h-10 top-0 left-0 "></div>
      <div className="bg-gradient-to-t from-faq to-transparent absolute w-full h-10 bottom-0 left-0 z-10"></div> */}
              <div
                style={{ zIndex: 2 }}
                className="my-container grid lg:grid-cols-2 gap-10  relative z-auto ">
                <FAQ />
                <ContactUs />
              </div>
            </div>

            <Footer {...props_through} />
            <DiscordPopup showDiscord={showDiscord} setDiscord={setDiscord} />
            <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
            <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          </motion.div>
        ) : (
          <LoadingScreen />
        )}{" "}
      </AnimatePresence>
    </div>
  );
}
