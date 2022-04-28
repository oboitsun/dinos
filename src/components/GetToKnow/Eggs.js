import React from "react";

export default function Eggs() {
  const eggs = [
    { src: "/imgs/nfts/eggs/egg1.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg2.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg3.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg4.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg5.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg6.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg7.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg8.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg9.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg10.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg11.png", name: "egg" },
    { src: "/imgs/nfts/eggs/egg12.png", name: "egg" },
  ];
  return eggs.map((d) => (
    <div className="flex flex-col items-center justify-center" key={d.name}>
      <span className="text-white text-lg">{d.name}</span>
      <img className="mb-4 min-h-[200px]" src={d.src} alt={d.name} />
      <a
        href="https://entrepot.app/marketplace/icdinos"
        className="rounded-full text-white h-10 flex items-center gap-1 justify-center bg-orange w-full"
      >
        <span className="relative top-0.5">buy now</span>{" "}
        <img className="" src="/imgs/entrepot-logo-small.png" alt="buy on entrepot" />
      </a>
    </div>
  ));
}
