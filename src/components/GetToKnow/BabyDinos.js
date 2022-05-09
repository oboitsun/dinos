import React, { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function BabyDinos() {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
  }
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
    { src: "/imgs/nfts/baby/achelosaurus.png", name: "achelosaurus" },
    { src: "/imgs/nfts/baby/allosaurus.png", name: "allosaurus" },
    { src: "/imgs/nfts/baby/dilophosaurus.png", name: "dilophosaurus" },
    { src: "/imgs/nfts/baby/tsintaosaurus.png", name: "tsintaosaurus" },
    { src: "/imgs/nfts/baby/iguanodon.png", name: "iguanodon" },
    { src: "/imgs/nfts/baby/isanosaurus.png", name: "isanosaurus" },
    { src: "/imgs/nfts/baby/silvisaurus.png", name: "silvisaurus" },
    { src: "/imgs/nfts/baby/diplodocus.png", name: "diplodocus" },
  ];
  return (
    <>
      <div className="min-h-[440px] grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4">
        {dinos.map(
          (d, i) =>
            i < 10 && (
              <div className="flex flex-col items-center justify-center" key={d.name}>
                <span className="text-white text-lg">{d.name}</span>
                <div className="min-h-[200px]">
                  <LazyLoadImage className alt={d.name} effect="blur" src={d.src} />
                </div>

                <a
                  href="https://entrepot.app/marketplace/icdinos"
                  className="rounded-full text-white h-10 flex items-center gap-1 justify-center bg-orange w-full"
                >
                  <span className="relative top-0.5">buy now</span>{" "}
                  <img className="" src="/imgs/entrepot-logo-small.png" alt="buy on entrepot" />
                </a>
              </div>
            )
        )}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="transition-all overflow-hidden  grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4 mb-10"
      >
        {dinos.map(
          (d, i) =>
            i > 9 && (
              <div className="flex flex-col items-center justify-center" key={d.name}>
                <span className="text-white text-lg">{d.name}</span>
                <div className="min-h-[200px]">
                  <LazyLoadImage className alt={d.name} effect="blur" src={d.src} />
                </div>

                <a
                  href="https://entrepot.app/marketplace/icdinos"
                  className="rounded-full text-white h-10 flex items-center gap-1 justify-center bg-orange w-full"
                >
                  <span className="relative top-0.5">buy now</span>{" "}
                  <img className="" src="/imgs/entrepot-logo-small.png" alt="buy on entrepot" />
                </a>
              </div>
            )
        )}
      </div>
      <div className="w-full flex justify-center">
        {" "}
        <button
          className="bg-black w-max text-white leading-none py-4 px-6 rounded-full cursor-pointer mt-2 hover:bg-orange transition-all duration-500 mx-auto"
          onClick={toggleAccordion}
        >
          {" "}
          <span className="top-1 relative">
            {" "}
            {setActive === "active" ? "show less" : "show more"}
          </span>
        </button>
      </div>
    </>
  );
}
