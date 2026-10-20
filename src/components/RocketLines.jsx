import { useRef, useState } from 'react';

function RocketLines() {
  const containerRef = useRef(null);
  const [activeLane, setActiveLane] = useState(3);

  const advanceRocket = () => {
    const width = containerRef.current?.clientWidth ?? 0;
    const lastLane = Math.min(31, 3 + Math.floor(Math.max(0, width - 1) / 40));
    setActiveLane((current) => current >= lastLane ? 3 : current + 1);
  };

  return (
    <div className="hero-poster-lines" ref={containerRef} aria-hidden="true">
      {Array.from({ length: 32 }, (_, index) => (
        <span className="rocket-lane" key={index} style={{ '--lane': index }}>
          {index === activeLane && <span className="line-rocket" onAnimationIteration={advanceRocket}>
            <svg viewBox="-16 -24 32 90" fill="none">
              <path d="M-7 12C-14 28-5 36-8 48L0 62 7 43C4 33 15 23 7 12Z" fill="#ff5a00" />
              <path d="M-6 12C-10 23-4 28-7 35L-2 32 0 57 5 37 3 31C11 23 8 17 6 12Z" fill="#ffc451" />
              <path d="M-3 13Q-5 24 0 35Q5 24 3 13Z" fill="#fff5d0" />
              <path d="M-7 6-13 17-5 14H5L13 17 7 6Z" fill="#9b64ef" />
              <path d="M0-20C-10-11-10 4-5 14H5C10 4 10-11 0-20Z" fill="#dbe1ef" stroke="#6940c5" strokeWidth="2" />
              <circle cy="-3" r="4" fill="#7042d2" />
            </svg>
          </span>}
        </span>
      ))}
    </div>
  );
}

export default RocketLines;
