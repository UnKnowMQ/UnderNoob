import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import { assets } from '../../assets/assets'; 

import './Inspire.css';

const slideImages = [
  assets.tp7,
  assets.tp2,
  assets.tp3,
  assets.tp4,
  assets.tp5
];

const divStyle = {
  height: '250px',          
  width: '100%',      
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',   
  backgroundColor: '#f0f0f0' 
  
};

const Inspire = () => {
  return (
    <div className='slide-container' style={{ width: '100vw', height: '400px' }}>
      <Fade duration={4000}>
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${image})`
              }}
            ></div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Inspire;
