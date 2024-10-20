import React, { useState } from "react";
import "./Products.css";
import CarouselComponent from "../../components/Carousel/CarouselComponent";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { FaFilter } from "react-icons/fa";
import Dialog from "@mui/material/Dialog";

const Products = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <React.Fragment>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          fullWidth
        >
          <FilterComponent open={open} />
        </Dialog>
      </React.Fragment>

      <div className="px-3 md:px-10 my-10">
        <div className="inline-flex items-center space-x-3 mb-4">
          <button className="bg-[#165315] text-xl text-white px-3 py-2 font-[600]">
            Plants
          </button>
          <button className="border border-[#838383] text-xl text-[#838383] px-3 py-2 font-[300]">
            Pots
          </button>
        </div>
        <p className="text-base font-[400] leading-6 text-[#838383] ">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <p className="font-[600] text-2xl my-5">Nursery</p>
        <CarouselComponent />
        <div className="grid grid-cols-12 my-16 items-start">
          <FilterComponent />
          <div className="col-span-12 md:col-span-9 py-2 px-5">
            <div className="flex items-center justify-between  md:pl-10">
              <div className="md:space-x-5 flex flex-col md:flex-row">
                <span className="font-[400] text-[15px] text-[#6A6A6A]">
                  300 Products
                </span>
                <select className="bg-[#165315] py-1 px-2 text-white rounded outline-none w-[180px] font-[700] text-base">
                  <option className="bg-white text-black" value="">
                    Sort By
                  </option>
                  <option className="bg-white text-black" value="size">
                    Size
                  </option>
                  <option className="bg-white text-black" value="popularity">
                    Popularity
                  </option>
                  <option className="bg-white text-black" value="low to high">
                    Price, Low to High
                  </option>
                  <option className="bg-white text-black" value="high to low">
                    Price, High to Low
                  </option>
                </select>
              </div>
              <div className="flex items-center space-x-2 block md:hidden">
                <span className="text-[#6A6A6A]">Filter</span>
                <FaFilter size={25} color="#F3A939" onClick={handleClickOpen} />
              </div>
            </div>
            <div className="my-7">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
