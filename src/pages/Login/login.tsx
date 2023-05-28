import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add code for handling form submission
  };

  return (
    <div className="h-screen bg-payroll-lilac flex items-center justify-center">
      <div className="place-content-center px-6 rounded-lg sm:px-10 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          className="bg-white-bg p-6 rounded-lg border-4 border-purple-900"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-2 border-payroll-purple p-2 w-full px-3 py-2 rounded-lg shadow-sm"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block font-bold mb-2 text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border-2 border-payroll-purple p-2 w-full px-3 py-2 rounded-lg shadow-sm"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-payroll-purple hover:bg-purple-200 text-white hover:text-purple-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-payroll-purple hover:text-purple-400"
              href="/#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center text-gray-900 font-medium text-sm pt-2">
            Don't have an account?
            <a
              href="http://localhost:3000/Signup"
              className="font-medium ml-1 hover:text-gray-600"
            >
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
