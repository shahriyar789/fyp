import React, { useEffect, useRef } from 'react';

function OTPPopup({ onClose, onNext }) {
  const otpRef = useRef(null);

  useEffect(() => {
    otpRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate OTP here
    onNext(); // Proceed to New Password popup
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Enter OTP</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter OTP" ref={otpRef} required />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default OTPPopup;
