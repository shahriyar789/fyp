import React, { useRef, useEffect } from 'react';

function NewPasswordPopup({ onClose, onPasswordUpdate }) {
  const newPasswordRef = useRef(null);

  useEffect(() => {
    newPasswordRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPassword = newPasswordRef.current.value;
    console.log('New password set:', newPassword);
    onPasswordUpdate(); // Handle password update and close the popup
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Set New Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            ref={newPasswordRef}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            required
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default NewPasswordPopup;
