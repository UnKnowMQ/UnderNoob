import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Footer.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
  return (
    <div className='fot'>
        <div className='comp'>
            <h1>UnderNoob</h1>
        </div>
        <div className='link_ref'>
        <a
        href='https://www.facebook.com/profile.php?id=100013709018888'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Facebook'
        style={{fontSize: "2.5rem"}}
      >
        <i className="bi bi-facebook"></i>
      </a>
      <a
        href='https://www.youtube.com/channel/UCXRRGi2uJ9Pk4LKcQ8TXnDQ'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Facebook'
      >
        <i className='bi bi-youtube' style={{fontSize: "2.5rem"}}></i>
      </a>
      <i className='bi bi-instagram' style={{fontSize: "2.5rem"}}></i>
      
      <i className='bi bi-twitter' style={{fontSize: "2.5rem"}}></i>
        </div>
        <div className='below'>
        * Copyright © 2024 UnderNoob Inc. All rights reserved. Registration on or use of this site constitutes acceptance of our Terms of Service and Privacy Policy.
        </div>
    </div>
  );
}

export default Footer;
