import React from "react";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";

const Pagination = ({
  currentPage,
  pageNumbers,
  handlePageChange,
  currentProductsList,
  productsPerPage,
}) => {
  return (
    <div className="p-3 my-10 flex justify-center">
      <div className="flex items-center space-x-5">
        <PiLessThan
          className={currentPage === 1 ? "invisible" : "flex items-center"}
        />

        {pageNumbers.map((currentNumber) => (
          <button
            className={
              currentNumber === currentPage
                ? " bg-[#F3A939] rounded-lg  py-1 text-black font-[500] text-[15px] h-[35px] w-[30px]"
                : "border border-[#F3A939] rounded-lg  py-1 text-black font-[500] text-[15px] h-[35px] w-[30px] hover:bg-[#F3A939] transition-all duration-500"
            }
            key={currentNumber}
            onClick={() => handlePageChange(currentNumber)}
          >
            {currentNumber}
          </button>
        ))}

        <PiGreaterThan
          className={
            currentProductsList.length < productsPerPage
              ? "invisible"
              : "flex items-center"
          }
        />
      </div>
    </div>
  );
};

export default Pagination;
