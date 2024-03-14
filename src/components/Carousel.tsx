/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import { Image } from '../../interfaces';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel(
  { images }: { images: Image[] },
) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const displayImages = (img: Image) => (
    <div>
      <img src={img.src} alt={img.alt} />
    </div>
  );

  return (
    <div className="slider-container">
      <Slider {...settings}>
        { images.map((image: Image) => displayImages(image))}
      </Slider>
    </div>
  );
}
