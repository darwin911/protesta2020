import React from 'react';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Hero = () => {
  return (
    <section className='hero'>
      <header>
        <h1 className='hero__heading'>Protesta 2020</h1>
      </header>
      <h3>Plaza de la Bandera</h3>
      <p>Ya es hora.</p>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Carousel />
      </div>
    </section>
  );
};
