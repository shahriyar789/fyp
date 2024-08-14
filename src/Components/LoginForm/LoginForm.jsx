import React, { useState } from 'react';
import './LoginRegisterForm.css';
import EmailPopup from './EmailPopup';
import OTPPopup from './OTPPopup';
import NewPasswordPopup from './NewPasswordPopup';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isOTPPopupOpen, setIsOTPPopupOpen] = useState(false);
  const [isNewPasswordPopupOpen, setIsNewPasswordPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    console.log('Logging in with:', { email, password });
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
    setIsOTPPopupOpen(true);
  };

  const closeOTPPopup = () => {
    setIsOTPPopupOpen(false);
  };

  const openNewPasswordPopup = () => {
    setIsNewPasswordPopupOpen(true);
  };

  const closeNewPasswordPopup = () => {
    setIsNewPasswordPopupOpen(false);
  };

  return (
    <div className='wrapper login-container'>
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Login to Your Account</h2>
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
          <a href="#!" onClick={openEmailPopup}>Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="/">Register</a></p>
        </div>
      </form>

      {isEmailPopupOpen && <EmailPopup onClose={closeEmailPopup} onNext={openOTPPopup} />}
      {isOTPPopupOpen && <OTPPopup onClose={closeOTPPopup} onNext={openNewPasswordPopup} />}
      {isNewPasswordPopupOpen && <NewPasswordPopup onClose={closeNewPasswordPopup} />}
    </div>
  );
}

export default LoginForm;
