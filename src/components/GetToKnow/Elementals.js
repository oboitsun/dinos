import React from "react";
import RarityBox from "./RarityBox";

export default function Elementals() {
  const elementals = [
    { name: "ice", src: "/imgs/rarities/elementals/1.png" },
    { name: "fire", src: "/imgs/rarities/elementals/2.png" },
    { name: "Earth", src: "/imgs/rarities/elementals/3.png" },
    { name: "wind", src: "/imgs/rarities/elementals/4.png" },
  ];

  return (
    <RarityBox rarityType={"elementals"}>
      <div className="flex  justify-between items-center">
        <p>
          <span className="text-sm">Elementals</span>
        </p>
        <p className="lg:hidden">
          <span>22.5%</span>
        </p>
      </div>
      <div className="flex flex-col rarity-pics-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  w-full max-w-[375px] xl:max-w-[420px]  mx-auto">
          {elementals.map((el, i) => (
            <div key={el.name} className=" relative">
              <img className="w-full md:w-auto" src={el.src} alt={`${el.name} dino`} />{" "}
              <p className="legend">{el.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">22.5%</div>
    </RarityBox>
  );
}
