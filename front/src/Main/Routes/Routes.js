import React from 'react';

import './Routes.scss';

const secondRoute = async () => {
  const data = await fetch('http://localhost:4200/second');
  const result = await data.json();

  console.log('second route:', result);
};

const thirdRoute = async () => {
  const data = await fetch('http://localhost:4200/third');
  const result = await data.json();

  console.log('third route:', result);
};

const Routes = () => {
  return (
    <section className='routes'>
      <h2 className='routes__header'>other routes</h2>
      <button className='routes__button' onClick={secondRoute}>second route</button>
      <button className='routes__button' onClick={thirdRoute}>third route</button>
    </section>
  );
};

export default Routes;