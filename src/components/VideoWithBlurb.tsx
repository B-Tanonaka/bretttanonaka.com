import ReactPlayer from 'react-player/lazy';
import '../css/ProjectAssets.css';

export default function VideoWithBlurb(
  { info, contClassName, className }:
  { info: { link: string, blurb: string }, contClassName: string, className: string },
) {
  const config = {
    vimeo: {
      playerOptions: {
        autoplay: false,
        loop: false,
        controls: true,
      },
    },
    youtube: {
      playerVars: { showinfo: 1 },
    },
  };

  return (
    <div className={contClassName}>
      <div className={className}>
        <ReactPlayer
          url={info.link}
          className="react-player"
          width="100%"
          height="100%"
          config={config}
        />
      </div>
      <h4>{info.blurb}</h4>
    </div>
  );
}
