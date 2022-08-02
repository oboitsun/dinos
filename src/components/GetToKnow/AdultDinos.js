import React, { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function AdultDinos() {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight + 64}px`);
  }
  const dinos = [
    { src: "/imgs/nfts/adult/achelosaurus.png", name: "achelosaurus" },
    { src: "/imgs/nfts/adult/allosaurus.png", name: "allosaurus" },
    { src: "/imgs/nfts/adult/ankylosaurus.png", name: "ankylosaurus" },
    { src: "/imgs/nfts/adult/baryonyx.png", name: "baryonyx" },
    { src: "/imgs/nfts/adult/brachiosaurus.png", name: "brachiosaurus" },
    { src: "/imgs/nfts/adult/brontosaurus.png", name: "brontosaurus" },
    { src: "/imgs/nfts/adult/coelophysis.png", name: "coelophysis" },
    { src: "/imgs/nfts/adult/dilophosaurus.png", name: "dilophosaurus" },
    { src: "/imgs/nfts/adult/diplodocus.png", name: "diplodocus" },
    { src: "/imgs/nfts/adult/iguanodon.png", name: "iguanodon" },
    { src: "/imgs/nfts/adult/silvisaurus.png", name: "silvisaurus" },
    { src: "/imgs/nfts/adult/parasaulorophus.png", name: "parasaulorophus" },
    { src: "/imgs/nfts/adult/pterodactyl.png", name: "pterodactyl" },
    { src: "/imgs/nfts/adult/isanosaurus.png", name: "isanosaurus" },
    { src: "/imgs/nfts/adult/spinosaurus.png", name: "spinosaurus" },
    { src: "/imgs/nfts/adult/tyrannosaurus.png", name: "tyrannosaurus" },
    { src: "/imgs/nfts/adult/stegosaurus.png", name: "stegosaurus" },
    { src: "/imgs/nfts/adult/triceratops.png", name: "triceratops" },
    { src: "/imgs/nfts/adult/tsintaosaurus.png", name: "tsintaosaurus" },
    { src: "/imgs/nfts/adult/velociraptor.png", name: "velociraptor" },
  ].sort((a, b) => a.name.localeCompare(b.name));
  const item = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => {
      return {
        opacity: 1,
        transition: { duration: 1, delay: custom * 0.05 },
      };
    },
  };

  return (
    <div>
      <div className="min-h-[440px] grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4 pb-8">
        {dinos.map(
          (d, i) =>
            i < 10 && (
              <motion.div
                custom={i}
                variants={item}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center"
                key={d.name}
              >
                <span className="text-white text-lg">{d.name}</span>
                <div
                  className={`lg:min-h-[200px] nft-pic ${i % 2 === 0 ? "skew-left" : "skew-right"}`}
                >
                  <LazyLoadImage className alt={d.name} effect="blur" src={d.src} />
                </div>

                <a
                  href="https://entrepot.app/marketplace/icdinos"
                  className="rounded-full text-white h-10 flex items-center gap-1 justify-center bg-orange w-full"
                >
                  <span className="relative top-0.5">buy now</span>{" "}
                  <img className="" src="/imgs/entrepot-logo-small.png" alt="buy on entrepot" />
                </a>
              </motion.div>
            )
        )}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`transition-all overflow-hidden  grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4  ${
          setActive ? "pb-8" : ""
        }`}
      >
        {dinos.map(
          (d, i) =>
            i > 9 && (
              <motion.div
                custom={i - 9}
                variants={item}
                initial="hidden"
                animate={setActive ? "visible" : "hidden"}
                className="flex flex-col items-center justify-center gap-4"
                key={d.name}
              >
                <span className="text-white text-lg">{d.name}</span>
                <div
                  className={`lg:min-h-[200px] nft-pic ${i % 2 === 0 ? "skew-left" : "skew-right"}`}
                >
                  <LazyLoadImage className alt={d.name} effect="blur" src={d.src} />
                </div>

                <a
                  href="https://entrepot.app/marketplace/icdinos"
                  className="rounded-full text-white h-10 flex items-center gap-1 justify-center bg-orange w-full"
                >
                  <span className="relative top-0.5">buy now</span>{" "}
                  <img className="" src="/imgs/entrepot-logo-small.png" alt="buy on entrepot" />
                </a>
              </motion.div>
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
    </div>
  );
}
