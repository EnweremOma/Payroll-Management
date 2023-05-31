import React from "react";
import Layout from "../../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <div className="pb-4 z-10 ml-6 pt-4">
          <h1 className="text-payroll-purple text-3xl font-bold">
            Chat App Members
          </h1>
        </div>
        <div className="bg-white mx-6 rounded-md border-2 border-payroll-purple flex">
          <div className=" w-1/2">
            {displayedUsers.length > 0
              ? displayedUsers.map((user) => (
                  <ListCard
                    _id={user._id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    imgURL="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    courseTitle={user.courseTitle}
                    department={user.department}
                    category={user.category}
                  />
                ))
              : "loading ..."}

            <div className="align-baseline">
              <Pagination
                items={items}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
          <div className="pt-6 w-1/2">
            {profile && (
              <ProfileCard
                _id={profile._id}
                firstName={profile.firstName}
                lastName={profile.lastName}
                email={profile.email}
                phoneNumber={profile.phoneNumber}
                imgURL="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                courseTitle={profile.courseTitle}
                department={profile.department}
                category={profile.category}
                about={profile.about}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
