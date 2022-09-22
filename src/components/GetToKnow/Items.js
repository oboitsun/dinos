import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tabs from "./Tabs";
import ItemsGridTab from "./ItemsGridTab";
export default function Items() {
  const tabs = [
    { name: "Tokens", tab: "tokens" },
    { name: "Stats", tab: "stats" },
    { name: "other", tab: "other" },
  ];
  const [currentTab, setCurrentTab] = useState("tokens");
  const tokens = [
    { label: "1,000,000 token", btnType: "buy_now", src: "/imgs/items/tokens/1kk.png" },
    { label: "500,000 token", btnType: "buy_now", src: "/imgs/items/tokens/500k.png" },
    { label: "350,000 token", btnType: "buy_now", src: "/imgs/items/tokens/350k.png" },
    { label: "250,000 token", btnType: "buy_now", src: "/imgs/items/tokens/250k.png" },
    { label: "100,000 token", btnType: "buy_now", src: "/imgs/items/tokens/100k.png" },
    { label: "50,000 token", btnType: "buy_now", src: "/imgs/items/tokens/50k.png" },
    { label: "25,000 token", btnType: "buy_now", src: "/imgs/items/tokens/25k.png" },
    { label: "10,000 token", btnType: "buy_now", src: "/imgs/items/tokens/10k.png" },
    { label: "5,000 token", btnType: "buy_now", src: "/imgs/items/tokens/5k.png" },
  ].reverse();
  const stats = [
    { label: "+30% defense", btnType: "buy_now", src: "/imgs/items/stats/defense.png" },
    { label: "+30% intelligence", btnType: "buy_now", src: "/imgs/items/stats/intelligence.png" },
    { label: "+30% vision", btnType: "buy_now", src: "/imgs/items/stats/vision.png" },
    { label: "+30% stamina", btnType: "buy_now", src: "/imgs/items/stats/stamina.png" },
    { label: "+30% speed", btnType: "buy_now", src: "/imgs/items/stats/speed.png" },
    { label: "+30% hearing", btnType: "buy_now", src: "/imgs/items/stats/hearing.png" },
    { label: "+30% strength", btnType: "buy_now", src: "/imgs/items/stats/strength.png" },
    { label: "+30% agility", btnType: "buy_now", src: "/imgs/items/stats/agility.png" },
  ];
  const other = [
    { label: "Map Vision", btnType: "buy_now", src: "/imgs/items/other/map-vision.png" },
    { label: "Health Increase", btnType: "buy_now", src: "/imgs/items/other/health-increase.png" },
    { label: "event hint", btnType: "buy_now", src: "/imgs/items/other/event-hint.png" },
    { label: "gen 2 random", btnType: "buy_now", src: "/imgs/items/other/gen2-random.png" },
    { label: "gen 1 random", btnType: "buy_now", src: "/imgs/items/other/gen1-random.png" },
    { label: "mystery", btnType: "buy_now", src: "/imgs/items/other/mystery.png" },
  ];
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
  return (
    <>
      <Tabs currTab={currentTab} setCurrTab={setCurrentTab} tabs={tabs} />
      <AnimatePresence exitBeforeEnter>
        {currentTab === "tokens" && (
          <motion.div variants={slide} key={0} initial="hidden" animate="visible" exit={"exit"}>
            <ItemsGridTab items={tokens} />
          </motion.div>
        )}
        {currentTab === "stats" && (
          <motion.div variants={slide} key={0} initial="hidden" animate="visible" exit={"exit"}>
            <ItemsGridTab items={stats} />
          </motion.div>
        )}
        {currentTab === "other" && (
          <motion.div variants={slide} key={0} initial="hidden" animate="visible" exit={"exit"}>
            <ItemsGridTab items={other} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
