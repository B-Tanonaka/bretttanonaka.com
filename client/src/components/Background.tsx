import React, { useState, useEffect, useRef } from 'react';

export default function Background() {
  const posRef = useRef<HTMLDivElement>(null);
  const [xPos, setXPos] = useState(50);
  const [yPos, setYPos] = useState(50);

  useEffect(() => {
    const trackMouse = (e: MouseEvent) => {
      if (!posRef.current) { return; }
      const { clientX, clientY } = e;
      // posRef.current.style.setProperty('--xPos', `${clientX}`);
      // posRef.current.style.setProperty('--yPos', `${clientY}`);
      setXPos(clientX);
      setYPos(clientY);
    };
    window.addEventListener('mousemove', trackMouse);

    return () => {
      window.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  const styling = () => (
    height: '100vh',
    width: '100%',
    background: `conic-gradient(from 45deg at ${xPos}px ${yPos}px, #EF7EF9, #D682D2, #E7EE9D, #C53D2B)`,
    zIndex: '10',
  )

  return (
    <>
      {/* <style jsx>
        { `.background {
          height: 100vh;
          width: 100%;
          background-image: conic-gradient(
            from 45deg at var(--xPos, 50%) var(--yPos, 50%)
            #EF7EF9,
            #D682D2,
            #E7EE9D,
            #C53D2B,
            )
          }`}
      </style> */}
      <div
        ref={posRef}
        className="background"
        style={}
      />
    </>
  );
}
