import React, { useState } from 'react';
import './LoginForm.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState('');  // Ensure this is an empty string
  const [password, setPassword] = useState('');  // Ensure this is an empty string
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }

    // Handle login logic here
    console.log('Logging in with:', { email, password });
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='wrapper login-container'>
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit} autocomplete="off">
        <h2>Login to Your Account</h2>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}  // This should be an empty string by default
            onChange={(e) => setEmail(e.target.value)}
            required
            autocomplete="off"  // Optional: discourages browser autofill
          />
          <FaEnvelope className='icon' />
        </div>
        <div className="input-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}  // This should be an empty string by default
            onChange={(e) => setPassword(e.target.value)}
            required
            autocomplete="off"  // Optional: discourages browser autofill
          />
          <FaLock className='icon' />
          <span onClick={togglePasswordVisibility} className='password-toggle-icon'>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <div className="remember-forgot">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="/">Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="/">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
