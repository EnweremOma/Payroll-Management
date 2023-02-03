import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add code for handling form submission
  };

  return (
    <div className="h-screen bg-chatapp-lilac flex items-center justify-center">
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
              className="border border-chatapp-purple p-2 w-full px-3 py-2 rounded-lg shadow-sm"
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
              className="border-2 border-chatapp-purple p-2 w-full px-3 py-2 rounded-lg shadow-sm"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center text-#611076 font-medium text-sm">
            Don't have an account?
            <a href="forgotPassword" className="font-medium text-#611076 ml-1">
              Create account
            </a>
          </div>
          <button className="bg-chatapp-purple hover:bg-purple-200 text-white hover:text-purple-900 font-bold py-2 px-4 rounded-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
