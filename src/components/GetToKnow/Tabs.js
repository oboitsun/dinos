import React from "react";

export default function Tabs({ currTab, setCurrTab, tabs }) {
  const [currTabIndex, setCurrTabIndex] = React.useState(tabs.findIndex((t) => t.tab === currTab));
  console.log(currTabIndex);
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${tabs.length},1fr)` }}
      className="w-full relative grid  pb-2 border-b-2  border-white mb-10 mt-5 "
    >
      {tabs?.length &&
        tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrTab(t.tab);
              setCurrTabIndex(i);
            }}
            className={`relative text-stroke-sm text-white ${
              currTab === t.tab ? "picked" : ""
            }  text-lg lg:text-xl`}
          >
            {t.name}
          </button>
        ))}

      <span
        style={{
          width: `calc(100%/${tabs.length})`,
          bottom: "-3px",
          transform: `translateX(calc(100%*${currTabIndex}))`,
        }}
        className="inline-block absolute w-full transition-all  duration-500 left-0 h-1 bg-black"
      ></span>
    </div>
  );
}
