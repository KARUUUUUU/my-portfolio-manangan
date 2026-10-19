import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationLoader() {
  const navigate = useNavigate();
  const navigation = useRef(navigate);
  useEffect(() => { navigation.current = navigate; }, [navigate]);
  const [visible, setVisible] = useState(true);
  const [cycle, setCycle] = useState(0);
  const [caught, setCaught] = useState(false);
  const [released, setReleased] = useState(false);
  const releasing = useRef(false);
  const releaseTimer = useRef(null);
  useEffect(() => () => clearTimeout(releaseTimer.current), []);
  const isCaught = useRef(false);
  const scene = useRef(null);
  const departureTime = useRef(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const touchPointer = useRef(null);
  const usedTouch = useRef(false);
  const [touchControls, setTouchControls] = useState(false);

  useEffect(() => {
    let finish;
    let switchPage;
    const start = () => {
      clearTimeout(finish);
      clearTimeout(switchPage);
      setCycle((value) => value + 1);
      isCaught.current = false;
      touchPointer.current = null;
      usedTouch.current = false;
      setTouchControls(false);
      setCaught(false);
      setReleased(false);
      releasing.current = false;
      clearTimeout(releaseTimer.current);
      departureTime.current = performance.now() + 3900;
      setVisible(true);
      finish = setTimeout(() => { if (!isCaught.current) setVisible(false); }, 5000);
    };
    const initial = setTimeout(start, 0);
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest('a[href]');
      const backButton = event.target.closest('.archive-nav button');
      if (!anchor && !backButton) return;
      const url = new URL(backButton ? '/' : anchor.href, window.location.href);
      // Keep in-page section navigation immediate.
      if (url.origin === location.origin && url.pathname === location.pathname && url.hash) return;
      start();
      if (url.origin === location.origin && ['/', '/archive'].includes(url.pathname) && !anchor?.target) {
        event.preventDefault();
        event.stopPropagation();
        switchPage = setTimeout(() => {
          navigation.current(url.pathname + url.search + url.hash);
        }, 3000);
      }
    };
    document.addEventListener('click', onClick, true);
    return () => {
      clearTimeout(initial);
      clearTimeout(finish);
      clearTimeout(switchPage);
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  if (!visible) return null;

  const steer = (event) => {
    if (!isCaught.current || releasing.current || !scene.current) return;
    if (touchPointer.current !== null && event.pointerId !== touchPointer.current) return;
    const bounds = scene.current.getBoundingClientRect();
    setPosition({
      x: (event.clientX - bounds.left) * 400 / bounds.width - 200,
      y: (event.clientY - bounds.top) * 400 / bounds.height - 41,
    });
  };

  const catchRocket = (event) => {
    if (performance.now() < departureTime.current || isCaught.current) return;
    isCaught.current = true;
    setCaught(true);
    steer(event);
  };

  const releaseRocket = () => {
    if (!isCaught.current || releasing.current) return;
    releasing.current = true;
    setReleased(true);
    releaseTimer.current = setTimeout(() => setVisible(false), 1100);
  };

  const grabRocket = (event) => {
    if (!event.isPrimary || performance.now() < departureTime.current || isCaught.current) return;
    if (event.pointerType !== 'mouse') {
      event.preventDefault();
      touchPointer.current = event.pointerId;
      usedTouch.current = true;
      setTouchControls(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    catchRocket(event);
  };

  const endDrag = (event) => {
    if (event.pointerId !== touchPointer.current) return;
    releaseRocket();
    touchPointer.current = null;
  };

  return (
    <div key={cycle} className={`navigation-loader${caught ? ' is-caught' : ''}${released ? ' is-released' : ''}`} role="status" aria-live="polite"
      onPointerMove={steer}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onLostPointerCapture={endDrag}
      onClick={() => { if (!usedTouch.current) releaseRocket(); }}>
      <svg ref={scene} className="loader-scene" viewBox="0 0 400 400" aria-hidden="true">
        <defs>
          <path id="loader-visor-shape" d="M530 603 C698 505 878 464 1049 455 C1146 569 1171 718 1117 868 C1074 978 1013 1050 941 1096 C751 1014 608 818 530 603Z" />
          <mask id="loader-shell-mask">
            <rect width="1254" height="1254" fill="white" />
            <use href="#loader-visor-shape" fill="black" />
          </mask>
          <clipPath id="loader-visor-clip"><use href="#loader-visor-shape" /></clipPath>
          <linearGradient id="loader-fire" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#fff5d0" />
            <stop offset=".25" stopColor="#ffc451" />
            <stop offset=".6" stopColor="#ff5a00" />
            <stop offset="1" stopColor="#e73500" stopOpacity="0" />
          </linearGradient>
          <filter id="loader-fire-glow" x="-100%" y="-50%" width="300%" height="200%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>
        <g className="loader-helmet-exit">
        <g transform="translate(90 90) scale(.1754)">
          <use href="#loader-visor-shape" fill="#171127" />
          <image href="/Kairunaught.png" width="1254" height="1254" mask="url(#loader-shell-mask)" />
          <g className="loader-visor">
            <image href="/Kairunaught.png" width="1254" height="1254" clipPath="url(#loader-visor-clip)" />
          </g>
        </g>
        </g>
        <g className="loader-rocket-exit" style={caught ? {
          animation: released ? 'rocket-release 800ms cubic-bezier(.4, 0, 1, .5) forwards' : 'none',
          transform: `translate(${position.x}px, ${position.y}px)`,
          '--release-x': `${position.x}px`, '--release-y': `${position.y}px`,
        } : undefined}>
        <g className="loader-rocket-orbit">
          <g className="loader-catch-target" onPointerEnter={(event) => { if (event.pointerType === 'mouse') catchRocket(event); }} onPointerDown={grabRocket} transform="translate(200 41) rotate(90) scale(1.2)">
            <rect x="-22" y="-26" width="44" height="90" fill="transparent" />
            <g className="loader-flame">
              <path d="M-7 12C-14 28-5 36-8 48L0 62 7 43C4 33 15 23 7 12Z" fill="#ff5a00" filter="url(#loader-fire-glow)" />
              <path d="M-6 12C-10 23-4 28-7 35L-2 32 0 57 5 37 3 31C11 23 8 17 6 12Z" fill="url(#loader-fire)" />
              <path d="M-3 13Q-5 24 0 35Q5 24 3 13Z" fill="#fff5d0" />
            </g>
            <path d="M-7 6-13 17-5 14H5L13 17 7 6Z" fill="#9b64ef" />
            <path d="M0-20C-10-11-10 4-5 14H5C10 4 10-11 0-20Z" fill="#dbe1ef" stroke="#6940c5" strokeWidth="2" />
            <circle cy="-3" r="4" fill="#7042d2" />
          </g>
        </g>
        </g>
      </svg>
      <p>{released ? 'Off to explore…' : caught ? (touchControls ? 'Drag to steer · Lift to release' : 'Move to steer · Click to release') : 'Preparing for launch…'}</p>
    </div>
  );
}
