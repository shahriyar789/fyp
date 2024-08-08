import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DepartmentForm.css';

const DepartmentForm = ({ department }) => {
  const [name, setName] = useState(department ? department.name : '');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (department) {
      // Update existing department
      await fetch(`/api/departments/${department.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
    } else {
      // Add new department
      await fetch('/api/departments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
    }
    navigate('/admin/departments');
  };

  return (
    <div className="department-form">
      <h2>{department ? 'Edit Department' : 'Add Department'}</h2>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default DepartmentForm;
