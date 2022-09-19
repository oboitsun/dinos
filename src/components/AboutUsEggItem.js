import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function AboutUsEggItem({ inView2, i, item }) {
  const [opened, setOpened] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    window && window.innerWidth <= 1024 && setMobile(true);
  }, []);
  useEffect(() => {
    !inView2 && setIsShown(inView2);
  }, [inView2]);
  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <div
      onMouseEnter={() => {
        !mobile && setOpened(true);
      }}
      onMouseLeave={() => {
        !mobile && setOpened(false);
      }}
      onClick={toggleOpened}
      className={`relative border-white rounded-lg border-4 overflow-hidden shadow-lg pic-template `}
      key={i}
    >
      <img className="absolute top-0 left-0 w-full object-cover h-full" src={item.back} alt="bg" />
      <motion.img
        className={`absolute  z-10`}
        initial={{ x: i > 3 ? "200%" : "-200%" }}
        animate={
          opened
            ? {
                x: "-0%",
                y: "10%",
                transition: {
                  duration: 0.4,
                  delay: 0,
                },
              }
            : { x: i > 3 ? "200%" : "-200%" }
        }
        src={item.dino}
        alt="dino"
      />
      <motion.img
        initial={{ x: i > 3 ? "200%" : "-200%" }}
        onAnimationComplete={() => {
          inView2 && setIsShown(true);
        }}
        animate={
          inView2 && !opened
            ? {
                x: "-50%",
                transition: {
                  duration: 0.4,
                  delay: inView2 && !isShown ? i * 0.1 : 0,
                },
              }
            : { x: i > 3 ? "200%" : "-200%" }
        }
        className={`absolute  pic z-10`}
        src={item.egg}
        alt="egg"
      />
    </div>
  );
}
