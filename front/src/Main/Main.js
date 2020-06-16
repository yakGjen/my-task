import React from 'react';

import './Main.scss';

import MyCarousel from './Carousel/Carousel';
import Form from './Form/Form';
import Routes from './Routes/Routes';

const Main = () => (
  <main className='main'>
    <h1 className='main__header'>My task</h1>
    <MyCarousel />
    <Form />
    <Routes />
  </main>
);

export default Main;