import React from "react";
import Sidebar from "../../components/Sidebar";
import ProfileCard from "../../components/ProfileCard";
import ListCard from "../../components/ListCard";
import { E_CATEGORY } from "../../interfaces/Staff";
import { staffList } from '../../Data/Staff';

export default function Home() {
  return (
    <div className="bg-paint-bg bg-no-repeat bg-cover flex bg-gray-900/10 z-10">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6 flex-1">
        <div className="pb-10 z-10 ml-24 pt-8">
          <h1 className="text-purple-900 text-3xl font-bold">Messages</h1>
        </div>
        <div className="bg-white mx-12 rounded-md border-2 border-chatapp-purple">
          <h1>
            hello <br />
            fgdhgfjhgkjkf
          </h1>
        </div>
        {/* <div className="pt-6">
          <ProfileCard />
        </div> */}
        <div className="pt-6">
          <ListCard
            name="Rajid Bismal"
            imgURL="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            courseTitle="Accounting"
            department="Management and Social Studies"
            category={E_CATEGORY.LECTURER}
          />
          {/* staffList.forEach((staff, index) => {
          }) */}
            <ListCard
            name={staffList[1].name}
            imgURL={staffList[1].imgURL}
            courseTitle={staffList[1].courseTitle}
            department={staffList[1].department}
            category={staffList[1].category}
          />
        </div>
      </div>
    </div>
  );
}
