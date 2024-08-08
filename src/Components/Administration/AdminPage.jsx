import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import DepartmentList from './DepartmentManagement/DepartmentList';
import DepartmentForm from './DepartmentManagement/DepartmentForm';
import UserList from './UserManagement/UserList';
import UserForm from './UserManagement/UserForm';
import RoleList from './RoleManagement/RoleList';
import RoleForm from './RoleManagement/RoleForm';
import './AdminPage.css';

const AdminPage = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'HR' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'IT' },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'User' },
  ]);

  return (
    <div className="admin-page">
      <nav className="admin-nav">
        <ul>
          <li><Link to="/admin/departments">Department Management</Link></li>
          <li><Link to="/admin/users">User Management</Link></li>
          <li><Link to="/admin/roles">Role Management</Link></li>
        </ul>
      </nav>
      <div className="admin-content">
        <Routes>
          <Route path="/departments" element={<DepartmentList departments={departments} setDepartments={setDepartments} />} />
          <Route path="/departments/add" element={<DepartmentForm departments={departments} setDepartments={setDepartments} />} />
          <Route path="/departments/edit/:id" element={<DepartmentForm departments={departments} setDepartments={setDepartments} />} />
          <Route path="/users" element={<UserList users={users} setUsers={setUsers} />} />
          <Route path="/users/add" element={<UserForm users={users} setUsers={setUsers} />} />
          <Route path="/users/edit/:id" element={<UserForm users={users} setUsers={setUsers} />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/roles/add" element={<RoleForm />} />
          <Route path="/roles/edit/:id" element={<RoleForm />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPage;
