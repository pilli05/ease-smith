import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { productsList } from "../../constant/productsList";
import { useNavigate } from "react-router-dom";
import AddToCartDialogBox from "../AddToCartDialogBox/AddToCartDialogBox";
import Pagination from "../Pagination/Pagination";

const ProductCard = ({ productsListRef }) => {
  const [bookMarkedProductsList, setBookMarkedProductsList] = useState([]);
  const [buyOnRentList, setBuyOnRentList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [productDetails, setProductDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProductsList = productsList.slice(
    firstProductIndex,
    lastProductIndex
  );

  const navigate = useNavigate();

  const markItAsBookMark = (id) => {
    setBookMarkedProductsList((prevBookMarked) => {
      if (prevBookMarked.includes(id)) {
        return prevBookMarked.filter((productId) => productId !== id);
      }
      return [...prevBookMarked, id];
    });
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(productsList.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (currentPage) => {
    setCurrentPage(currentPage);
    if (productsListRef.current) {
      window.scrollTo({
        top: productsListRef.current.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  const handleThankYouPage = () => {
    navigate("/thank-you");
  };

  const handleClickOpen = (product) => {
    setOpen(true);
    setProductDetails(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buyOnRent = (id) => {
    setBuyOnRentList((prevBuyOnRentList) => {
      if (prevBuyOnRentList.includes(id)) {
        return prevBuyOnRentList.filter((productId) => productId !== id);
      }
      return [...prevBuyOnRentList, id];
    });
  };

  return (
    <>
      <AddToCartDialogBox
        open={open}
        handleClose={handleClose}
        productDetails={productDetails}
      />
      <div className="md:pl-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {currentProductsList && currentProductsList.length > 0
          ? currentProductsList.map((product) => (
              <div key={product.id}>
                <div className="border border-[#0000004D] ">
                  <div>
                    <div className="flex justify-end p-2">
                      {bookMarkedProductsList.includes(product.id) ? (
                        <FaHeart
                          color="red"
                          className="cursor-pointer"
                          onClick={() => markItAsBookMark(product.id)}
                          size={23}
                        />
                      ) : (
                        <FaRegHeart
                          className="cursor-pointer"
                          onClick={() => markItAsBookMark(product.id)}
                          size={23}
                        />
                      )}
                    </div>
                    <div className="flex flex-col items-center ">
                      <img
                        src={product.imgUrl}
                        alt=""
                        className="w-64 h-64 p-5 hover:scale-110 transition-all duration-500"
                      />
                      <p
                        className="text-center text-white font-[600] text-base py-2 bg-[#165315] w-full h-9 cursor-pointer hover:bg-transparent hover:border-t hover:border-[#0000004D] hover:text-[#165315] transition-all duration-500"
                        onClick={handleThankYouPage}
                      >
                        View Product
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <p className="font-[500] text-xl text-black">
                    {product.name}
                  </p>
                  <span className="font-[400] text-sm text-[#838383]">
                    {product.description}
                  </span>
                  <br />
                  <div className="flex items-center space-x-2">
                    <img src={product.reviewImage} alt="rating" />
                    <span className="mt-1 text-[#A5A1A1] text-base font-[500]">
                      {product.ratings}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 ">
                    <span className="mt-1 text-[#A5A1A1] text-base font-[400] line-through">
                      ₹ {product.actualPrice}
                    </span>
                    <span className="mt-1 text-[#5E5A5A] text-xl font-[600]">
                      ₹ {product.discountPrice}
                    </span>
                  </div>
                  <div className="flex items-center justify-between  my-3 space-x-2">
                    <button
                      className="bg-[#165315] rounded-lg px-2 py-2 text-white flex items-center"
                      onClick={() => handleClickOpen(product)}
                    >
                      <FiMinus className="mr-2" /> Add to cart{" "}
                      <FiPlus className="ml-2" />
                    </button>

                    {buyOnRentList.includes(product.id) ? (
                      <button
                        className="border border-[#165315] rounded-lg px-2 py-2 text-[#165315] font-[500] text-[15px] bg-[#a6d7a5]"
                        onClick={() => buyOnRent(product.id)}
                      >
                        Rent Added
                      </button>
                    ) : (
                      <button
                        className="border border-[#165315] rounded-lg px-2 py-2 text-[#165315] font-[500] text-[15px]"
                        onClick={() => buyOnRent(product.id)}
                      >
                        Buy on Rent
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <Pagination
        currentPage={currentPage}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
        currentProductsList={currentProductsList}
        productsPerPage={productsPerPage}
      />
    </>
  );
};

export default ProductCard;
