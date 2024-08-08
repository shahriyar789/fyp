import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // Replace with your API call
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    // Replace with your API call
    await fetch(`/api/users/${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      <Link to="/admin/users/add" className="btn btn-primary">Add User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`/admin/users/edit/${user.id}`} className="btn btn-secondary">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
