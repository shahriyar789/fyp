import React, { useState, useEffect } from 'react';
import ShadowContainer from './ShadowContainer';
import './EmployeeDetails.css';
import { FaUserPlus } from 'react-icons/fa';
import AddDepartment from './AddDepartment'
import AddNewGrade from './AddNewGrade';

const EmployeeDetails = () => {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Simulated data fetch
    const fetchedData = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "1985-06-15",
        departmentName: "HR",
        grade: "A",
        phoneNumber: "+1234567890",
        email: "john.doe@example.com",
        dateOfJoining: "2020-01-01",
        address: "123 Main St, Anytown"
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        dateOfBirth: "1990-07-22",
        departmentName: "Finance",
        grade: "B",
        phoneNumber: "+0987654321",
        email: "jane.smith@example.com",
        dateOfJoining: "2019-03-15",
        address: "456 Elm St, Anytown"
      },
      {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        dateOfBirth: "1992-12-11",
        departmentName: "IT",
        grade: "C",
        phoneNumber: "+1122334455",
        email: "alice.johnson@example.com",
        dateOfJoining: "2018-06-30",
        address: "789 Pine St, Anytown"
      },
      {
        id: 4,
        firstName: "Bob",
        lastName: "Brown",
        dateOfBirth: "1988-09-05",
        departmentName: "Sales",
        grade: "D",
        phoneNumber: "+1223344556",
        email: "bob.brown@example.com",
        dateOfJoining: "2017-04-20",
        address: "101 Maple St, Anytown"
      },
      {
        id: 5,
        firstName: "Charlie",
        lastName: "Davis",
        dateOfBirth: "1993-08-15",
      
        departmentName: "Marketing",
        grade: "E",
        phoneNumber: "+1334455667",
        email: "charlie.davis@example.com",
        dateOfJoining: "2016-02-10",
        address: "202 Oak St, Anytown"
      },
      {
        id: 6,
        firstName: "Eve",
        lastName: "Miller",
        dateOfBirth: "1991-05-23",
        departmentName: "Operations",
        grade: "F",
        phoneNumber: "+1445566778",
        email: "eve.miller@example.com",
        dateOfJoining: "2015-11-01",
        address: "303 Birch St, Anytown"
      },
      // Add more employee data as needed
    ];
    setEmployees(fetchedData);
  }, []);

  const handleAddEmployeeClick = () => {
    setShowForm(true);
  };

  return (
    <div className="employee-details-container">
      <div className="employee-details-table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th style={{width:'250px'}}>First Name</th>
              <th style={{width:'200px'}}>Last Name</th>
              <th style={{width:'300px'}}>Date of Birth</th>
              <th className="wide-column">Department</th>
              <th className="wide-column">Grade</th>
              <th style={{width:'200px'}}>Phone Number</th>
              <th className="wide-column">Email</th>
              <th style={{width:'350px'}}>Date of Joining</th>
              <th className="wider-column">Address</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.dateOfBirth}</td>
                  <td>{employee.departmentName}</td>
                  <td>{employee.grade}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.email}</td>
                  <td>{employee.dateOfJoining}</td>
                  <td>{employee.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="11">No employees found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="add-employee-button-container">
        <div className="add-employee-button" onClick={handleAddEmployeeClick}>
          <FaUserPlus className="icon" />
          <span className="text">Add New Employee</span>
        </div>
      </div>
      {showForm && <ShadowContainer />}
      <AddDepartment />
      <AddNewGrade/>
    </div>
  );
};

export default EmployeeDetails;
