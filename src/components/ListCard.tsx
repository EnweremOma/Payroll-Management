import React from "react";
import { E_CATEGORY } from "../interfaces/Staff";

interface StaffInfo {
  name: string;
  department: string;
  imgURL: string;
  category: E_CATEGORY;
  courseTitle: string;
}

function ListCard({ name, department, imgURL, courseTitle, category }: StaffInfo) {
  const src =
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="bg-white rounded-md p-2 flex flex-row h-2/4 w-3/6 border-2 border-chatapp-lilac">
      <div>
        <img src={src} alt="avatar" className="h-16 w-16 rounded-full" />
      </div>

      <div className="w-2/3 ml-4">
        <div id="name" className="font-semibold text-xl text-chatapp-purple">
          {name}
        </div>
        <div id="department" className="text-sm text-gray-900 flex">
          <h1 className="font-medium">{category}</h1>
          <h1 className="font-medium">:</h1>
          <h1 className="ml-2">{courseTitle}</h1>
        </div>
        <div id="courseTitle" className="text-sm text-gray-900 flex">
          <h1 className="font-medium"> department of :</h1>
          <h1 className="ml-2">{department}</h1>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
