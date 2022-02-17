import Burger from './Burger';
import Logo from './Logo';
import { Link as Anchor } from 'react-scroll';
import '../styles/header.scss';
import Socials from './Socials';
import ConnectWallet from './ConnectWallet';

export default function Header({
  setDiscord,
  showPopup,
  setShowPopup,
  userAddress,
  setUserAddress,
  showMenu,
  setShowMenu,
  scrolled,
}) {
  const links = [
    { href: 'about-us', text: 'About' },
    { href: 'percs', text: 'Perks' },
    { href: 'roadmap', text: 'Roadmap' },
    { href: 'https://dino-portal.vercel.app', text: 'Portal' },
    { href: 'faq', text: 'FAQ' },
  ];

  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: 'active',
    className: 'anchor text-white  relative top-0.5  mr-5',
  };
  return (
    <div
      id="header"
      className={` ${
        scrolled ? 'bg-turf bg-opacity-80 py-3 shadow-lg' : 'py-7'
      }`}
    >
      {' '}
      <div className="my-container justify-between flex items-center">
        {' '}
        <div className="w-1/4 lg:w-1/8 flex justify-center  flex-shrink-0 ">
          <Logo wide={false} />
        </div>
        <div className="hidden lg:flex    ">
          {links.map((l, i) => {
            return l.text !== 'Portal' ? (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ) : (
              <p
                onClick={() => {
                  setShowPopup(true);
                }}
                key={i}
                className="anchor text-white relative top-0.5 mr-5"
                href={l.href}
              >
                {l.text}
              </p>
            );
          })}
        </div>
        <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        <div className="hidden lg:flex lg:w-1/4 text-xs xl:text-base font-bold lg:gap-6   xl:gap-10 items-center  flex-shrink-0 min-w-max">
          <ConnectWallet
            header
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            setUserAddress={setUserAddress}
            userAddress={userAddress}
          />
          <Socials setDiscord={setDiscord} />
        </div>
      </div>
    </div>
  );
}
