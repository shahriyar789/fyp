import React, { useState } from 'react';

function NewPasswordPopup({ onClose }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      // Simulate password update
      console.log('New password:', newPassword);
      onClose(); // Close the popup after setting the new password
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h3>Create New Password</h3>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
