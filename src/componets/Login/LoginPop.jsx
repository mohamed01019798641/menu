/* eslint-disable react/prop-types */
import { useState } from 'react'
import './LoginPop.css'
import { assets } from '../../assets/assets'

const LoginPop = ({setShowlogin}) => {
    const [currStae,setcurrStae]=useState('Login');
  return (
    <div className='login'>
       <form className='login-con'>
        <div className='title'>
            <h2>{currStae}</h2>
            <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="inputs">
            {currStae==='Login'?<></>:   <input  type="text" placeholder='your name..' required/>}
            <input type="email" placeholder='your email..' required/>
            <input  type="password" placeholder='password..' required/>
        </div>
        <button >{currStae==='Sing up'?'Create Account':'Login'}</button>
        <div className='condition'>
            <input  type='checkbox' required />
            <p>By continuing,i agree to the terms of use & privecy policy.</p>
        </div>
        {currStae==='Login'?<p>Create a new account? <span onClick={()=>setcurrStae('Sing up')}>Click here</span></p>
        : <p>Alredy have an account? <span onClick={()=>setcurrStae('Login')}>Login here</span></p> 
        }
        
       
       </form>
    </div>
  )
}

export default LoginPop
