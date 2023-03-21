import React from "react";
import { FiMail } from "react-icons/fi";
import { User } from "../interfaces/User";

function handleClick() {
  window.location.assign("http://localhost:3000/Messages");
}

function ProfileCard({
  firstName,
  lastName,
  department,
  imgURL,
  category,
  courseTitle,
  email,
  about,
}: User)

{
  return (
    <div className="bg-white rounded-md p-4 w-full">
      <div>
        <img src={imgURL} alt="avatar" className="h-32 w-32 rounded-full" />
      </div>
      <div
        id="name"
        className="font-semibold pt-3 text-xl text-gray-900 flex gap-x-1"
      >
        {firstName}
        <div>{lastName}</div>
      </div>
      <div>{courseTitle},</div>
      <div id="department" className="text-md text-gray-900 flex gap-x-1">
        <h1> Faculty of</h1>
        {department}.
      </div>
      <div id="title" className="text-gray-900">
        <h1> I AM A </h1>
        <div>{category}</div>
      </div>
      <div id="department" className="flex items-center text-sm text-gray-500">
        <FiMail className="text-chatapp-purple" />
        <h1 className="ml-2">{email}</h1>
      </div>
      <div>
        <h1 className="font-semibold underline text-gray-900"> ABOUT ME </h1>
      </div>
      <div id="about" className="text-gray-900">
        {about}
      </div>
      <div className="bg-chatapp-purple rounded-md text-white font-semibold text-lg w-40 hover:text-chatapp-purple hover:bg-chatapp-lilac text-center p-2 mt-2 float-right">
        <button onClick={handleClick}>send a message</button>
      </div>
    </div>
  );
}

export default ProfileCard;
