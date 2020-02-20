import React from 'react';
import './App.css';
import { Subscribe } from './components/Subscribe';
import { Hero } from './components/Hero';
import { MomentoDePaz } from './components/MomentoDePaz';

function App() {
  return (
    <div className='App'>
      <div className='App__container'>
        <Hero />
        <MomentoDePaz />
        <Subscribe />
      </div>
    </div>
  );
}

export default App;
