import React, { useContext, useState } from 'react';
import './Login_popup.css';
import axios from 'axios';
import { PortContext } from '../../context/Portcontext';

const Login_popup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(PortContext);
  const [currentState, setCurrentState] = useState('Sign in');
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validatePassword = () => {
    if (currentState === 'Sign up' && data.password !== data.confirmpassword) {
      alert('Passwords do not match!');
      return false;
    }
    return true;
  };

  const onLogin = async (event) => {
    event.preventDefault();
    if (!validatePassword()) return;

    let newUrl = url;
    if (!newUrl) {
      alert('Base URL is not defined.');
      return;
    }

    newUrl += currentState === 'Sign in' ? '/api/user/login' : '/api/user/register';

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during login/register:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleStateChange = (newState) => {
    setCurrentState(newState);
    setData({ name: '', email: '', password: '', confirmpassword: '' }); 
  };
  

  return (
    <div className='login_pop'>
      <form onSubmit={onLogin} className='log'>
        <div className='log-title'>
          <h2>{currentState}</h2>
          <i className='fa fa-close' onClick={() => setShowLogin(false)}></i>
        </div>
        <div className='log_inp'>
          {currentState === 'Sign up' && (
            <input
              name='name'
              onChange={onChangeHandle}
              value={data.name}
              type='text'
              placeholder='Enter your username'
              required
            />
          )}
          {currentState === 'Sign in' && (
            <input
              name='email'
              onChange={onChangeHandle}
              value={data.email}
              type='text'
              placeholder='Enter your username or email'
              required
            />
          )}
          {currentState === 'Sign up' && (
            <input
              name='email'
              onChange={onChangeHandle}
              value={data.email}
              type='email'
              placeholder='Enter your email'
              required
            />
          )}
          <input
            name='password'
            onChange={onChangeHandle}
            value={data.password}
            type='password'
            placeholder='Enter your password'
            required
          />
          {currentState === 'Sign up' && (
            <input
              name='confirmpassword'
              onChange={onChangeHandle}
              value={data.confirmpassword}
              type='password'
              placeholder='Confirm your password'
              required
            />
          )}
        </div>
        <button type='submit'>
          {currentState === 'Sign up' ? 'Create Account' : 'Sign in'}
        </button>
        <div className='log_condition'>
          <input type='checkbox' required />
          <span> I agree to the terms of use and privacy policy</span>
        </div>
        {currentState === 'Sign in' ? (
          <p>
            Create a new account?{' '}
            <span onClick={() => handleStateChange('Sign up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <span onClick={() => handleStateChange('Sign in')}>Sign in</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login_popup;
