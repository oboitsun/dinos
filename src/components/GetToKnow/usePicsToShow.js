import React from "react";

export default function usePicsToShow() {
  const [picsToShow, setPicsToShow] = React.useState(4);
  React.useEffect(() => {
    function handleResize() {
      setPicsToShow(window.innerWidth > 767 ? 6 : 4);
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return picsToShow;
}
