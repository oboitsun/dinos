import React from "react";

export default function RarityBox({ rarityType, children }) {
  return (
    <div className={`rarity-box p-5 lg:px-14 bg-turf rounded-xl w-full ${rarityType}`}>
      {children}
    </div>
  );
}
