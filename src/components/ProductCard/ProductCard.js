import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { productsList } from "../../constant/productsList";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";

const ProductCard = () => {
  const [bookMark, setBookMark] = useState(false);

  const markItAsBookMark = () => {
    setBookMark(!bookMark);
  };

  console.log(productsList);

  return (
    <>
      <div className="md:pl-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {productsList && productsList.length > 0
          ? productsList.map((product) => (
              <div key={product.id}>
                <div className="border border-[#0000004D] ">
                  <div>
                    <div className="flex justify-end p-2">
                      {bookMark ? (
                        <FaHeart
                          color="red"
                          className="cursor-pointer"
                          onClick={markItAsBookMark}
                        />
                      ) : (
                        <CiHeart
                          className="cursor-pointer"
                          onClick={markItAsBookMark}
                        />
                      )}
                    </div>
                    <div className="flex flex-col items-center ">
                      <img
                        src={product.imgUrl}
                        alt=""
                        className="w-64 h-64 p-5"
                      />
                      <p className="text-center text-white font-[600] text-base py-2 bg-[#165315] w-full h-9">
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
                    <button className="bg-[#165315] rounded-lg px-2 py-1 text-white flex items-center">
                      <FiMinus className="mr-2" /> Add to cart{" "}
                      <FiPlus className="ml-2" />
                    </button>
                    <button className="border border-[#165315] rounded-lg px-2 py-1 text-[#165315] font-[500] text-[15px]">
                      Buy on Rent
                    </button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="p-3 my-10 flex justify-center">
        <div className="md:w-[50%] lg:w-[20%] flex justify-between items-center">
          <button className="flex items-center">
            <PiLessThan className="mr-1" /> Prev
          </button>
          <button className="flex items-center">
            Next <PiGreaterThan className="ml-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
