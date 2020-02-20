import React from 'react';
import './App.css';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div className='App'>
      <h1 style={{ fontSize: '3em' }}>Protesta 2020</h1>
      <h3>Plaza de la Bandera</h3>
      <p>Ya es hora.</p>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
