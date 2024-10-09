import React, { useState } from 'react';
import Navbar from './Home/Navbar/navbar';
import Menu from './Home/Menu/Menu';
import LoginPopup from './Home/Login/Login_popup';
import RegisterPopup from './Home/Register/Register_popup';
import Inspire from './Home/Main/Inspire';
import News from './Home/News/News';
import Advertise from './Home/Advertise/Advertise';
import Below_News from './Home/News/Below_News'
import Footer from './Home/Footer/Footer';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {/* Render login and register pop-ups conditionally */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {showRegister && <RegisterPopup setShowRegister={setShowRegister} />}

      <div className='app'>
        {/* Navbar always visible; it controls login and register pop-ups */}
        <Navbar setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
        <Menu />
        
        {/* Conditionally render Inspire and News based on login and register pop-up states */}
        {!showLogin && !showRegister && (
          <>
            <Inspire />
            <News />
            <Advertise/>
            <Below_News/>
            <Footer />
          </>
        )}
        
      </div>
    </>
  );
};

export default App;
