// import { useNavigate } from 'react-router-dom';

import React, { useState } from "react";
import "./LoginRegisterForm.css";
import EmailPopup from "./EmailPopup";
import OTPPopup from "./OTPPopup";
import NewPasswordPopup from "./NewPasswordPopup";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isOTPPopupOpen, setIsOTPPopupOpen] = useState(false);
  const [isNewPasswordPopupOpen, setIsNewPasswordPopupOpen] = useState(false);

  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', { email, password });

      if (response.data.success) {
        onLogin();  // Trigger the authentication on success
      } else {
        setErrors({ form: 'Invalid email or password' });
      }
    } catch (error) {
      setErrors({ form: 'An error occurred. Please try again.' });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const openEmailPopup = () => {
    setIsEmailPopupOpen(true);
  };

  const closeEmailPopup = () => {
    setIsEmailPopupOpen(false);
  };

  const openOTPPopup = () => {
    setIsEmailPopupOpen(false);
    setIsOTPPopupOpen(true);
  };

  const closeOTPPopup = () => {
    setIsOTPPopupOpen(false);
  };

  const openNewPasswordPopup = () => {
    setIsOTPPopupOpen(false);
    setIsNewPasswordPopupOpen(true);
  };

  const closeNewPasswordPopup = () => {
    setIsNewPasswordPopupOpen(false);
  };

  const handlePasswordUpdate = () => {
    setIsNewPasswordPopupOpen(false);
    alert('Password updated successfully!');
  };

  const navigateToRegister = () => {
    navigate('/register');  // Navigate to the Register page
  };

  return (
    <div className='wrapper login-container'>
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Login to Your Account</h2>
        {errors.form && <p className="error-message">{errors.form}</p>}
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
          <FaEnvelope className='icon' />
        </div>
        <div className="input-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="off"
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
          <a href="#!" onClick={openEmailPopup}>
            Forgot password?
          </a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#!" onClick={navigateToRegister}>Register</a></p> {/* Add onClick to navigate */}
        </div>
      </form>

      {isEmailPopupOpen && (
        <EmailPopup onClose={closeEmailPopup} onNext={openOTPPopup} />
      )}
      {isOTPPopupOpen && (
        <OTPPopup onClose={closeOTPPopup} onNext={openNewPasswordPopup} />
      )}
      {isNewPasswordPopupOpen && (
        <NewPasswordPopup onClose={closeNewPasswordPopup} onPasswordUpdate={handlePasswordUpdate} />
      )}
    </div>
  );
}

export default LoginForm;
