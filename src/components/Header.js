import { Link as Anchor } from "react-scroll";
import "../styles/header.scss";
import Burger from "./Burger";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Header({
  setDiscord,
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
  setShowLore,
  showMenu,
  setShowMenu,
  scrolled,
}) {
  const links = [
    { href: "about-us", text: "About" },
    { href: "perks", text: "Perks" },
    { href: "roadmap", text: "Roadmap" },
    {
      href: "/white-paper-icdinos.pdf",
      text: "whitepaper",
    },

    { href: "faq", text: "FAQ" },
    // { href: "https://portal.icdinos.io/", text: "Portal" },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "anchor text-white  relative top-0.5  mr-5",
  };
  return (
    <div id="header" className={` ${scrolled ? "bg-turf bg-opacity-80 py-3 shadow-lg" : "py-7"}`}>
      {" "}
      <div className="my-container justify-between flex items-center">
        {" "}
        <div className="w-1/4 lg:w-1/8 flex justify-center  flex-shrink-0 ">
          <Logo wide={false} />
        </div>
        <div className="hidden lg:flex    ">
          {links.map((l, i) => {
            return l.text !== "whitepaper" ? (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ) : (
              <a
                // onClick={() => {
                //   setDiscord({ show: true, what: l.text });
                // }}
                key={i}
                className="anchor text-white relative top-0.5 mr-5"
                href={l.href}>
                {l.text}
              </a>
            );
          })}
        </div>
        <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="hidden lg:flex lg:w-1/4 text-xs xl:text-base font-bold lg:gap-6   items-center  flex-shrink-0 min-w-max">
          {/* <ConnectWallet
            header
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            setUserAddress={setUserAddress}
            userAddress={userAddress}
          /> */}
          <button
            onClick={() => {
              setShowLore(true);
            }}
            className="orange-btn-sm text-white py-1.5 px-3 leading-none rounded-lg">
            <span className="relative top-0.5"> story</span>
          </button>
          <a
            className="yellow-btn-sm text-white py-1.5 leading-none rounded-lg px-3 "
            href="https://portal.icdinos.io/">
            <span className="relative top-0.5"> Portal</span>
          </a>
          <Socials setDiscord={setDiscord} />
        </div>
      </div>
    </div>
  );
}
