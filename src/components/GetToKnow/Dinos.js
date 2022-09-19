import React, { useState } from "react";

import { Listbox } from "@headlessui/react";

import AdultDinos from "./AdultDinos";
import BabyDinos from "./BabyDinos";
import TeenDinos from "./TeenDinos";
import ListBox from "./ListBox";
import BabyDinosGen2 from "./BabyDinosGen2";

export default function Dinos() {
  const gen1Tabs = { baby: <BabyDinos />, teen: <TeenDinos />, adult: <AdultDinos /> };
  const gen2Tabs = { baby: <BabyDinosGen2 />, teen: null, adult: null };
  const ageTabs = [
    { name: "Baby", tab: "baby" },
    { name: "teen", tab: "teen" },
    { name: "adult", tab: "adult" },
  ];
  const genTabs = [
    {
      tabs: gen1Tabs,
      name: "gen1",
    },
    {
      tabs: gen2Tabs,
      name: "gen2",
    },
  ];

  const [ageTab, setAgeTab] = useState(ageTabs[0]);
  const [genTab, setGenTab] = useState(genTabs[0]);

  return (
    <>
      <div className="w-full  grid grid-cols-2 gap-10  mb-10 mt-5 ">
        <div className="relative">
          <ListBox
            pickedTab={ageTab}
            selectFunc={setAgeTab}
            tabs={ageTabs}
            tabName="age"
            addClassName={"orange-btn"}
          />
        </div>
        <div className="">
          <ListBox
            pickedTab={genTab}
            selectFunc={setGenTab}
            tabs={genTabs}
            tabName="gen"
            addClassName={"brown-btn"}
          />
        </div>
        {/* {subtabs.map((t) => (
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
        ))} */}
      </div>
      {genTab.tabs?.[ageTab.tab] || (
        <div className="sm:h-40 lg:h-80 flex justify-center items-center text-white text-center text-4xl">
          COMING SOON
        </div>
      )}
    </>
  );
}
