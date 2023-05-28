import React from "react";
import { UserList } from "../interfaces/User";
import { useSearchParams } from "react-router-dom";

function ListCard({
  _id,
  firstName,
  lastName,
  department,
  imgURL,
  courseTitle,
  category,
}: UserList) {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div
      onClick={() => {
        setSearchParams({ userId: _id as string });
      }}
      className="bg-white p-2 flex flex-row border border-payroll-lilac"
    >
      <div>
        <img src={imgURL} alt="avatar" className="h-16 w-16 rounded-full" />
      </div>

      <div className="w-full ml-4">
        <div
          id="name"
          className="font-semibold text-xl text-gray-900 flex gap-x-1"
        >
          {firstName}
          <div>{lastName}</div>
        </div>
        <div id="department" className="text-sm text-gray-900 flex">
          <h1 className="font-medium">{category}</h1>
          <h1 className="font-medium">:</h1>
          <h1 className="ml-2">{courseTitle}</h1>
        </div>
        <div
          id="courseTitle"
          className="text-sm text-gray-900 flex justify-between"
        >
          <div className="flex">
            <h1 className="font-medium"> department of :</h1>
            <h1 className="ml-2">{department}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
