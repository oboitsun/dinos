import React, { useState, useEffect } from 'react';
import '../styles/team-member.scss';
export default function TeamMember({ bio }) {
  const [opened, setOpened] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    window && window.innerWidth <= 1024 && setMobile(true);
  }, []);
  const toggleOpened = () => {
    setOpened(!opened);
  };
  return (
    <div className="team-member">
      <div
        onMouseEnter={() => {
          !mobile && setOpened(true);
        }}
        onMouseLeave={() => {
          !mobile && setOpened(false);
        }}
        onClick={toggleOpened}
        className="avatar"
      >
        <img
          className="w-full object-cover h-full"
          src="/imgs/slider1-bg.png"
          alt="bg"
        />
        <img
          className={`egg ${opened && 'egg-opened'}`}
          src={bio.egg}
          alt="egg"
        />
        <img
          className={`dino ${opened && 'dino-opened'}`}
          src={bio.dino}
          alt="dino"
        />
      </div>
      <p className="team-name">{bio.name}</p>
      <p className="team-pos">{bio.position}</p>
    </div>
  );
}
