import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/login";
import MyAccount from "./pages/MyAccount/MyAccount";
import Salary from "./pages/Salary/SalaryReport";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/Login/SignUp";
import Employee from "./pages/Employee/EmployeeList";
import AddEmployee from "./components/specific/Employee/AddEmplyee";
import ViewAccount from "./components/specific/MyAccount/ViewAccount";
import AddSalary from "./components/specific/Salary/AddSalary";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/my_account" element={<MyAccount />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/add_employee" element={<AddEmployee />} />
          <Route path="/view_Account" element={<ViewAccount />} />
          <Route path="/add_Salary" element={<AddSalary />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
