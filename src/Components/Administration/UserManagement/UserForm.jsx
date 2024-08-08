import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserForm.css';

const UserForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [role, setRole] = useState(user ? user.role : '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      // Update existing user
      await fetch(`/api/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, role }),
      });
    } else {
      // Add new user
      await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, role }),
      });
    }
    navigate('/admin/users');
  };

  return (
    <div className="user-form">
      <h2>{user ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
