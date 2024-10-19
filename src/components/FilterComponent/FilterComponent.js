import React from "react";
import { filterList } from "../../constant/filterList";

const FilterComponent = ({ open, setOpen }) => {
  const handleFilter = () => {
    setOpen(false);
  };

  return (
    <div
      className={
        open
          ? "block md:hidden col-span-3 px-5 py-3 bg-[#F0FFE5] space-y-3"
          : "hidden md:block col-span-3 px-5 py-3 bg-[#F0FFE5] space-y-3"
      }
    >
      <div className="font-[600] flex items-center justify-between  text-base text-[#6E6E6E] border-b-2 border-b-[#A8A8A8] pb-2">
        <span>Filter</span>
        <span>Clear All</span>
      </div>
      {filterList && filterList.length > 0
        ? filterList.map((filter) => (
            <div
              key={filter.id}
              className={
                filter.name === "Light Efficient"
                  ? "flex items-center justify-between font-[400] text-base text-[#6E6E6E] pb-1"
                  : "flex items-center justify-between font-[400] text-base text-[#6E6E6E] border-b-2 border-b-[#A8A8A8] pb-2"
              }
              onClick={handleFilter}
            >
              <span>{filter.name}</span>
              <span className="cursor-pointer">{filter.expand}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default FilterComponent;
