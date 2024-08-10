import './App.css';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginForm from './Components/LoginForm/LoginForm';
import Register from './Components/LoginForm/Register'
// import Navbar from './Components/Navbar';
// import Sidebar from './Components/Sidebar';
// import Attendance from './Components/Attendance/Attendance'
// import AdminPage from './Components/Administration/AdminPage'
// import Employee from './Components/Dashboard/Employees'
// import GradeWiseSalary from './Components/Dashboard/GradeWiseSalary';
// import EmployeeGrades from './Components/Dashboard/EmployeeGrades';
//  import GenerateSalary from './Components/Payroll/GenerateSalary'
//  import SalaryList from './Components/Payroll/SalaryList';
// import SalaryDetails from './Components/Payroll/SalaryDetails';
// import PayrollDashboard from './Components/Payroll/PayrollDashboard';
// import IncentivesAndBonusesDetails from './Components/Payroll/IncentivesAndBonusesDetails';
// import Report from './Components/Report';
// import EmployeeDetails from './Components/Employee/EmployeeDetails';
// import ShadowContainer from './Components/Employee/ShadowContainer';
// import AddDepartmentButton from './Components/Employee/AddDepartment';
// import Settings from './components/Settings/Settings';


// import AdminPage from './Components/Administration/AdminPage';
// import DepartmentList from './Components/Administration/DepartmentManagement/DepartmentList';
// import AddDepartment from './Components/Administration/DepartmentManagement/AddDepartment';
// import RoleList from './Components/Administration/RoleManagement/RoleList';
// import AllowanceList from './Components/Administration/Allowances/AllowanceList';
// import DeductionList from './Components/Administration/Deduction/DeductionList';


// const gradesData = [
//     { numberOfEmployees: 10 },
//     { numberOfEmployees: 15 },
//     { numberOfEmployees: 20 },
//     { numberOfEmployees: 25 },
//     { numberOfEmployees: 30 },
//     { numberOfEmployees: 35 },
//     { numberOfEmployees: 40 },
//     { numberOfEmployees: 45 },
//     { numberOfEmployees: 50 }
// ]
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
<>

   {/* <Sidebar/> */}

   {/* <Navbar title='PAYROLL'/> */}
{/* <Attendance/> */}
{/* <Employee/>

<GradeWiseSalary/>  
<div className="app">
            <EmployeeGrades gradesData={gradesData} />
        </div> */}

{/* <Router>
      <div className="app-container">
      {/* <Route path="/" element={<GenerateSalary />} />
      <Route path="/salary-list" element={<SalaryList />} />
      <Route path="/salary-details/:id" element={<SalaryDetails />} />
          <Route path="/payroll-dashboard" element={<PayrollDashboard />} />
          <Route path="/incentives-bonuses-details" element={<IncentivesAndBonusesDetails />} /> */}
             {/* <Route path="/admin/*" element={<AdminPage />} /> */}
             {/* <Routes>
                <Route path="/" element={<AdminPage />} />
                <Route path="/departments" element={<DepartmentList />} />
                <Route path="/departments/add" element={<AddDepartment />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/add" element={<AddUser />} />
                <Route path="/roles" element={<RoleList />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/allowances" element={<AllowanceList />} />
                <Route path="/deductions" element={<DeductionList />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        
      </div>
    
    </Router> */}



{/* <AddDepartmentButton/>  */}
 {/* <ShadowContainer/>  */}
{/* <EmployeeDetails/> */}






{/* <Nav/> */}
{/* <Report/> */}
  {/* <LoginForm/>   */}
   <Register/>  
</>
  );
}

export default App;
