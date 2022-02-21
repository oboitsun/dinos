import { useEffect } from 'react';

function DiscordPopup({ showDiscord, setDiscord }) {
  const handleClosePopUp = () => {
    setDiscord((prev) => ({ ...prev, show: false }));
  };
  useEffect(() => {
    const timedOut = showDiscord.show && setTimeout(handleClosePopUp, 1500);
    return function () {
      clearTimeout(timedOut);
    };
  }, [showDiscord]);
  return (
    <div
      onClick={handleClosePopUp}
      className={`${
        showDiscord.show ? 'opacity-100 ' : 'pointer-events-none opacity-0'
      } transition-all duration-300 fixed z-50 bg-black bg-opacity-70 top-0 left-0 w-screen h-screen flex justify-center items-center`}
    >
      <p className="text-xl xl:text-7xl text-center text-white">
        {showDiscord?.what || 'Discord'} is coming soon:)
      </p>
    </div>
  );
}

export default DiscordPopup;
