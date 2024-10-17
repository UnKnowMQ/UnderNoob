import React, { useState } from 'react'
import './Register_popup.css'

const Register_popup = ({setShowRegister}) => {
    const [currentState, setCurrentState] = useState('Sign up');
    return (
      <div className='regis_popup'>
      <form className="regis">
        <div className='regis-title'>
          <h2>{currentState}</h2>
          
          <i className='fa fa-close' onClick={() => setShowRegister(false)}></i>
        </div>
        <div className='regis_inp'>
          {currentState==="Sign in" ? <></> :<input type='text' placeholder='Enter your username' required></input>}
          {currentState==="Sign up" ? <></> :<input type='text' placeholder='Enter your username or email' required></input>}
          {currentState==="Sign in" ? <></> : <input type='text' placeholder='Enter your email' required></input>}
          <input type='text' placeholder='Enter your password' required></input>
          {currentState==="Sign in" ? <></> : <input type='text' placeholder='Confirm your password' required></input>}
        </div>
        <button>{currentState==="Sign up" ? "Create Account" : "Sign in"}</button>
        <div className='regis_condition'>
          <input type='checkbox' required/>
          <span>  I agree to the terms of use and privacy policy</span>
        </div>
        {currentState==="Sign in"
        ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign up")}>Click here</span> </p>
        :<p>Already have a account? <span onClick={()=>setCurrentState("Sign in")}>Sign in</span></p> 
        }
      </form>
      </div>
    )
}

export default Register_popup
