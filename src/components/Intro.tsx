import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { AboutInfo } from '../../interfaces';

export default function Intro({ data }: { data: AboutInfo }) {
  const { category } = useParams();
  const validCategory: string = category!;
  const [showMaintenance, setShowMaintenance] = useState(false);

  useEffect(() => {
    // If data isn't there, set a timer to show maintenance after 3s
    if (!data || !data[validCategory]) {
      const timer = setTimeout(() => {
        setShowMaintenance(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
    // Reset maintenance if data arrives
    setShowMaintenance(false);
    return () => {};
  }, [data, validCategory]);

  return (
    <div className="home-container" id="home">
      <div className="home-wrapper">
        { data[validCategory] ? (
          <p>
            <span className="home-main-text">{data[validCategory].intro.main}</span> <span className="home-sec-text">{data[validCategory].intro.sec}</span>
          </p>
        ) : showMaintenance ? (
          <p>
            <span className="home-main-text">Website is currently undergoing maintenance. Please try again later.</span>
          </p>
        ) : (
          <p>
            <span className="skeleton-box skeleton-main"></span>
            <span className="skeleton-box skeleton-sec"></span>
          </p>
        )}
      </div>
    </div>
  );
}
