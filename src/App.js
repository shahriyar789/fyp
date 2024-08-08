import './App.css';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

// import EmployeeDetails from './Components/Employee/EmployeeDetails';
import LoginForm from './Components/LoginForm/LoginForm';
// import Register from './Components/LoginForm/Register'
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
// import ShadowContainer from './Components/Employee/ShadowContainer';
// import AddDepartmentButton from './Components/Employee/AddDepartmentButton';
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


   {/* <Navbar title='PAYROLL'/> */}
{/* <Sidebar/> */}
{/* <Attendance/> */}
{/* <Employee/>

<GradeWiseSalary/>  
<div className="app">
            <EmployeeGrades gradesData={gradesData} />
        </div> */}

{/* <Router>
      <div className="app-container">
        <Routes>
           <Route path="/" element={<GenerateSalary />} />
          <Route path="/salary-list" element={<SalaryList />} />
          <Route path="/salary-details/:id" element={<SalaryDetails />} />
          <Route path="/payroll-dashboard" element={<PayrollDashboard />} />
          <Route path="/incentives-bonuses-details" element={<IncentivesAndBonusesDetails />} />
             <Route path="/admin/*" element={<AdminPage />} />
         
        </Routes>
      </div>
    
    </Router> */}



{/* <AddDepartmentButton/> */} 
 {/* <ShadowContainer/>  */}
{/* <EmployeeDetails/> */}






{/* <Nav/> */}
{/* <Report/> */}
  <LoginForm/> 
  {/* {/* <Register/>   */}
</>
  );
}

export default App;
