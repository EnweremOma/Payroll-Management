import React from "react";
import { ProfileList } from "../interfaces/Staff";

function ListCard({
  name,
  department,
  imgURL,
  courseTitle,
  category,
}: ProfileList) {
  return (
    <div className="bg-white p-2 flex flex-row h-2/4 w-2/5 border border-chatapp-lilac pt-2">
      <div>
        <img src={imgURL} alt="avatar" className="h-16 w-16 rounded-full" />
      </div>

      <div className="w-2/3 ml-4">
        <div id="name" className="font-semibold text-xl text-gray-900">
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
