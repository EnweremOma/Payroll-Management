import React from "react";
import Sidebar from "../../components/Sidebar";
import ListCard from "../../components/ListCard";
// import Staff from '../../Data/Staff';
// import { Staff } from "../../interfaces/Staff";

// function createCard(Staff) {
//   return (
//     <ListCard
//     name={Staff.name}
//     />
//   )
// }


export default function Home() {

  return (
    <div className="bg-paint-bg bg-no-repeat bg-cover flex bg-gray-900/10 z-10">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 flex-1">
        <div className="pb-10 z-10 ml-24 pt-8">
          <h1 className="text-purple-900 text-3xl font-bold">
            Staff Members
          </h1>
        </div>
        <div className="bg-white mx-12 rounded-md border-2 border-chatapp-purple">
          {/* <h1>
            {Staff.map(createCard)}
          </h1> */}
        </div>
      </div>
    </div>
  );
}
