import React, { useState } from "react";
import Albino from "./Albino";
import Commons from "./Commons";
import Elementals from "./Elementals";
import Legendaries from "./Legendaries.js";
import Tabs from "./Tabs";
import UltraRares from "./UltraRares";
import SupplyTable from "./SupplyTable";
import { dinos, dinosGen2 } from "./supplyTableData";
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
  const tabs = [
    { name: "Rarity", tab: "rarity" },
    { name: "Supply(gen1)", tab: "gen1" },
    { name: "Supply(gen2)", tab: "gen2" },
  ];
  const [currentTab, setCurrentTab] = useState("gen1");
  return (
    <div className="">
      <Tabs currTab={currentTab} setCurrTab={setCurrentTab} tabs={tabs} />
      {currentTab === "rarity" && (
        <div className="w-full grid gap-5 grid-cols-1">
          {items.map((item, i) => (
            <motion.div custom={i} variants={block} initial="hidden" animate="visible">
              {item}
            </motion.div>
          ))}
        </div>
      )}
      {currentTab === "gen1" && <SupplyTable tableData={dinos} />}
      {currentTab === "gen2" && <SupplyTable tableData={dinosGen2} />}
    </div>
  );
}
