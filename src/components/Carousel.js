import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { images } from '../images/index';

export default () => (
  <Carousel autoPlay centerMode dynamicHeight>
    {images.map(img => (
      <div key={img}>
        <img src={img} alt='' />
        <div className='legend'>Legend</div>
      </div>
    ))}
  </Carousel>
);
