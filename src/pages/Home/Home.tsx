import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ListCard from "../../components/ListCard";
import { UserList, User } from "../../interfaces/User";
import ProfileCard from "../../components/ProfileCard";
import Layout from "../../components/Layout";
import Pagination from "../../components/Pagination";

export default function Home() {
  const [users, setUsers] = useState<UserList[]>([]);
  const [profile, setProfile] = useState<User | undefined>(undefined);
  const [items, setItems] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 7;
  let [searchParams] = useSearchParams();
  const selectedUserId = searchParams.get("userId");

  useEffect(function () {
    axios
      .get("http://localhost:8000/users/getAllUsers")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });

    // Fetch data for items array
    axios
      .get(`http://localhost:8000/items`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(
    function () {
      axios
        .get(`http://localhost:8000/users/getSingleUser/${selectedUserId}`)
        .then((response) => {
          setProfile(response.data.user);
        })
        .then((error) => console.log(error));
    },
    [selectedUserId]
  );

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const displayedUsers = users.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Layout>
      <div className="w-full">
        <div className="pb-4 z-10 ml-6 pt-4">
          <h1 className="text-chatapp-purple text-3xl font-bold">
            Chat App Members
          </h1>
        </div>
        <div className="bg-white mx-6 rounded-md border-2 border-chatapp-purple flex">
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
