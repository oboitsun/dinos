import React from "react";
// import Image from "next/image";

export default function ChainStormLogo({ wide, chain }) {
  return (
    <a href="https://chainstorm.io" className="flex justify-center w-3/4">
      <img
        className="w-full"
        style={{ maxWidth: 154 }}
        src={"/imgs/chain-storm-logo.svg"}
        layout="responsive"
        alt="Go To Chain Storm Labs"
      />
    </a>
  );
}
