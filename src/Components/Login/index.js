import React from 'react'
import './index.scss'
const Login = () => {
  return (
    <div className='container login-pg'>
      <div className='form'>
        <form method='get'>
          <input type="text" placeholder='First Name'  />
          <input type="text" placeholder='Last Name'  />
          <input type="email" placeholder='Email'  />
          <input type="text" placeholder='Phone'  />
          <input type="text" placeholder='Password'  />
          <input type="text" placeholder='Confirm Password'  />
        </form>
      </div>
    </div>
  )
}

export default Login
