import React, { useState } from 'react'

import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setshowLogin}) => {


   const [currState,setcurrState]=useState('Login')



  return (
    <div className='login-popup'>
      <form  className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='passwprd' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, i agree ti the terms of use & privacy policy.</p>
        </div>
        {currState==='Login'
        ?<p>Create a new account? <span   onClick={()=>setcurrState("Sign Up")} >Click here</span></p>
        :<p>Already have an account?<span onClick={()=>setcurrState("Login")} >Login here</span></p>
        }       
        
      </form>
    </div>
  )
}

export default LoginPopup
