import React from "react";
import "./Products.css";
import { CiSearch } from "react-icons/ci";

const Products = () => {
  return (
    <div className="px-5 my-10">
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-between border-b-2 border-b-[#838383]  w-[370px]">
          <div className="flex items-center">
            <CiSearch size={25} color="#838383" />
            <input
              type="text"
              className="outline-none text-[#838383] px-2"
              placeholder="Search Plant"
            />
          </div>
          <img
            src="/assets/flower-image.png"
            alt="flower-image"
            className="w-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
