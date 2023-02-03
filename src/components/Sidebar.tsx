import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiMessageSquare,
  FiUsers,
  FiUser,
  FiBook,
  FiSettings,
} from "react-icons/fi";
import { BsArrowLeftShort, BsChatDots, BsSearch } from "react-icons/bs";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className="flex">
      <div
        className={`bg-chatapp-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white fill-chatapp-purple text-3xl rounded-full absolute -right-3 top-9 border border-chatapp-purple cursor-pointer 
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
              <a href="messages" className="flex items-center hover:underline">
                <FiMessageSquare className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/Messages" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    Messages
                  </span>
                </Link>
              </a>
            </li>
            <li className="text-sm flex items-center cursor-pointer  p-2 hover:bg-light-white rounded-md mt-2">
              <a href="staff" className="flex items-center hover:underline">
                <FiUsers className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/Staff" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    Staff
                  </span>
                </Link>
              </a>
            </li>
            <li className="text-sm flex items-center cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
              <a href="student" className="flex items-center hover:underline">
                <FiUser className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/Students" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    Students
                  </span>
                </Link>
              </a>
            </li>
            <li className="text-sm flex items-center cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
              <a href="groups" className="flex items-center hover:underline">
                <FiBook className="mr-4 text-gray-200 float-left block text-2xl" />
                <Link to="/Groups" className="hidden sm:block">
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    }`}
                  >
                    {" "}
                    Groups
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
                    {" "}
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
