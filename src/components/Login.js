// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import styles from './Login.module.css'; // Import the CSS module


const Login = () => {
  const handleLogin = () => {
   
  if(!userName || !pass)
  {
    setErr(true);
    return
  }

    alert('Login succeffull');
    navigate("/")
  };
  
  const navigate = useNavigate();
  const [err, setErr] = useState(false)
  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('')

  return (
    <div className={styles.login_container}>
      <h2>Login</h2>
      <div className={styles['form-group']}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" className={err && !userName? styles['red'] :  styles['input-field']} onChange={(e) => setUserName(e.target.value)}/>
        {err && !userName ? <div style={{color:"red"}} >Required</div> : null }
      </div>
      <div className={styles['form-group']}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className={err && !pass? styles['red'] :  styles['input-field']} onChange={(e) => setPass(e.target.value)}/>
        {err && !pass ? <div style={{color:"red"}} >Required</div> : null }
      </div>
      <button className={styles['login-btn']} onClick={handleLogin}>
        Login
      </button>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
