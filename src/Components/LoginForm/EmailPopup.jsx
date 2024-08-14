import React, { useState } from 'react';

function EmailPopup({ onClose, onNext }) {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Simulate email verification and proceed to OTP step
    console.log('Email entered:', email);
    onNext(); // Move to OTP step
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h3>Enter Your Email</h3>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EmailPopup;
