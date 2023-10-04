import React from 'react';
import logo from './logo-maya.png'
import './login.css'; 

function Login() {
  return (
    <div className="login-bg">
      <img src={logo} className="logo-login" alt='logo' />
      <div className="input-login">
        <label>Email</label>
        <input type="email" id="email" required />
      </div>
      <div className="input-login">
        <label>Password</label>
        <input type="password" id="password" required />
      </div>
      <button className="submit-login">SUBMIT</button>
    </div>
  );
}

export default Login;