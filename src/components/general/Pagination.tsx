import React from "react";
import ReactPaginate from "react-paginate";

interface Props {
  items: Array<any>;
  itemsPerPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({
  items,
  itemsPerPage,
  onPageChange,
  currentPage,
}) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = items.slice(startIndex, endIndex);

  return (
    <>
      {/* Render the itemsToShow array */}
      <ul>
        {itemsToShow.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Render the pagination component */}
      <ReactPaginate
        pageCount={Math.ceil(items.length / itemsPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={(selectedItem) => onPageChange(selectedItem)}
        containerClassName={"flex justify-end my-4"}
        pageClassName={"mr-2"}
        pageLinkClassName={
          "rounded-md bg-payroll-purple text-white hover:text-payroll-purple hover:bg-payroll-lilac px-3 py-2"
        }
        previousClassName={
          "rounded-md bg-payroll-purple text-white hover:text-payroll-purple hover:bg-payroll-lilac px-3 py-2 mr-2"
        }
        previousLinkClassName={"font-bold"}
        nextClassName={
          "rounded-md bg-payroll-purple text-white hover:text-payroll-purple hover:bg-payroll-lilac px-3 py-2 ml-2"
        }
        nextLinkClassName={"font-bold"}
        breakClassName={"mr-2"}
        breakLinkClassName={
          "rounded-md bg-payroll-purple text-white hover:text-payroll-purple hover:bg-payroll-lilac px-3 py-2"
        }
        activeClassName={"text-white font-bold"}
        activeLinkClassName={
          "rounded-md hover:bg-payroll-lilac px-3 py-2"
        }
        forcePage={
          currentPage < Math.ceil(items.length / itemsPerPage) ? currentPage : 0
        }
      />
    </>
  );
};

export default Pagination;
