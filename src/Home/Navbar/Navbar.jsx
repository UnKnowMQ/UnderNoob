import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { PortContext } from '../../context/Portcontext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin, setShowRegister }) => {
  const { token, setToken } = useContext(PortContext);
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  const handleSignInClick = () => {
    setIsPopupOpen('login'); 
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setIsPopupOpen('register'); 
    setShowRegister(true);
  };

  const closePopup = () => setIsPopupOpen(null);

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />

      <div className='find'>
        <input className='search-input' placeholder='Search ...' />
        <i className="fa fa-search"></i>
      </div>

      <div className='sign'>
        {!token ? (
          <>
            {isPopupOpen !== 'register' && (
              <button className='sign_in' onClick={handleSignInClick}>
                Sign in
              </button>
            )}
            {isPopupOpen !== 'login' && (
              <button className='sign_up' onClick={handleSignUpClick}>
                Sign up
              </button>
            )}
          </>
        ) : (
          <div className='profile'>
            <i className="fa fa-user-circle">
              <ul>
                <li onClick={logout}>
                  <img src={assets.logout} className='logout' alt="Logout" />
                  <span> Logout</span>
                </li>
              </ul>
            </i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
