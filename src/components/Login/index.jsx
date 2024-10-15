import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Signup from '../Signup';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedCredentials = JSON.parse(localStorage.getItem('user'));

    if (
      storedCredentials &&
      storedCredentials.username === credentials.username &&
      storedCredentials.password === credentials.password
    ) {
      const token = Math.random().toString(36).substring(2);
      localStorage.setItem('token', token);
      login(); 
      navigate('/');
    } else {
      alert('Username or password is incorrect');
    }
  };

  return (
    <div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <Signup />
    </div>
  );
};

export default Login;
