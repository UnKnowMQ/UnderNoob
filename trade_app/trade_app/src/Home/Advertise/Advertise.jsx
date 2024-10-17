import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Advertise = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mb-4">
      <a href="https://app.adroll.com/optout/" target="_blank" rel="noopener noreferrer">
        <div id="__adroll_adchoices_icon_overlay">
          <img src="https://s.adroll.com/j/ad-choices.png" alt="Ad Choices" />
        </div>
      </a>
      <div className='ads mt-3'>
        <img 
          src="https://s.adroll.com/a/OQD/BFD/OQDBFDHYQ5ACZPQIH4PDRM.jpg" 
          alt="Advertise Image" 
          className="img-fluid mx-auto d-block w" 
        />
      </div>
    </div>
  );
}

export default Advertise;
