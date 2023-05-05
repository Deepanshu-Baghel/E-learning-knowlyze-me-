import React, { useState } from 'react';
import './Login.css';
import Register from './Register';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleRegister = () => {
    window.location.href = '/Register';
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="doit">
  <button type="submit" onClick={handleRegister}>Register</button>
  <button type="submit_login">Login</button>
</div>
      </form>
    </div>
  );
}

export default Login;
