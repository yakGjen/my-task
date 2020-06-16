import React from 'react';

import './Carousel.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/img_1.png';
import img2 from '../../assets/img_2.png';
import img3 from '../../assets/img_3.png';
import img4 from '../../assets/img_4.png';
import img5 from '../../assets/img_5.png';
import img6 from '../../assets/img_6.png';

const imgs = [img1, img2, img3, img4, img5, img6];

const MyCarousel = () => (
  <Carousel className='my-carousel' showThumbs={false}>
    {imgs.map((item, i) => {
      return (
        <div key={i}>
          <img src={item} />
          <p className="legend">Picture {i + 1}</p>
        </div>
      );
    })}
      {/* <div>
          <img src={img1} />
          <p className="legend">Legend 1</p>
      </div>
      <div>
          <img src="../../assets/img_1.png" />
          <p className="legend">Legend 2</p>
      </div>
      <div>
          <img src="../../assets/img_1.png" />
          <p className="legend">Legend 3</p>
      </div> */}
  </Carousel>
);

export default MyCarousel;