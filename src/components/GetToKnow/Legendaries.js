import React from "react";
import RarityBox from "./RarityBox";

export default function Legendaries() {
  const commons = [
    "/imgs/rarities/legendaries/1.png",
    "/imgs/rarities/legendaries/2.png",
    "/imgs/rarities/legendaries/3.png",
    "/imgs/rarities/legendaries/4.png",
    "/imgs/rarities/legendaries/5.png",
    "/imgs/rarities/legendaries/6.png",
  ];

  return (
    <RarityBox rarityType={"legendaries"}>
      <div className="flex flex-col justify-center items-center lg:items-start ">
        <p>
          <span>legendaries</span>
        </p>
      </div>
      <div className="flex flex-col rarity-pics-container">
        <div className="flex flex-col gap-y-5 w-full max-w-[375px] xl:max-w-[420px]  mx-auto">
          <div className="relative">
            <img
              // style={{ height: 120, width: "auto" }}
              className="pic-main"
              src={commons[0]}
              alt="common dino"
            />
            {commons.map(
              (src, i) =>
                i !== 0 && (
                  <img
                    style={{ transform: `translateX(${i * 64}%)` }}
                    className="rarity-pic"
                    src={src}
                    alt="common dino"
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">1%</div>
    </RarityBox>
  );
}
