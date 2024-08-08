import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleForm.css';

const RoleForm = ({ role }) => {
  const [name, setName] = useState(role ? role.name : '');
  const [permissions, setPermissions] = useState(role ? role.permissions : '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (role) {
      // Update existing role
      await fetch(`/api/roles/${role.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, permissions }),
      });
    } else {
      // Add new role
      await fetch('/api/roles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, permissions }),
      });
    }
    navigate('/admin/roles');
  };

  return (
    <div className="role-form">
      <h2>{role ? 'Edit Role' : 'Add Role'}</h2>
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
          <label htmlFor="permissions">Permissions:</label>
          <input
            type="text"
            id="permissions"
            value={permissions}
            onChange={(e) => setPermissions(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default RoleForm;
