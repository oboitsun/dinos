import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import BabyDinos from "./BabyDinos";
import Eggs from "./Eggs";
import Tabs from "./Tabs";
import "./get-to-know.scss";
export default function GetToKnow() {
  const [currTab, setcurrTab] = useState("baby");
  return (
    <div className="get-to-know py-10">
      <div className="my-container relative z-10">
        <Heading addClasses={"text-center"}>Get to know our world</Heading>
        <Tabs currTab={currTab} setCurrTab={setcurrTab} />
        <div className="min-h-[440px] grid grid-cols-2 lg:grid-cols-6 gap-y-8 gap-x-4">
          {currTab === "baby" && <BabyDinos />}
          {currTab === "eggs" && <Eggs />}
        </div>
      </div>
    </div>
  );
}
