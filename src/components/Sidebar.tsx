import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiUser, FiUsers, FiSettings } from "react-icons/fi";
import { BsArrowLeftShort, BsChatDots, BsSearch } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="flex flex-col">
      <div
        className={`bg-payroll-purple h-[calc(100vh_-_2rem)] p-5 pt-8 rounded-lg ${
          open ? "w-72" : "w-20"
        } duration-300 relative ease-in-out`}
      >
        <BsArrowLeftShort
          className={`bg-white fill-payroll-purple text-3xl rounded-full absolute -right-3 top-9 border border-payroll-purple cursor-pointer 
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <BsChatDots className=" text-4xl fill-white cursor-pointer float-left mr-2" />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Chat App
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-light-white mt-6 px-4 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`fill-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />

          <input
            type={"search"}
            placeholder="search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>
        <nav className="text-gray-200">
          <ul className="gap-x-4">
            <li className="text-sm flex items-center cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
              <a href="home" className="flex items-center hover:underline">
                <FiHome className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </a>
            </li>
            <li className="text-sm flex items-center cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
              <a
                href="employees"
                className="flex items-center hover:underline"
              >
                <FiUsers className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/employees" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    Employees 
                  </span>
                </Link>
              </a>
            </li>
            <li className="text-sm flex items-center cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
              <a
                href="my_account"
                className="flex items-center hover:underline"
              >
                <FiUser className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/my_account" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    My Account
                  </span>
                </Link>
              </a>
            </li>
            <li className="text-sm flex items-center cursor-pointer  p-2 hover:bg-light-white rounded-md mt-2">
              <a href="My_salary" className="flex items-center hover:underline">
                <CiMoneyCheck1 className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/My_salary" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    My Salary
                  </span>
                </Link>
              </a>
            </li>
            <li className="text-sm flex items-center cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
              <a href="settings" className="flex items-center hover:underline">
                <FiSettings className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/Settings" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    Settings
                  </span>
                </Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
