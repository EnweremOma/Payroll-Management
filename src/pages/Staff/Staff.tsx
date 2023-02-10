import React from "react";
import Sidebar from "../../components/Sidebar";
import ListCard from "../../components/ListCard";
import { staffList } from "../../Data/Staff";
import ProfileCard from "../../components/ProfileCard";


export default function Home() {
  return (
    <div className="bg-paint-bg bg-no-repeat bg-cover flex bg-gray-900/10 z-10">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 flex-1">
        <div className="pb-10 z-10 ml-24 pt-8">
          <h1 className="text-purple-900 text-3xl font-bold">Staff Members</h1>
        </div>
        <div>
          <div className="bg-white mx-12 rounded-md border-2 border-chatapp-purple">
            {staffList?.map((staffList, index) => (
              <ListCard
                name={staffList.name}
                imgURL={staffList.imgURL}
                courseTitle={staffList.courseTitle}
                department={staffList.department}
                category={staffList.category}
              />
            ))}
          </div>
          {/* <div>
            <ProfileCard />
          </div> */}
        </div>
      </div>
    </div>
  );
}
