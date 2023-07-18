import React, { useState, useEffect } from 'react';

export default function Background() {
  const [xPos, setXPos] = useState<number>(500);
  const [yPos, setYPos] = useState<number>(500);

  useEffect(() => {
    const trackMouse = (e: MouseEvent) => {
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
      style={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        opacity: '70%',
        zIndex: '-10',
        backgroundImage: `radial-gradient(49% 81% at 45% 47%, #03FFC945 0%, #073AFF00 100%),
        radial-gradient(113% 91% at 17% -2%, #FF8C003D 1%, #FF000000 99%),
        radial-gradient(142% 91% at 86% 30%, #8D00FF87 0%, #FF000000 99%),
        radial-gradient(142% 91% at 4% 58%, #FF00E56E 1%, #00FFE000 99%),
        radial-gradient(142% 96% at ${xPos}px ${yPos}px, #D700FFB0 0%, #00C1FFFF 98%)`,
      }}
    />
  );
}
