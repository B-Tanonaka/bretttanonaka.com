import React, { useState, useEffect, useRef } from 'react';

export default function Background() {
  const posRef = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState<number>(500);
  const [yPos, setYPos] = useState<number>(500);

  useEffect(() => {
    const trackMouse = (e: MouseEvent) => {
      if (!posRef.current) { return; }
      const { clientX, clientY } = e;
      setXPos(clientX);
      setYPos(clientY);
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
        background: `conic-gradient(from 45deg at ${xPos}px ${yPos}px, #EF7EF9, #D682D2, #E7EE9D, #C53D2B)`,
        zIndex: '10',
      }}
    />
  );
}
