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
        background: `conic-gradient(from 45deg at ${xPos}px ${yPos}px, #EF7EF9, #D682D2, #E7EE9D, #C53D2B, transparent 100%)`,
        zIndex: '10',
      }}
      // style={{
      //   height: '100vh',
      //   width: '100%',
      //   backgroundImage: `radial-gradient(49% 81% at ${xPos} ${yPos}, #FFE20345 0%, #073AFF00 100%), radial-gradient(113% 91% at ${xPos} ${yPos}, #FF5A00FF 1%, #FF000000 99%),radial-gradient(142% 91% at ${xPos} ${yPos}, #FFDB00FF 1%, #FF000000 99%),radial-gradient(142% 91% at ${xPos} ${yPos}, #FF0049FF 1%, #FF000000 99%),radial-gradient(142% 91% at ${xPos} ${yPos}, #FF7000FF 0%, #FF0000FF 100%);`,
      //   zIndex: '10',
      // }}
    />
  );
}
