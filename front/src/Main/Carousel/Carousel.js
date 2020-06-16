import React from 'react';

import './Carousel.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/about-1.png';
import img2 from '../../assets/about-2.png';
import img3 from '../../assets/about-3.png';

const imgs = [img1, img2, img3];

const MyCarousel = () => (
  <Carousel className='my-carousel' showThumbs={false}>
    {imgs.map((item, i) => {
      return (
        <div key={i}>
          <img src={item} alt={`img-${i}`} />
          {/* <p className="legend">Picture {i + 1}</p> */}
        </div>
      );
    })}
  </Carousel>
);

export default MyCarousel;