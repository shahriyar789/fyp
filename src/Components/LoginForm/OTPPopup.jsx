import React, { useState } from 'react';

function OTPPopup({ onClose, onNext }) {
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Simulate OTP verification and proceed to new password step
    console.log('OTP entered:', otp);
    onNext(); // Move to new password step
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h3>Enter OTP</h3>
        <form onSubmit={handleOtpSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default OTPPopup;
