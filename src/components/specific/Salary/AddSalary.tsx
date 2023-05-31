import React, { useState } from "react";
import Layout from "../../Layout";
import { PrimaryButton } from "../../general/CustomButton";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { SalaryInput } from "../../../interfaces/Salary";
import api from "../../../helpers/api/useEmployee";
import { successToast } from "../../general/CustomToast";

const defaultFormData: SalaryInput = {
  firstName: "",
  lastName: "",
  level: "",
  employeeId: "",
  month: "",
  paidDays: "",
  basic: "",
  transport: "",
  pension: "",
  tax: "",
  total: "",
};

export default function AddSalary() {
  const [employeeData, setEmployeeData] = useState(defaultFormData);
  const {
    firstName,
    lastName,
    level,
    employeeId,
    month,
    paidDays,
    basic,
    transport,
    pension,
    tax,
    total,
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
            Add Salary
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
                  htmlFor="level"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Level
                </label>
                <input
                  type="text"
                  id="level"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="adeco@gmail.com"
                  value={level}
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
                  htmlFor="month"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Month
                </label>
                <input
                  type="text"
                  id="month"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="0814-343-3478"
                  pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
                  value={month}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="paidDays"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Paid Days
                </label>
                <input
                  type="text"
                  id="paidDays"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="0073GY"
                  value={paidDays}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="basic"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Basic
                </label>
                <input
                  type="text"
                  id="basic"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="23/12/1990"
                  value={basic}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="transport"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Transport
                </label>
                <input
                  type="text"
                  id="transport"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="Lagos"
                  value={transport}
                  required
                  onChange={onChange}
                />
              </div>

              <div>
                <label
                  htmlFor="pension"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Pension
                </label>
                <input
                  type="text"
                  id="pension"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="No 4 Agbalanje ..."
                  value={pension}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="tax"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tax
                </label>
                <input
                  type="text"
                  id="tax"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="Finance"
                  value={tax}
                  required
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="total"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Total
                </label>
                <input
                  type="text"
                  id="total"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-payroll-purple focus:border-payroll-purple block w-full p-2.5 "
                  placeholder="Accountant"
                  value={total}
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
