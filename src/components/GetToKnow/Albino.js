import React from "react";
import RarityBox from "./RarityBox";
import usePicsToShow from "./usePicsToShow";

export default function Albino() {
  const albino = [
    "/imgs/rarities/albinos/1.png",
    "/imgs/rarities/albinos/2.png",
    "/imgs/rarities/albinos/3.png",
    "/imgs/rarities/albinos/4.png",
    "/imgs/rarities/albinos/5.png",
    "/imgs/rarities/albinos/6.png",
  ];
  const picsToShow = usePicsToShow();
  return (
    <RarityBox rarityType={"commons"}>
      <div className="flex  justify-between items-center ">
        <p>
          <span>Albino</span>
        </p>
        <p className="lg:hidden">
          <span>36%</span>
        </p>
      </div>
      <div className="flex flex-col rarity-pics-container">
        <div className="flex flex-col gap-y-5 w-full max-w-[375px] xl:max-w-[420px]  lg:mx-auto">
          <div className="w-full relative">
            <img
              // style={{ height: 120, width: "auto" }}
              className="pic-main"
              src={albino[0]}
              alt="common dino"
            />
            {albino.map(
              (src, i) =>
                i !== 0 &&
                i < picsToShow && (
                  <img
                    style={{ transform: `translateX(${i * (picsToShow === 6 ? 64 : 38)}%)` }}
                    className="rarity-pic"
                    src={src}
                    alt="common dino"
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">36%</div>
    </RarityBox>
  );
}
