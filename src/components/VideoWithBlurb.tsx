import ReactPlayer from 'react-player/lazy';
import '../css/ProjectVideos.css';

export default function VideoWithBlurb(
  { info, className }:
  { className: string, info: { link: string, blurb: string } },
) {
  const config = {
    vimeo: {
      playerOptions: {
        autoplay: false,
        loop: false,
        controls: true,
      },
    },
  };

  return (
    <div className={className}>
      <div className="single-video">
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
