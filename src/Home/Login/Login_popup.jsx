import React, { useState } from 'react'
import './Login_popup.css'
const Login_popup = ({setShowLogin}) => {
  const [currentState, setCurrentState] = useState("Sign in");
  return (
    <div className='login_pop'>
      <form className="log">
        <div className='log-title'>
          <h2>{currentState}</h2>
          <i className='fa fa-close' onClick={()=> setShowLogin(false)}></i>
        </div>
        <div className='log_inp'>
          {currentState==="Sign in" ? <></> :<input type='text' placeholder='Enter your username' required></input>}
          {currentState==="Sign up" ? <></> :<input type='text' placeholder='Enter your username or email' required></input>}
          {currentState==="Sign in" ? <></> : <input type='text' placeholder='Enter your email' required></input>}
          <input type='text' placeholder='Enter your password' required></input>
          {currentState==="Sign in" ? <></> : <input type='text' placeholder='Confirm your password' required></input>}
        </div>
        <button>{currentState==="Sign up" ? "Create Account" : "Sign in"}</button>
        <div className='log_condition'>
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

export default Login_popup


