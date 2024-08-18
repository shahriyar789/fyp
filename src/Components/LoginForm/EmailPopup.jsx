import React, { useEffect, useRef } from 'react';

function EmailPopup({ onClose, onNext }) {
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email here
    onNext(); // Proceed to OTP popup
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Enter your email</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" ref={emailRef} required />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default EmailPopup;
