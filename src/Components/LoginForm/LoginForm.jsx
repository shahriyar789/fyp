import React, { useState, useEffect } from 'react';
import './LoginForm.css';
import { FaUserAlt, FaLock } from "react-icons/fa";

function LoginForm() {
  // State variables for username, password, and rememberMe
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // useEffect to handle "Remember me" functionality
  // This runs once when the component mounts
  useEffect(() => {
    // Check if a username is stored in localStorage
    const rememberedUsername = localStorage.getItem('rememberedUsername');
    if (rememberedUsername) {
      // If a username is found, set the username state and check the "Remember me" checkbox
      setUsername(rememberedUsername);
      setRememberMe(true);
    }
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Store or remove the username in localStorage based on the "Remember me" checkbox
    if (rememberMe) {
      localStorage.setItem('rememberedUsername', username);
    } else {
      localStorage.removeItem('rememberedUsername');
    }

    // Handle login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className='wrapper login-container'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          {/* Username input field */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUserAlt className='icon' /> {/* User icon */}
        </div>
        <div className="input-box">
          {/* Password input field */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className='icon' /> {/* Lock icon */}
        </div>
        <div className="remember-forgot">
          {/* Remember me checkbox */}
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          {/* Forgot password link */}
          <a href="/">Forgot password?</a>
        </div>
        {/* Login button */}
        <button type='submit'>Login</button>
        <div className="register-link">
          {/* Link to register */}
          <p>Don't have an account? <a href="/">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
