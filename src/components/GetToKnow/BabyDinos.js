import React from "react";

export default function BabyDinos() {
  const dinos = [
    { src: "/imgs/nfts/baby/ankylosaurus.png", name: "ankylosaurus" },
    { src: "/imgs/nfts/baby/baryonyx.png", name: "baryonyx" },
    { src: "/imgs/nfts/baby/brachiosaurus.png", name: "brachiosaurus" },
    { src: "/imgs/nfts/baby/brontosaurus.png", name: "brontosaurus" },
    { src: "/imgs/nfts/baby/coelophysis.png", name: "coelophysis" },
    { src: "/imgs/nfts/baby/parasaulorophus.png", name: "parasaulorophus" },
    { src: "/imgs/nfts/baby/pterodactyl.png", name: "pterodactyl" },
    { src: "/imgs/nfts/baby/spinosaurus.png", name: "spinosaurus" },
    { src: "/imgs/nfts/baby/stegosaurus.png", name: "stegosaurus" },
    { src: "/imgs/nfts/baby/triceratops.png", name: "triceratops" },
    { src: "/imgs/nfts/baby/tyrannosaurus.png", name: "tyrannosaurus" },
    { src: "/imgs/nfts/baby/velociraptor.png", name: "velociraptor" },
  ];
  return dinos.map((d) => (
    <div className="flex flex-col items-center justify-center" key={d.name}>
      <span className="text-white text-lg">{d.name}</span>
      <img className="mb-4" src={d.src} alt={d.name} />
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
