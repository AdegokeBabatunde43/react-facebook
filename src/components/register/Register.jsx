import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className="login">
    <div className='loginWrapper'>
        <div className="loginLeft">
        <h3 className='loginLogo'>Lamasocial</h3>
        <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial
        </span>
        </div>
        <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder='Username'   className='loginInput' />
                    <input type="Email" placeholder='Enter Email'   className='loginInput' />
                    <input type="Email" placeholder='Enter Password'   className='loginInput' />
                    <input type="Password" placeholder='Comfirm Password'   className='loginInput' />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log in Account</button>
                </div>
        </div>
    </div>
</div>
  )
}

export default Register