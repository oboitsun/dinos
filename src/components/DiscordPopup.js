import { useEffect } from 'react';

function DiscordPopup({ showDiscord, setDiscord }) {
  useEffect(() => {
    const timedOut =
      showDiscord &&
      setTimeout(() => {
        setDiscord(false);
      }, 1500);
    return function () {
      clearTimeout(timedOut);
    };
  }, [showDiscord]);
  return (
    <div
      onClick={() => {
        setDiscord(false);
      }}
      className={`${
        showDiscord ? 'opacity-100 ' : 'pointer-events-none opacity-0'
      } transition-all duration-300 fixed z-50 bg-black bg-opacity-70 top-0 left-0 w-screen h-screen flex justify-center items-center`}
    >
      <p className="text-xl xl:text-7xl text-center text-white">
        Coming Soon:)
      </p>
    </div>
  );
}

export default DiscordPopup;
