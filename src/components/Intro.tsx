import { useParams } from 'react-router-dom';
import type { AboutInfo } from '../../interfaces';

export default function Intro({ data }: { data: AboutInfo }) {
  const { category } = useParams();
  const validCategory: string = category!;

  return (
    <div className="home-container" id="home">
      <div className="home-wrapper">
        { data[validCategory] ? (
          <p>
            <span className="home-main-text">{data[validCategory].intro.main}</span>
            <span className="home-sec-text">{data[validCategory].intro.sec}</span>
          </p>
        ) : (
          <p>
            <span className="home-main-text">Website is currently undergoing maintenance. Please try again later.</span>
          </p>
        )}
      </div>
    </div>
  );
}
