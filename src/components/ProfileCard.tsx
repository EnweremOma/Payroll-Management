import React from "react";
import { FiMail } from "react-icons/fi";
import { E_CATEGORY } from "../interfaces/Staff";

interface StaffInfo {
  name: string;
  department: string;
  imgURL: string;
  category: E_CATEGORY;
  courseTitle: string;
  email: string;
  about: string;
}

function ProfileCard() {
  const src =
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="bg-white rounded-md p-4 flex flex-col h-2/4 w-2/6">
      <div>
        <img src={src} alt="avatar" className="h-24 w-24 rounded-full" />
      </div>
      <div id="name" className="font-semibold text-xl mt-4">
        Rajid Bismal
      </div>
      <div id="department" className="text-sm text-gray-900">
        Department of Health
      </div>
      <div id="title" className="text-gray-900">
        <h1 className=""> I AM A </h1>
        Lecturer of Health Science
      </div>
      <div id="department" className="flex items-center text-sm text-gray-500">
        <FiMail className="text-chatapp-purple" />
        <h1 className="ml-2">rajidbis@gmail.co</h1>
      </div>
      <div>
        <h1 className="font-semibold underline text-gray-900"> ABOUT ME </h1>
      </div>
      <div id="about" className="text-gray-900">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus
        pulvinar risus eu facilisis. Proin congue enim ut purus sodales
        bibendum.
      </div>
      <div className="bg-chatapp-purple rounded-md text-white font-semibold text-lg w-40 text-center p-2 mt-2 float-right">
        <button>send a message</button>
      </div>
    </div>
  );
}

export default ProfileCard;
