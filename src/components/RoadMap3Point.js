import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function RoadMap3Point({ point, idx }) {
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView && idx > 0) {
      const prevChild = document.querySelectorAll('.roadmap-point')[idx - 1];
      prevChild.querySelector('.road-line.bottom').classList.add('checked');
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className={`roadmap-point ${inView || point.isChecked ? 'checked' : ''}`}
    >
      <div className="road-line top">
        <div className="yellow-line w-full bg-orange"></div>
      </div>
      <div className="road-line bottom">
        <div className="yellow-line w-full bg-orange"></div>
      </div>
      <div
        className={`point-mark ${inView || point.isChecked ? 'checked' : ''}`}
      ></div>
      <div className="text-part">
        <p className="progress text-orange">{point.name}</p>
        <div className="columns">
          {point.content.map((p, i) => (
            <p className="">
              <span className="text-orange">{p.head}</span>{' '}
              <span>{p.text}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoadMap3Point;
