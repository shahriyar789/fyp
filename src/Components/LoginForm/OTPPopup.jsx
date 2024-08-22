import React, { useState } from 'react';
import './OTPPopup.css';
import { FaCheckCircle } from 'react-icons/fa'; // Font Awesome check circle icon

const OTPPopup = ({ onClose }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) {
            setOtp(otp.map((digit, i) => (i === index ? value : digit)));
            if (index < otp.length - 1 && value !== '') {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleVerify = () => {
        // Handle OTP verification logic here
        alert('OTP Verified!');
    };

    return (
        <div className="otp-popup">
            <div className="otp-popup-content">
                <div className="otp-heading">Verify Your Account</div>
                <div className="otp-icon">
                    <FaCheckCircle size={50} color="#fff" />
                </div>
                <div className="otp-inputs">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            className="otp-input"
                        />
                    ))}
                </div>
                <button className="verify-btn" onClick={handleVerify}>Verify OTP</button>
                <div className="go-back">
                    <span>Go back to sign in ? </span>
                    <a href="/sign-in" className="sign-in-link">Sign In</a>
                </div>
            </div>
        </div>
    );
};

export default OTPPopup;
