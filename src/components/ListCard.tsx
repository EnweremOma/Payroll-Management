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
    <div className="bg-white p-2 flex flex-row w-2/5 border border-chatapp-lilac">
      <div>
        <img src={imgURL} alt="avatar" className="h-16 w-16 rounded-full" />
      </div>

      <div className="w-full ml-4">
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
          <div className="ml- ml-28 float-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="chatapp-purple"
              className="bi bi-3-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCard;
