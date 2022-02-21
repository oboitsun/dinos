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
// import Team from './components/Team';
// import Roadmap from './components/Roadmap';
import NFTUtils from './components/NFTUtils';
// import Roadmap2 from './components/Roadmap2';
import Roadmap3 from './components/Roadmap3';
import Percs from './components/Percs';
import DiscordPopup from './components/DiscordPopup';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showDiscord, setDiscord] = useState({ show: true, what: 'discord' });
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

  const props_through = {
    showPopup,
    showDiscord,
    setDiscord,
    setShowPopup,
    setUserAddress,
    userAddress,
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
        />{' '}
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
          className="my-container grid lg:grid-cols-2 gap-10  relative z-auto "
        >
          <FAQ />
          <ContactUs />
        </div>
      </div>
      <Footer {...props_through} />
      <DiscordPopup showDiscord={showDiscord} setDiscord={setDiscord} />
      <ComingSoonPopUp showPopup={showPopup} setShowPopup={setShowPopup} />
      <ModalMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
