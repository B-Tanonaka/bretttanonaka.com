/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import { Image, RenderPhotoList } from '../../interfaces';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel(
  { images, type, renderProjectImages }:
    { images: Image[], type: string, renderProjectImages?: RenderPhotoList },
) {
  let settings;

  if (type === 'single-landscape') {
    settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  }

  if (type === 'center-portrait') {
    settings = {
      dots: true,
      className: 'center',
      infinite: true,
      slidesToShow: 3,
      speed: 500,
    };
  }

  const displayImages = (image: Image, key: number) => (
    <div key={key}>
      {renderProjectImages ? (
        renderProjectImages(image, key, '', images)
      ) : (
        <img src={image.src} alt={image.alt} />
      )}
    </div>
  );

  return (
    <div className="slider-container">
      <Slider {...settings}>
        { images.map((image: Image, key: number) => displayImages(image, key))}
      </Slider>
    </div>
  );
}
