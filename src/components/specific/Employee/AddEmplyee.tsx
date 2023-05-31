import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { PrimaryButton } from "../../general/CustomButton";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { EmployeeInput } from "../../../interfaces/Employees";
import api from "../../../helpers/api/useEmployee";
import { successToast } from "../../general/CustomToast";

const defaultFormData: EmployeeInput = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  department: "",
  dob: "",
  nationality: "",
  state: "",
  city: "",
  address: "",
  jobTitle: "",
  employeeId: "",
  grossSalary: "",
  confirmPassword: "",
};

export default function AddEmployee() {
  const [employeeData, setEmployeeData] = useState(defaultFormData);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    department,
    dob,
    nationality,
    state,
    city,
    address,
    jobTitle,
    employeeId,
    grossSalary,
    confirmPassword,
  } = employeeData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeData({ ...employeeData, [e.target.id]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      api.post("/employees", employeeData).then((res) => {
        successToast({
          message: "Registered successfully",
          position: "top-right",
        });
        navigate("/employees");
      });
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <Layout>
      <div className="w-full">
        <div className="justify-between flex pb-4 ml-6 pt-4">
          <h1 className="text-payroll-purple text-2xl sm:text-3xl font-bold">
            Register Employee
          </h1>
          <div className="hidden sm:block">
            <PrimaryButton
              onClick={() => navigate(-1)}
              className="bg-payroll-purple items-center mr-6"
            >
              <FiArrowLeft className="text-white text-xl" />
              <h2 className="text-white text-base px-3">Back</h2>
            </PrimaryButton>
          </div>
        </div>

        <hr className=" h-px mb-6 mx-6 p-[0.1rem] bg-payroll-purple border-0 " />
        <div className="bg-white mx-6 rounded-md border-2 border-payroll-purple p-4">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="john"
                  value={firstName}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5"
                  placeholder="Doe"
                  value={lastName}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="adeco@gmail.com"
                  value={email}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="0814-343-3478"
                  pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                  value={phoneNumber}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="employeeId"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Employee ID
                </label>
                <input
                  type="text"
                  id="employeeId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="0073GY"
                  value={employeeId}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Date of birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="23/12/1990"
                  value={dob}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="nationality"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nationality
                </label>
                <input
                  type="text"
                  id="nationality"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="Nigerian"
                  value={nationality}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="Lagos"
                  value={state}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="Lagos"
                  value={city}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="No 4 Agbalanje ..."
                  value={address}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="department"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="Finance"
                  value={department}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="jobTitle"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="Accountant"
                  value={jobTitle}
                  required
                  onChange={onChange}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="•••••••••"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="grossSalary"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Gross Salary
                </label>
                <input
                  type="number"
                  id="grossSalary"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="568000"
                  value={grossSalary}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="•••••••••"
                  value={confirmPassword}
                  required
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <PrimaryButton
                onClick={() => navigate(-1)}
                className="bg-payroll-purple text-white text-base px-6"
              >
                Back
              </PrimaryButton>
              <PrimaryButton
                type="submit"
                className="bg-payroll-purple text-white text-base px-3 ml-6"
              >
                Submit
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
