import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin, setShowRegister}) => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      
      <div className='find'>
        <input className='search-input' placeholder='Search ...' />
        <i className="fa fa-search"></i>
      </div>
      
      <div className='sign'>
        <button className='sign_in' onClick={() => setShowLogin(true)}>Sign in</button>
        <button className='sign_up' onClick={() => setShowRegister(true)}>Sign up</button>
      </div>
      {/* <i class="fa fa-user-circle"></i> */} 
    </div>
  );
};

export default Navbar;
