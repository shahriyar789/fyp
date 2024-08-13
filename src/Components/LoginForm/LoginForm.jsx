import React, { useEffect, useState } from "react";
import "./LoginRegisterForm.css";
import EmailPopup from "./EmailPopup";
import OTPPopup from "./OTPPopup";
import NewPasswordPopup from "./NewPasswordPopup";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

function LoginForm() {
  const [email, setEmail] = useState(""); // Ensure this is an empty string
  const [password, setPassword] = useState(""); // Ensure this is an empty string
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
  const [isOTPPopupOpen, setIsOTPPopupOpen] = useState(false);
  const [isNewPasswordPopupOpen, setIsNewPasswordPopupOpen] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
    
    try {
      const res = await axios.post("/auth/login", { email, password });
      console.log(res.data);
    } catch (error) {
      setEmail("");
      setPassword("")
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.field) {
          setErrors({ [errorData.field]: errorData.message });
        }
      }
    }
  };

  useEffect(() => {
    if (email) {
      setErrors(prevErrors => ({ ...prevErrors, email: "" }));
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      setErrors(prevErrors => ({ ...prevErrors, password: "" }));
    }
  }, [password]);

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
    <div className="wrapper login-container">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Login to Your Account</h2>
          {errors.email && <p className="error-message">{errors.email}</p>}
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email} // This should be an empty string by default
            onChange={(e) => setEmail(e.target.value)}
            required
            autocomplete="off" // Optional: discourages browser autofill
          />
          <FaEnvelope className="icon" />
        </div>
        {errors.password && <p className="error-message">{errors.password}</p>}
        <div className="input-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password} // This should be an empty string by default
            onChange={(e) => setPassword(e.target.value)}
            required
            autocomplete="off" // Optional: discourages browser autofill
          />
          <FaLock className="icon" />
          <span
            onClick={togglePasswordVisibility}
            className="password-toggle-icon"
          >
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
        <button type="submit">Login</button>
        <div className="register-link">
          <p>
            Don't have an account? <a href="/">Register</a>
          </p>
        </div>
      </form>

      {isEmailPopupOpen && (
        <EmailPopup onClose={closeEmailPopup} onNext={openOTPPopup} />
      )}
      {isOTPPopupOpen && (
        <OTPPopup onClose={closeOTPPopup} onNext={openNewPasswordPopup} />
      )}
      {isNewPasswordPopupOpen && (
        <NewPasswordPopup onClose={closeNewPasswordPopup} />
      )}
    </div>
  );
}

export default LoginForm;
