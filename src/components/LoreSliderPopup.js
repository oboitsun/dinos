import React, { useEffect, useState } from "react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./LoreSliderPopup.scss";
const lore = [
  {
    id: 1,
    img: "/imgs/lore/1-min.jpeg",
    lore: "In the ancient land of IC Dinos, where lush forests stretched as far as the eye could see, a profound event occurred that would forever change the course of history. IC Dinos was inhabited by an array of magnificent dinosaurs, roaming the land and traversing the crystal-clear waters. Little did they know that their lives were about to be intertwined with the birth of elemental stones.",
  },
  {
    id: 2,
    img: "/imgs/lore/2-min.jpeg",
    lore: "Legend spoke of a celestial cataclysm that shook the heavens, sending shards of ethereal gemstones hurtling towards IC Dinos. Each stone radiated an energy uniquely attuned to the elements of fire, earth, wind, and ice. These elemental stones, infused with the raw power of nature, embedded themselves deep within the land, waiting to be discovered.",
  },
  {
    id: 3,
    img: "/imgs/lore/3-min.jpeg",
    lore: "As time passed, the dinosaurs of IC Dinos began to uncover the hidden treasures that lay beneath the surface. These extraordinary stones, when held by a dinosaur, awakened latent abilities and bestowed them with incredible elemental powers. The creatures that possessed these stones became known as Elemental Dinosaurs, their bodies shimmering with the enchanting glow of their respective elements.",
  },
  {
    id: 4,
    img: "/imgs/lore/4-min.jpeg",
    lore: "With their newfound powers, the Elemental Dinosaurs became guardians of IC Dinos, utilizing their abilities to resist and overcome the perils that threatened their land. As they ventured into the heart of their elemental territories, they discovered hidden sanctuaries where their powers could be further honed and amplified.",
  },
  {
    id: 5,
    img: "/imgs/lore/5-min.jpeg",
    lore: "The elemental stones not only granted incredible strength but also provided protection against the devastating catastrophes that befell IC Dinos. These calamities, known as Dinosasters, were cataclysmic events of immense proportions, including erupting volcanoes, titanic earthquakes, ferocious tornadoes, and bone-chilling blizzards. The Elemental Dinosaurs, armed with their elemental powers, stood as beacons of hope, defending their fellow dinosaurs and mitigating the destructive forces of the Dinosasters,.",
  },
  {
    id: 6,
    img: "/imgs/lore/6-min.jpeg",
    lore: "Amidst the thriving dinosaur communities of IC Dinos, there existed an elusive and fabled breed—the legendary dinosaurs. These majestic creatures, with their iridescent pink scales, were said to possess unparalleled mastery over their elemental abilities. Their mere presence evoked awe and wonder among those fortunate enough to catch a glimpse of them. Legends whispered that these legendary dinosaurs held a deep connection with the very essence of the elemental stones, enabling them to shape and manipulate their powers in unimaginable ways.",
  },
  {
    id: 7,
    img: "/imgs/lore/7-min.jpeg",
    lore: "In addition to the legendary dinosaurs, the rarest of their kind were the ultra rare dinosaurs, adorned with a brilliant blue hue. These unique creatures possessed their own distinct elemental powers and were cherished as treasures by dinosaur enthusiasts and collectors alike. Their scarcity heightened their allure and made encounters with them the stuff of dreams for adventurers exploring the vast expanse of IC Dinos.",
  },
  {
    id: 8,
    img: "/imgs/lore/8-min.jpeg",
    lore: "As the power of the elemental stones coursed through their veins, dinosaurs of all colors and patterns emerged, including albinos. These dinosaurs, with their striking lack of pigmentation, stood out as both beautiful and vulnerable. Though physically different, they found their place within the diverse ecosystem of IC Dinos, contributing their unique abilities to the tapestry of life.",
  },
  {
    id: 9,
    img: "/imgs/lore/9-min.jpeg",
    lore: "IC Dinos, with its elemental stones and extraordinary creatures, was a world in constant transformation. From the hatching of ancient eggs to the growth of dinosaurs from infancy to adulthood, the circle of life continued its eternal rhythm. Through the trials and tribulations they faced, the dinosaurs of IC Dinos learned the importance of unity, cooperation, and the remarkable power that resided within them.",
  },
];
SwiperCore.use([Navigation, EffectFade]);
export default function LoreSliderPopup({ showLore, setShowLore }) {
  const [slideCount, setSlideCount] = useState(1);
  useEffect(() => {
    if (showLore) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLore]);
  const handleClose = () => {
    setShowLore(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 bg-black bg-opacity-50 w-screen    h-screen overflow-hidden flex justify-center items-center transition-all ${
        showLore ? "opacity-100 z-30" : "opacity-0 pointer-events-none"
      }`}>
      <div
        style={{ maxWidth: "600px" }}
        className="w-full lg:w-10/12 mx-auto rounded-20 bg-turf p-5 lg:p-7 xl:p-10 2xl:p-11 flex flex-col gap-3 lg:gap-4 2xl:gap-6">
        <div className="flex justify-between items-center gap-4">
          <p className="text-stroke-sm text-white text-3xl ">
            ic dinos story{" "}
            <span className="text-orange">
              {slideCount}/{lore?.length}
            </span>
          </p>
          <button className="popup-close " onClick={handleClose}>
            <img src="/imgs/close.svg" alt="close" />
          </button>
        </div>

        <div className="w-full overflow-hidden relative">
          <Swiper
            onSlideChange={(e) => {
              setSlideCount(e.activeIndex + 1);
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            initialSlide={0}
            className="swiper"
            centeredSlides
            spaceBetween={0}
            slidesPerView={1}
            lazy={{
              loadPrevNext: true,
              loadPrevNextAmount: 1,
            }}
            navigation={{
              nextEl: "#swpr-lore-next",
              hiddenClass: "hide",
              hideOnClick: true,
              prevEl: "#swpr-lore-prev",
            }}>
            <button
              id="swpr-lore-prev"
              className="w-10  h-10 bg-black rounded-xl flex justify-center items-center absolute top-[10%] lg:top-1/4 z-10 left-6 disabled:opacity-0 ">
              <img
                className="w-1/2 h-1/2 object-contain"
                src="/imgs/arrow-prev.svg"
                alt="prev slide"
              />
            </button>
            <button
              id="swpr-lore-next"
              className="w-10  h-10 bg-black rounded-xl flex justify-center items-center absolute top-[10%] lg:top-1/4 z-10 right-6 disabled:opacity-0  ">
              <img
                className="w-1/2 h-1/2 object-contain rotate-180"
                src="/imgs/arrow-prev.svg"
                alt="next slide"
              />
            </button>
            {lore.map((slide, i) => (
              <SwiperSlide className="slide-wrapper" key={slide.id}>
                <div className="lore-slide">
                  <div className="slide-img-container">
                    <div className="slide-img">
                      <img className="swiper-lazy" src={slide.img} alt="lore slide" />
                    </div>
                  </div>
                  <div className="yellow-btn p-4 rounded-20 text-white">
                    <p>{slide.lore}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={handleClose}
          className="w-full border-4 border-black rounded-20 text-white py-6 bg-black bg-opacity-75 text-center text-3xl leading-none">
          <span className="relative top-1">Close</span>
        </button>
      </div>
    </div>
  );
}
