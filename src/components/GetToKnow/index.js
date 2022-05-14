import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import BabyDinos from "./BabyDinos";
import Eggs from "./Eggs";
import Tabs from "./Tabs";
import "./get-to-know.scss";
import Rarities from "./Rarities";
import Items from "./Items";
export default function GetToKnow() {
  const [currTab, setcurrTab] = useState("baby");
  return (
    <div className="get-to-know pb-10 pt-16">
      <div className="my-container relative z-10">
        <Heading addClasses={"text-center"}>Get to know our world</Heading>
        <Tabs currTab={currTab} setCurrTab={setcurrTab} />
        <div className="min-h-[440px] lg:min-h-[586px]">
          {currTab === "baby" && <BabyDinos />}
          {currTab === "eggs" && <Eggs />}
          {currTab === "rarities" && <Rarities />}
          {currTab === "item" && <Items />}
        </div>
      </div>
    </div>
  );
}
