import React, { useState } from "react";
import Heading from "../Heading";
import BabyDinos from "./BabyDinos";
import Tabs from "./Tabs";
import TeenDinos from "./TeenDinos";
export default function Dinos() {
  const [currTab, setcurrTab] = useState("baby");
  const subtabs = [
    { name: "Baby", tab: "baby" },
    { name: "teen", tab: "teen" },
    { name: "adult", tab: "adult" },
  ];
  return (
    <>
      <div className="w-full relative grid grid-cols-3 pb-2 border-b-2  border-white mb-10 mt-5 ">
        {subtabs.map((t) => (
          <button
            onClick={() => {
              setcurrTab(t.tab);
            }}
            className={`relative text-stroke-sm text-white ${
              currTab === t.tab ? "picked" : ""
            }  text-lg lg:text-xl`}
          >
            {t.name}
            {currTab === t.tab && (
              <span className="inline-block absolute w-full -bottom-3 left-0 h-1 bg-black"></span>
            )}
          </button>
        ))}
      </div>
      {currTab === "baby" && <BabyDinos />}
      {currTab === "teen" && <TeenDinos />}
      {currTab === "adult" && (
        <div className="py-16 ">
          <Heading>Coming soon</Heading>
        </div>
      )}
    </>
  );
}
