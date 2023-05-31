import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/general/Pagination";
import { PrimaryButton } from "../../components/general/CustomButton";
import { format } from "date-fns";
import api from "../../helpers/api/useEmployee";

export default function Employee() {
  const [employees, setEmployees] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const employeesPerPage = 7;

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await api.get("/employees");
        setEmployees(response.data);
      } catch (err: any) {
        if (err.response) {
          console.error(err.response.data);
          console.error(err.response.status);
          console.error(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }
    
    fetchEmployees();
  }, []);

  return (
    <Layout>
      <div className="w-full">
        <div className="pb-4 z-10 ml-6 pt-4">
          <h1 className="text-payroll-purple text-3xl font-bold">
            Employee List
          </h1>
        </div>
        <div className="bg-white mx-6 rounded-md border-2 border-payroll-purple flex">
          <h1>
            hello <br />
            fgdhgfjhgkjkf
          </h1>
        </div>
        <div className="align-baseline">
          <Pagination
            items={employees}
            itemsPerPage={employeesPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </Layout>
  );
}

<div className="bg-twinklly-light-blue sm:min-h-screen w-full p-4 sm:p-10">
  <div className="pb-10 justify-between flex">
    <div>
      <h1 className="font-bold text-xl sm:text-3xl">History</h1>
      <h6 className="pt-2 font-medium text-base sm:text-lg">Account History</h6>
    </div>
    <div className="float-right pt-6">
      <PrimaryButton className="bg-twinklly-dark-blue items-center">
        <img src="/svgs/Filter.svg" alt="filter" />
        <h2 className="text-white text-base pl-3">Filter</h2>
      </PrimaryButton>
    </div>
  </div>

  <div
    className="mt-[1.875rem] rounded-[8px] gap-[10px] w-full py-[1.126rem] px-2 sm:px-8
        bg-white rounded[10px] shadow-lg shadow-greyIsh-700"
  >
    <div className="w-full overflow-x-auto">
      <div className="align-middle inline-block min-w-full shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="text-justify">
            <th className="px-6 py-4 whitespace-nowrap">Event Type</th>
            <th className="px-6 py-4 whitespace-nowrap">Description</th>
            <th className="px-6 py-4 whitespace-nowrap">Date&Time</th>
            <th className="px-6 py-4 whitespace-nowrap">Action</th>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.map((item: any, index: any) => (
              <tr key={index} className="hover:bg-gray-100 cursor-pointer">
                <td className="text-justify px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-500">
                    {item?.eventType}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-500">
                    {item.details}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-500">
                    {format(new Date(item?.createdAt as Date), "dd-MM-yyyy")}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>;
