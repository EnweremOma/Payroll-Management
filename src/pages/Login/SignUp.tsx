import { useState } from "react";
import { SignUpInput } from "../../interfaces/SignUp";
import api from "../../helpers/api/useEmployee";

const defaultFormData: SignUpInput = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [registrationData, setRegistrationData] = useState(defaultFormData);
  const { firstName, lastName, email, phoneNumber, confirmPassword } =
    registrationData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({ ...registrationData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registrationData);
    api.post("/employees", registrationData);
  };

  return (
    <div className="h-screen bg-payroll-lilac bg-cover bg-gray-900/10 z-10">
        <div className="text-center">
          <h2 className="text-payroll-purple font-bold text-3xl py-6">
            Sign Up!
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white mx-20 rounded-md border-2 border-payroll-purple"
        >
          <div className="mb-4 my-6 mx-8">
            <label
              htmlFor="firstName"
              className="block text-payroll-purple font-medium mb-2"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First name"
              value={firstName}
              required
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 my-6 mx-8">
            <label
              htmlFor="lastName"
              className="block text-payroll-purple font-medium mb-2"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              value={lastName}
              required
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 mx-8">
            <label
              htmlFor="email"
              className="block text-payroll-purple font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              required
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 mx-8">
            <label
              htmlFor="phoneNumber"
              className="block text-payroll-purple font-medium mb-2"
            >
              Phone Number:
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="phoneNumber"
              value={phoneNumber}
              required
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4 mx-8">
            <label
              htmlFor="department"
              className="block text-payroll-purple font-medium mb-2"
            >
              Department:
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="•••••••••"
              required
            />
          </div>

          <div className="mb-4 mx-8">
            <label
              htmlFor="courseTitle"
              className="block text-payroll-purple font-medium mb-2"
            >
              Confirm password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="•••••••••"
              value={confirmPassword}
              required
              onChange={onChange}
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-payroll-purple hover:bg-active-purple text-white font-bold py-2 px-4 mb-4 ml-8 rounded"
            >
              Submit
            </button>
          </div>
        </form>
    </div>
  );
};

export default SignUp;
