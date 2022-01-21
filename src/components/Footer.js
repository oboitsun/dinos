import React from 'react';

import Logo from './Logo';
import { Link as Anchor } from 'react-scroll';
import '../styles/footer.scss';
import Socials from './Socials';
import ConnectWallet from './ConnectWallet';
// const DynamicComponent = dynamic(() => import("./ConnectWallet"), { ssr: false });
export default function Footer({
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
}) {
  const links = [
    { href: 'about-us', text: 'About Us' },
    { href: 'team', text: 'Team' },
    { href: 'roadmap', text: 'Roadmap' },
    // { href: "market", text: "Market" },
    { href: 'faq', text: 'FAQ' },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: 'active',
    className: 'anchor text-white ',
  };
  return (
    <div className="footer bg-footer py-16 relative">
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-10 pointer-events-none"
        src="/imgs/turf.svg"
        alt="turf"
      />
      <div className="my-container relative z-10">
        <div className="w-full justify-between flex flex-col items-center gap-4">
          <div className=" ">
            <Socials big />
          </div>
          <p className=" max-w-2xl text-center  text-white leading-loose">
            Head over to our Discord, INSTAGRAM and Twitter to keep up with the
            latest information on release dates, giveaways and more!
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
          <p className="text-white lg:hidden text-center py-5">
            2021 © IC Dinos
          </p>
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
