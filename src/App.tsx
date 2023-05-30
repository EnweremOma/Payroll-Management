import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/login";
import MyAccount from "./pages/MyAccount/MyAccount";
import MySalary from "./pages/MySalary/MySalary";
import Settings from "./pages/Settings/Settings";
import SignUp from './pages/Login/SignUp';
import Employee from './pages/Employee/EmployeeList';

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
          <Route path="/my_salary" element={<MySalary />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
