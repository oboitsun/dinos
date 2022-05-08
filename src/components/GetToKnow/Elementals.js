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
      <div className="flex flex-col justify-center items-center     ">
        <p>
          <span>Elementals</span>
        </p>
      </div>
      <div className="flex flex-col rarity-pics-container">
        <div className="flex justify-between  w-full max-w-[375px] xl:max-w-[420px]  mx-auto">
          {elementals.map((el, i) => (
            <div key={el.name} className=" relative">
              <img className="" src={el.src} alt={`${el.name} dino`} />{" "}
              <p className="legend">{el.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">22.5%</div>
    </RarityBox>
  );
}
