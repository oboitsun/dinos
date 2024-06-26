import { motion } from "framer-motion";
import React, { useEffect } from "react";

import { Link as Anchor } from "react-scroll";
import "../styles/modal-menu.scss";
import ConnectWallet from "./ConnectWallet";
import Socials from "./Socials";

export default function ModalMenu({ showMenu, setShowMenu, setShowLore }) {
  const links = [
    { href: "about-us", text: "About Us" },
    { href: "percs", text: "Perks" },
    { href: "roadmap", text: "Roadmap" },
    {
      href: "https://medium.com/@icdinos/ic-dinos-dino-survival-game-d13747249ca",
      text: "whitepaper",
    },
    // { href: "market", text: "Market" },
    { href: "faq", text: "FAQ" },
  ];
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "cursor-pointer text-white  ",
  };
  const cont = {
    show: {
      height: "100vh",
      zIndex: 20,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
    hidden: {
      height: "100vh",
      zIndex: 0,
      opacity: 0,
    },
  };
  useEffect(() => {
    if (showMenu && window) {
      window.document.body.style.position = "fixed";
    }
    if (!showMenu && window) {
      window.document.body.style.position = "static";
    }
  }, [showMenu]);
  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate={showMenu ? "show" : "hidden "}
      className={`modal-menu w-screen ${!showMenu && "pointer-events-none"}`}>
      {links.map((l, i) => {
        return l.text !== "whitepaper" ? (
          <motion.div key={i} className="text-3xl">
            <Anchor
              onClick={() => {
                setShowMenu(false);
              }}
              to={l.href}
              {...linkProps}>
              {l.text}
            </Anchor>
          </motion.div>
        ) : (
          <motion.div key={i} className="text-3xl ">
            <a
              // onClick={() => {
              //   setDiscord({ show: true, what: l.text });
              // }}
              key={i}
              className=" text-white relative top-0.5 "
              href={l.href}>
              {l.text}
            </a>{" "}
          </motion.div>
        );
      })}
      <motion.div key={10} className="text-3xl ">
        <a
          // onClick={() => {
          //   setDiscord({ show: true, what: l.text });
          // }}

          className=" text-white relative top-0.5 "
          href="https://portal.icdinos.io/">
          Portal
        </a>{" "}
      </motion.div>
      <button
        onClick={() => {
          setShowMenu(false);
          setShowLore(true);
        }}
        className="text-3xl text-white">
        story
      </button>
      <motion.div key={11} className="">
        <ConnectWallet />
      </motion.div>
      <motion.div key={12} className="  ">
        <Socials big modal />{" "}
      </motion.div>
      <img
        style={{ width: 64 }}
        className="block mx-auto"
        src="/imgs/dfinity-logo.png"
        alt="dfinity-blockchain"
      />
    </motion.div>
  );
}
