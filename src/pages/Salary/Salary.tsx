import React from "react";
import ListCard from "../../components/ListCard";
import { staffList } from "../../../Data/Staff";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <div className="pb-4 z-10 ml-6 pt-4">
          <h1 className="text-payroll-purple text-3xl font-bold">
            Staff Members
          </h1>
        </div>
        <div className="bg-white mx-6 rounded-md border-2 border-payroll-purple flex">
          <div>
            {staffList?.map((staffList, index) => (
              <ListCard
                firstName={staffList.firstName}
                lastName={staffList.lastName}
                imgURL={staffList.imgURL}
                courseTitle={staffList.courseTitle}
                department={staffList.department}
                category={staffList.category}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
