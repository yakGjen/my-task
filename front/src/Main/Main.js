import React from 'react';

import './Main.scss';

import MyCarousel from './Carousel/Carousel';
import Form from './Form/Form';

const Main = () => (
  <main className='main'>
    <h1 className='main__header'>My task</h1>
    <MyCarousel />
    <Form />
  </main>
);

export default Main;