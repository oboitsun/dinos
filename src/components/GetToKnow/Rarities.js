import { MotionConfig } from "framer-motion";
import React from "react";
import Albino from "./Albino";
import Commons from "./Commons";
import Elementals from "./Elementals";
import Legendaries from "./Legendaries.js";
import RarityBox from "./RarityBox";
import UltraRares from "./UltraRares";
import { motion } from "framer-motion";
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
const items = [<Commons />, <Albino />, <Elementals />, <UltraRares />, <Legendaries />];
export default function Rarities() {
  return (
    <div className="w-full grid gap-5 grid-cols-1">
      {items.map((item, i) => (
        <motion.div custom={i} variants={block} initial="hidden" animate="visible">
          {item}
        </motion.div>
      ))}
    </div>
  );
}
