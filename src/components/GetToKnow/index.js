import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import BabyDinos from "./BabyDinos";
import Eggs from "./Eggs";
import Tabs from "./Tabs";
import "./get-to-know.scss";
import Rarities from "./Rarities";
import Items from "./Items";
import Dinos from "./Dinos";
const tabs = [
  { name: "Dinos", tab: "baby" },
  { name: "Eggs", tab: "eggs" },
  { name: "Rarities", tab: "rarities" },
  { name: "Item", tab: "item" },
];
export default function GetToKnow() {
  const [currTab, setcurrTab] = useState("item");
  return (
    <div className="get-to-know pb-10 pt-16">
      <div className="my-container relative z-10">
        <Heading addClasses={"text-center"}>Get to know our world</Heading>
        <Tabs tabs={tabs} currTab={currTab} setCurrTab={setcurrTab} />

        <div className="min-h-[440px] lg:min-h-[586px]">
          {currTab === "baby" && <Dinos />}
          {currTab === "eggs" && <Eggs />}
          {currTab === "rarities" && <Rarities />}
          {currTab === "item" && <Items />}
        </div>
      </div>
    </div>
  );
}
