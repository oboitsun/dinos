import React from "react";
import RarityBox from "./RarityBox";

export default function CommonsAlbino() {
  const commons = [
    "/imgs/rarities/commons/1.png",
    "/imgs/rarities/commons/2.png",
    "/imgs/rarities/commons/3.png",
    "/imgs/rarities/commons/4.png",
    "/imgs/rarities/commons/5.png",
    "/imgs/rarities/commons/6.png",
  ];
  const albino = [
    "/imgs/rarities/albinos/1.png",
    "/imgs/rarities/albinos/2.png",
    "/imgs/rarities/albinos/3.png",
    "/imgs/rarities/albinos/4.png",
    "/imgs/rarities/albinos/5.png",
    "/imgs/rarities/albinos/6.png",
  ];
  return (
    <RarityBox rarityType={"commons"}>
      <div className="flex flex-col gap-y-10 justify-between  lg:py-10 items-center lg:items-start">
        <p>
          <span>Commons</span>
        </p>
        <p>
          <span>Albino</span>
        </p>
      </div>
      <div className="flex flex-col rarity-pics-container">
        <div className="flex flex-col gap-y-5 w-full max-w-[375px] xl:max-w-[420px]  lg:mx-auto">
          <div className="relative w-full">
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
          <div className="divider"></div>

          <div className="w-full relative">
            <img
              // style={{ height: 120, width: "auto" }}
              className="pic-main"
              src={albino[0]}
              alt="common dino"
            />
            {albino.map(
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
      <div className="flex items-center justify-center">72.0%</div>
    </RarityBox>
  );
}
