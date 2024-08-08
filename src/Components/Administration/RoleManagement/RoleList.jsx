import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RoleList.css';

const RoleList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    // Replace with your API call
    const response = await fetch('/api/roles');
    const data = await response.json();
    setRoles(data);
  };

  const handleDelete = async (id) => {
    // Replace with your API call
    await fetch(`/api/roles/${id}`, { method: 'DELETE' });
    fetchRoles();
  };

  return (
    <div className="role-list">
      <h2>Role List</h2>
      <Link to="/admin/roles/add" className="btn btn-primary">Add Role</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions}</td>
              <td>
                <Link to={`/admin/roles/edit/${role.id}`} className="btn btn-secondary">Edit</Link>
                <button onClick={() => handleDelete(role.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
