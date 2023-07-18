import React, { useState, useEffect, useRef } from 'react';

export default function Background() {
  const posRef = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState<number>(500);
  const [yPos, setYPos] = useState<number>(500);

  useEffect(() => {
    const trackMouse = (e: MouseEvent) => {
      if (!posRef.current) { return; }
      const { clientX, clientY } = e;
      setTimeout(() => { setXPos(clientX); }, 1000);
      setTimeout(() => { setYPos(clientY); }, 1000);
    };
    window.addEventListener('mousemove', trackMouse);

    return () => {
      window.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  return (
    <div
      ref={posRef}
      className="background"
      style={{
        height: '100vh',
        width: '100%',
        backgroundImage: `radial-gradient(49% 81% at 45% 47%, #FFE20345 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #CF00FF30 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #FAFF0094 30%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #FF00E169 1%, #FF000000 99%),radial-gradient(75% 75% at ${xPos}px ${yPos}px, #FAFF003D 0%, #FF07F94D 100%)`,
        zIndex: '10',
      }}
    />
  );
}
