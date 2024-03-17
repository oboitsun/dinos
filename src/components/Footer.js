import React from "react";

import "../styles/footer.scss";
import ConnectWallet from "./ConnectWallet";
import FooterDinos from "./FooterDinos";
import Logo from "./Logo";
import Socials from "./Socials";
// const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function Footer({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
  setDiscord,
}) {
  const links = [
    { href: "about-us", text: "About Us" },
    { href: "team", text: "Team" },
    { href: "roadmap", text: "Roadmap" },
    { href: "market", text: "Market" },
    { href: "faq", text: "FAQ" },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "anchor text-white ",
  };

  const rockRef = React.useRef(null);
  const [rockHeight, setRockHeight] = React.useState(0);

  React.useEffect(() => {
    const screenWidth = window?.innerWidth;
    setRockHeight(screenWidth * 0.22);
  }, []);

  return (
    <div
      style={{ minHeight: rockHeight + 60, height: "100%" }}
      className="footer bg-footer py-16 relative z-10 h-full overflow-hidden">
      <img
        className="w-full h-auto object-cover absolute top-0 left-0 z-10 pointer-events-none"
        src="/imgs/turf.svg"
        alt="turf"
      />
      <div className="w-full h-full object-cover absolute bottom-0 left-0 z-10 pointer-events-none flex items-end ">
        <div className="relative w-full">
          <FooterDinos />
          <img
            ref={rockRef}
            className="w-full h-auto object-cover "
            src="/imgs/footer.svg"
            alt="footer"
          />
        </div>
      </div>
      <div className="my-container relative z-10 h-full">
        <div className="w-full justify-between flex flex-col items-center h-full gap-4">
          <div className=" ">
            <Socials big showPopup={showPopup} setDiscord={setDiscord} />
          </div>
          <p className=" max-w-2xl text-center  text-white leading-loose">
            Head over to our Discord and Twitter to keep up with the latest information on release
            dates, giveaways and more!
          </p>
          <p className="text-xs italic text-center font-sans text-white">
            Kindly be aware that investing in NFTs can carry financial risks. The floor price may
            fluctuate unpredictably, and there are no assurances of profitability. While we commit
            to fulfilling our promises as detailed in our roadmap, purchasing entails inherent risk.
            IC Dinos does not offer refunds, replacements, or guarantees.
          </p>
          <div className="flex  items-center mx-auto gap-4">
            <Logo wide={false} />
            <div className=" ">
              <ConnectWallet
                header
                showPopup={showPopup}
                setShowPopup={setShowPopup}
                setUserAddress={setUserAddress}
                userAddress={userAddress}
              />
            </div>
          </div>
          <p className="text-white lg:hidden text-center py-5">2021 © IC Dinos</p>
          {/* <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-8 xl:gap-10 items-center">
            {links.map((l, i) => (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ))}

            <ConnectWallet
              showPopup={showPopup}
              setShowPopup={setShowPopup}
              setUserAddress={setUserAddress}
              userAddress={userAddress}
            />
           
          </div> */}
        </div>
      </div>
    </div>
  );
}
