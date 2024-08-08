import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DepartmentList.css';

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    // Replace with your API call
    const response = await fetch('/api/departments');
    const data = await response.json();
    setDepartments(data);
  };

  const handleDelete = async (id) => {
    // Replace with your API call
    await fetch(`/api/departments/${id}`, { method: 'DELETE' });
    fetchDepartments();
  };

  return (
    <div className="department-list">
      <h2>Department List</h2>
      <Link to="/admin/departments/add" className="btn btn-primary">Add Department</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.id}>
              <td>{department.name}</td>
              <td>
                <Link to={`/admin/departments/edit/${department.id}`} className="btn btn-secondary">Edit</Link>
                <button onClick={() => handleDelete(department.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
