import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo8 from '../productImages/Galitos.jpeg';
import logo1 from '../productImages/logoadega.jpeg.png';
import logo4 from '../productImages/logoalonseason.jpg';
import logo2 from '../productImages/logofiuza.jpeg';
import logo5 from '../productImages/logoporto.jpg';
import logo3 from '../productImages/logotrijol.jpeg';
import logo6 from '../productImages/Nativereservalogo.png';
import logo7 from '../productImages/oceaniuslogo.jpg';
import './slider.css';

const logos = [
  { id: 1, src: logo1, alt: 'Logo 1' },
  { id: 2, src: logo2, alt: 'Logo 2' },
  { id: 3, src: logo3, alt: 'Logo 3' },
  { id: 4, src: logo4, alt: 'Logo 4' },
  { id: 5, src: logo5, alt: 'Logo 5' },
  { id: 6, src: logo6, alt: 'Logo 6' },
  { id: 7, src: logo7, alt: 'Logo 7' },
  { id: 8, src: logo8, alt: 'Logo 8' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 480, // breakpoint from which settings should be applied
      settings: {
        slidesToShow: 1, // show only 1 slide on screens smaller than 480px
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderComponent = () => {
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {logos.map((logo) => (
          <div key={logo.id}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
