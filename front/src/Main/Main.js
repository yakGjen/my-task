import React from 'react';

import './Main.scss';
import MyCarousel from './Carousel/Carousel';

const Main = () => (
  <main className='main'>
    <h1 className='main__header'>My task</h1>
    <MyCarousel />
  </main>
);

export default Main;