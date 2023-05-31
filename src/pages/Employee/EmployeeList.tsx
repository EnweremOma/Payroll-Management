import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Pagination from "../../components/general/Pagination";
import api from "../../helpers/api/useEmployee";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiTrash, FiEdit } from "react-icons/fi";

export default function Employee() {
  const [employees, setEmployees] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const employeesPerPage = 10;

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
    };

    fetchEmployees();
  }, []);

  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/employee/${id}`);
      const updatedEmployees = employees.filter(
        (employee: any) => employee.id !== id
      );
      setEmployees(updatedEmployees);
      navigate("/employees");
    } catch (err: any) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <Layout>
      <div className="w-full overflow-auto">
        <div className="justify-between flex pb-10 ml-6 pt-4">
          <h1 className="text-payroll-purple text-2xl sm:text-3xl font-bold">
            Employee List
          </h1>

          <Link
            to="/add_employee"
            className="bg-payroll-purple items-center mr-6 text-white font-bold px-4 py-2 rounded-lg"
          >
            Add Employee
          </Link>
        </div>

        <div className="bg-white mx-6 rounded-md border-2 border-payroll-purple flex overflow-x-scroll">
          <div className="w-full overflow-x-auto">
            <div className="align-middle inline-block min-w-full shadow-md">
              <table className="min-w-full">
                <thead className="text-justify bg-payroll-purple text-white">
                  <th className="px-6 py-4 whitespace-nowrap">Employee ID</th>
                  <th className="px-6 py-4 whitespace-nowrap">Name</th>
                  <th className="px-6 py-4 whitespace-nowrap">Email</th>
                  <th className="px-6 py-4 whitespace-nowrap">Job title</th>
                  <th className="px-6 py-4 whitespace-nowrap">Department</th>
                  <th className="px-6 py-4 whitespace-nowrap">Action</th>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {employees?.map((item: any, index: any) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-100 cursor-pointer"
                    >
                      <td className="text-justify px-6 py-4 whitespace-nowrap">
                        <div className="flex text-sm font-medium text-gray-500">
                          {item.employeeId}
                        </div>
                      </td>

                      <td className="text-justify px-6 py-4 whitespace-nowrap">
                        <div className="flex text-sm font-medium text-gray-500">
                          {item.lastName}
                          <h1 className="ml-2">{item.firstName}</h1>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-500">
                          {item.email}
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-500">
                          {item.jobTitle}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-500">
                          {item.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex text-md font-medium text-gray-500">
                          <FiEye />
                          <FiEdit className="ml-4 text-green-600" />
                          <FiTrash
                            className="ml-4 text-red-600"
                            onClick={() => handleDelete(employees.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
