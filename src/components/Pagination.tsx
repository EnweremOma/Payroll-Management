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
          "rounded-md bg-chatapp-purple text-white hover:text-chatapp-purple hover:bg-chatapp-lilac px-3 py-2"
        }
        previousClassName={
          "rounded-md bg-chatapp-purple text-white hover:text-chatapp-purple hover:bg-chatapp-lilac px-3 py-2 mr-2"
        }
        previousLinkClassName={"font-bold"}
        nextClassName={
          "rounded-md bg-chatapp-purple text-white hover:text-chatapp-purple hover:bg-chatapp-lilac px-3 py-2 ml-2"
        }
        nextLinkClassName={"font-bold"}
        breakClassName={"mr-2"}
        breakLinkClassName={
          "rounded-md bg-chatapp-purple text-white hover:text-chatapp-purple hover:bg-chatapp-lilac px-3 py-2"
        }
        activeClassName={"bg-blue-400 text-white font-bold"}
        activeLinkClassName={
          "rounded-md bg-blue-400 hover:bg-blue-500 px-3 py-2"
        }
        forcePage={currentPage}
      />
    </>
  );
};

export default Pagination;
