import React from 'react';

export default function TimerCountItem({ time, text }) {
  return (
    <div className="flex flex-col items-start pl-1.5 text-white w-14 relative">
      <p className="timer-digits relative top-2">
        {time.length > 1 ? time : 0 + time}
      </p>
      {text === 'Seconds' ? (
        <p className="timer-date relative lg:left-1  ">{text}</p>
      ) : (
        <p className="timer-date relative lg:left-0.5  ">{text}</p>
      )}
    </div>
  );
}
