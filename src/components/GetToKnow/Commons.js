import React from "react";
import RarityBox from "./RarityBox";
import usePicsToShow from "./usePicsToShow";

export default function Commons() {
  const commons = [
    "/imgs/rarities/commons/1.png",
    "/imgs/rarities/commons/2.png",
    "/imgs/rarities/commons/3.png",
    "/imgs/rarities/commons/4.png",
    "/imgs/rarities/commons/5.png",
    "/imgs/rarities/commons/6.png",
  ];
  const picsToShow = usePicsToShow();

  return (
    <RarityBox rarityType={"commons"}>
      <div className="flex  justify-between items-center ">
        <p>
          <span>Commons</span>
        </p>
        <p className="md:hidden">
          <span>36%</span>
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
                i !== 0 &&
                i < picsToShow && (
                  <img
                    key={i}
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
      <div className="hidden md:flex items-center justify-center">36.0%</div>
    </RarityBox>
  );
}
