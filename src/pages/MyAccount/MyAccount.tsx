import React, { useState } from "react";
import Layout from "../../components/Layout";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add code for handling form submission
  };
  return (
    <Layout>
      <div className="w-full place-items-center px-96 pt-32">
        <div className="pb-4 z-10 ml-6 pt-4 text-center">
          <h1 className="text-payroll-purple text-5xl font-bold">
            Log in to your Account
          </h1>
        </div>
        <div className="">
          <form
            className="bg-white p-6 rounded-lg border-4 border-purple-900"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block font-bold mb-2 text-payroll-purple"
                htmlFor="email"
              >
                Email:
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
                className="block font-bold mb-2 text-payroll-purple"
                htmlFor="password"
              >
                Password:
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
              <a
                className="inline-block align-baseline font-bold text-sm text-payroll-purple hover:text-purple-400"
                href="/#"
              >
                Forgot Password?
              </a>
              <button
                className="bg-payroll-purple hover:bg-purple-200 text-white hover:text-purple-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
