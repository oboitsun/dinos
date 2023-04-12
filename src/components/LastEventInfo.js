import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/last-event.scss";
const events = {
  drought: {
    name: "drought",
    label: "drought",
    imgSrc: "/imgs/event-icons/drought.svg",
  },
  storm: {
    name: "storm",
    label: "storm",
    imgSrc: "/imgs/event-icons/storm.svg",
  },
  comets: {
    name: "comets",
    label: "comets",
    imgSrc: "/imgs/event-icons/comets.svg",
  },
  tsunami: {
    name: "tsunami",
    label: "tsunami",
    imgSrc: "/imgs/event-icons/tsunami.svg",
  },
  blizzard: {
    name: "blizzard",
    label: "blizzard",
    imgSrc: "/imgs/event-icons/blizzard.svg",
  },
  earthquake: {
    name: "earthquake",
    label: "earthquake",
    imgSrc: "/imgs/event-icons/earthquake.svg",
  },
  hurricane: {
    name: "hurricane",
    label: "hurricane",
    imgSrc: "/imgs/event-icons/hurricane.svg",
  },
  volcano: {
    name: "volcano",
    label: "volcano",
    imgSrc: "/imgs/event-icons/volcano.svg",
  },
  fire: {
    name: "fire",
    label: "fire",
    imgSrc: "/imgs/event-icons/fire.svg",
  },
  flood: {
    name: "flood",
    label: "flood",
    imgSrc: "/imgs/event-icons/flood.svg",
  },
  "ice age": {
    name: "ice-age",
    label: "ice age",
    imgSrc: "/imgs/event-icons/ice-age.svg",
  },
  default: {
    name: "default",
    label: "last event",
    imgSrc: "/imgs/event-icons/ice-age.svg",
  },
};
export default function LastEventInfo() {
  const [currEvent, setCurrEvent] = useState(events["default"]);
  useEffect(() => {
    axios
      .get("https://stats-api.icdinos.com/api/game/get-last-event-ext")
      .then((res) => {
        setCurrEvent(
          events[res?.data?.event_data?.event_label?.toLowerCase()] ?? events["default"]
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`gradient-box ${currEvent.name}`}>
      <div className="inner">
        <div className="flex gap-6 items-center">
          <p className="last-event-announce">
            <span>last event</span>
          </p>
          <div className="last-event-data">
            <img src={currEvent.imgSrc} className={"last-event-icon"} alt={currEvent.label} />
            <p className="last-event-name">
              <span>{currEvent.label}</span>
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <a className="play-now-link" href="https://portal.icdinos.io">
          <span>play now</span>
        </a>
      </div>
    </div>
  );
}
