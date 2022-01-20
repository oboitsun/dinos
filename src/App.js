import React, { useState, useEffect } from 'react';
import './styles/common.scss';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import Footer from './components/Footer';
import ModalMenu from './components/ModalMenu';
import ComingSoonPopUp from './components/ComingSoonPopUp';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import NFTUtils from './components/NFTUtils';
import Roadmap2 from './components/Roadmap2';
import Roadmap3 from './components/Roadmap3';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };
  //scrolling listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  //connect wallet functions
  const [userAddress, setUserAddress] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const props_through = {
    showPopup: showPopup,
    setShowPopup: setShowPopup,
    setUserAddress: setUserAddress,
    userAddress: userAddress,
  };
  return (
    <div className=" relative overflow-hidden app">
      <div id="top"></div>

      <Header
        {...props_through}
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        scrolled={scrolled}
      />

      <HeroSection {...props_through} />
      <div className="about-section relative bg-lightTurf">
        <img
          className="w-full h-auto absolute bottom-0 transform translate-y-1/2 left-0 z-10"
          src="/imgs/border.svg"
          alt="border"
        />
        <img
          className="w-full h-full object-cover absolute top-0 left-0 z-10"
          src="/imgs/turf.svg"
          alt="turf"
        />
        <div className="bg-gradient-to-b from-lightTurf to-transparent absolute w-full h-10 top-0 left-0 z-10"></div>
        <div className="bg-gradient-to-t from-lightTurf to-transparent absolute w-full h-10 bottom-0 left-0 z-10"></div>
        <NFTUtils />
        <AboutUs />
      </div>

      <Team />
      <Roadmap3 />
      {/* <Roadmap2 /> */}
      {/* <Roadmap /> */}
      <FAQ />
      <ContactUs />
      <Footer {...props_through} />

      <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
