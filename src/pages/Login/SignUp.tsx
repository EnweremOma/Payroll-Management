import { useState } from "react";
import { SignUpInput } from "../../interfaces/SignUp";
import { E_CATEGORY } from "../../interfaces/Staff";
import axios from "axios";
//import { BASE_URL } from "../../routes/useUrls";

const defaultFormData: SignUpInput = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  category: E_CATEGORY.STUDENT,
  department: "",
  courseTitle: "",
};

const SignUp = () => {
  const [registrationData, setRegistrationData] = useState(defaultFormData);
  const { firstName, lastName, email, phoneNumber, category, department, courseTitle } =
    registrationData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationData({ ...registrationData, [e.target.id]: e.target.value });
  };
  //"http://localhost:8000/users/createUser"
 // const createUserUrl = `${BASE_URL}/users/createUser`;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registrationData);
    axios.post("http://localhost:8000/users/createUser",  registrationData );
    //e.target.reset();
  };

  return (
    <div className="h-screen bg-chatapp-lilac bg-cover bg-gray-900/10 z-10">
      <div className="w-2/4">
        <div className="text-center">
          <h2 className="text-chatapp-purple font-bold text-3xl py-6">
            Sign Up!
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white mx-20 rounded-md border-2 border-chatapp-purple"
        >
          <div className="mb-4 my-6 mx-8">
            <label
              htmlFor="firstName"
              className="block text-chatapp-purple font-medium mb-2"
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
              className="block text-chatapp-purple font-medium mb-2"
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
              className="block text-chatapp-purple font-medium mb-2"
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
              className="block text-chatapp-purple font-medium mb-2"
            >
              Phone Number:
            </label>
            <input
              type="phoneNumber"
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
              htmlFor="category"
              className="block text-chatapp-purple font-medium mb-2"
            >
              Category:
            </label>
            <select
              id="category"
              name="category"
              placeholder=""
              value={category}
              required
              onChange={(e) => e.target.value}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>Select category</option>
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <div className="mb-4 mx-8">
            <label
              htmlFor="department"
              className="block text-chatapp-purple font-medium mb-2"
            >
              Department:
            </label>
            <input
              type="department"
              id="department"
              name="department"
              placeholder="Department"
              value={department}
              required
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4 mx-8">
            <label
              htmlFor="courseTitle"
              className="block text-chatapp-purple font-medium mb-2"
            >
              Course Title:
            </label>
            <input
              type="courseTitle"
              id="courseTitle"
              name="courseTitle"
              placeholder="Course title"
              value={courseTitle}
              required
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-chatapp-purple hover:bg-active-purple text-white font-bold py-2 px-4 mb-4 ml-8 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="bg-student-img bg-no-repeat bg-cover flex bg-gray-900/10 z-10"></div>
    </div>
  );
};

export default SignUp;
