import { useState, useEffect } from 'react';

export default function Background({ category }: { category: string }) {
  const [xPos, setXPos] = useState<number>(500);
  const [yPos, setYPos] = useState<number>(500);

  let type;

  useEffect(() => {
    const trackMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setTimeout(() => { setXPos(clientX); }, 300);
      setTimeout(() => { setYPos(clientY); }, 300);
    };
    window.addEventListener('mousemove', trackMouse);

    return () => {
      window.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  if (category === 'video') {
    type = `
    radial-gradient(49% 81% at 45% 47%, rgb(236 238 183 / 20%) 0%, rgba(7, 58, 255, 0) 100%),
    radial-gradient(113% 91% at 17% -2%, rgb(255 232 129 / 24%) 1%, rgba(255, 0, 0, 0) 99%),
    radial-gradient(142% 91% at 86% 30%, rgb(241 224 170 / 70%) 0%, rgba(255, 0, 0, 0) 99%),
    radial-gradient(142% 91% at 4% 58%, rgb(240 81 223 / 40%) 1%, rgba(0, 255, 224, 0) 99%),
    radial-gradient(142% 96% at ${xPos}px ${yPos}px, rgba(215, 0, 255, 0.69) 0%, rgb(230 243 181) 98%)`;
  } else if (category === 'engineer') {
    type = `
    radial-gradient(49% 81% at 45% 47%, #03FFC945 0%, #073AFF00 100%),
    radial-gradient(113% 91% at 17% -2%, #FF8C003D 1%, #FF000000 99%),
    radial-gradient(142% 91% at 86% 30%, #8D00FF87 0%, #FF000000 99%),
    radial-gradient(142% 91% at 4% 58%, #FF00E56E 1%, #00FFE000 99%),
    radial-gradient(142% 96% at ${xPos}px ${yPos}px, #D700FFB0 0%, #00C1FFFF 98%)`;
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        opacity: '70%',
        zIndex: '-10',
        backgroundImage: type,
      }}
    />
  );
}
