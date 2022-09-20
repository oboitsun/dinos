import React, { useState } from "react";
import Albino from "./Albino";
import Commons from "./Commons";
import Elementals from "./Elementals";
import Legendaries from "./Legendaries.js";
import Tabs from "./Tabs";
import UltraRares from "./UltraRares";
import SupplyTable from "./SupplyTable";
import { dinos, dinosGen2 } from "./supplyTableData";
import { AnimatePresence, motion } from "framer-motion";
// import "swiper/swiper.scss";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation, Autoplay } from "swiper";
// SwiperCore.use([Navigation, Autoplay]);
const block = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => {
    return {
      opacity: 1,
      transition: { duration: 1, delay: custom * 0.1 },
    };
  },
};
const slide = {
  hidden: {
    x: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const items = [<Commons />, <Albino />, <Elementals />, <UltraRares />, <Legendaries />];
export default function Rarities() {
  const tabs = [
    { name: "Rarity", tab: "rarity" },
    { name: "Supply(gen1)", tab: "gen1" },
    { name: "Supply(gen2)", tab: "gen2" },
  ];
  const [currentTab, setCurrentTab] = useState("gen1");
  return (
    <div className="">
      <Tabs currTab={currentTab} setCurrTab={setCurrentTab} tabs={tabs} />
      <AnimatePresence exitBeforeEnter>
        {currentTab === "rarity" && (
          <motion.div
            variants={slide}
            key={0}
            initial="hidden"
            animate="visible"
            exit={"exit"}
            className="w-full grid gap-5 grid-cols-1"
          >
            {items.map((item, i) => (
              <motion.div custom={i} variants={block} initial="hidden" animate="visible">
                {item}
              </motion.div>
            ))}
          </motion.div>
        )}
        {currentTab === "gen1" && (
          <motion.div variants={slide} key={1} animate="visible" initial="hidden" exit={"exit"}>
            <SupplyTable tableData={dinos} />
          </motion.div>
        )}
        {currentTab === "gen2" && (
          <motion.div variants={slide} key={2} animate="visible" initial="hidden" exit={"exit"}>
            <SupplyTable tableData={dinosGen2} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
