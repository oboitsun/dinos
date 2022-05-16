import React from "react";
import RarityBox from "./RarityBox";
import usePicsToShow from "./usePicsToShow";

export default function UltraRares() {
  const commons = [
    "/imgs/rarities/ultra_rares/1.png",
    "/imgs/rarities/ultra_rares/2.png",
    "/imgs/rarities/ultra_rares/3.png",
    "/imgs/rarities/ultra_rares/4.png",
    "/imgs/rarities/ultra_rares/5.png",
    "/imgs/rarities/ultra_rares/6.png",
  ];
  const picsToShow = usePicsToShow();
  return (
    <RarityBox rarityType={"ultra-rares"}>
      <div className="flex justify-between items-center">
        <p>
          <span>Ultra rares</span>
        </p>
        <p className="lg:hidden">
          <span>4.5%</span>
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
                i !== 0 &&
                i < picsToShow && (
                  <img
                    style={{ left: `${i * (picsToShow === 6 ? 15 : 18)}%` }}
                    className="rarity-pic"
                    src={src}
                    alt="common dino"
                  />
                )
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center">4.5%</div>
    </RarityBox>
  );
}
