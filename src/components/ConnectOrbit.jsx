import { useId } from 'react';

import glyphs from '../assets/connect-glyphs.json';

function ConnectOrbit() {
  const id = useId().replace(/:/g, '');
  return (
    <svg className="connect-orbit-overlay" viewBox={glyphs.viewBox} preserveAspectRatio="xMinYMin meet" aria-hidden="true">
      <defs><path id={`${id}-route`} d={glyphs.route} /></defs>
      <g fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeWidth="4" strokeLinejoin="round">
        {glyphs.letters.map((d, i) => <path key={i} d={d} />)}
      </g>
      <g className="connect-traveler">
        <circle r="6" fill="#bc8af4" />
        {[13, 18, 23].map((distance, index) => (
          <g key={distance} transform="rotate(-25)">
            <g transform="scale(1)">
              <g>
                <animateTransform attributeName="transform" type="rotate"
                  from={`${index * 120} 0 0`} to={`${index * 120 + 360} 0 0`}
                  dur={`${4 + index * 2}s`} repeatCount="indefinite" />
                <circle cx={distance} r={3 - index * 0.5} fill="#dfc2ff" />
              </g>
            </g>
          </g>
        ))}
        <animateMotion dur="150s" begin="0s" repeatCount="indefinite" calcMode="paced">
          <mpath href={`#${id}-route`} />
        </animateMotion>
      </g>
    </svg>
  );
}

export default ConnectOrbit;
