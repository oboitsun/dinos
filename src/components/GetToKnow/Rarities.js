import React from "react";
import CommonsAlbino from "./CommonsAlbino";
import Elementals from "./Elementals";
import Legendaries from "./Legendaries.js";
import RarityBox from "./RarityBox";
import UltraRares from "./UltraRares";

export default function Rarities() {
  return (
    <div className="w-full grid gap-5 grid-cols-1">
      <CommonsAlbino />
      <Elementals />
      <UltraRares />
      <Legendaries />
    </div>
  );
}
