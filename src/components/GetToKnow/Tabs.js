import React from "react";

export default function Tabs({ currTab, setCurrTab }) {
  const tabs = [
    { name: "Dinos", tab: "baby" },
    { name: "Eggs", tab: "eggs" },
    { name: "Rarities", tab: "rarities" },
    { name: "Item", tab: "item" },
  ];

  return (
    <div className="w-full relative grid grid-cols-4 pb-2 border-b-2  border-white mb-10 mt-5 ">
      {tabs.map((t) => (
        <button
          onClick={() => {
            setCurrTab(t.tab);
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
  );
}
