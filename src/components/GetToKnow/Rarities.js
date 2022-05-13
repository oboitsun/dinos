import React from "react";
import Albino from "./Albino";
import Commons from "./Commons";
import Elementals from "./Elementals";
import Legendaries from "./Legendaries.js";
import RarityBox from "./RarityBox";
import UltraRares from "./UltraRares";

export default function Rarities() {
  return (
    <div className="w-full grid gap-5 grid-cols-1">
      <Commons />
      <Albino />
      <Elementals />
      <UltraRares />
      <Legendaries />
    </div>
  );
}
