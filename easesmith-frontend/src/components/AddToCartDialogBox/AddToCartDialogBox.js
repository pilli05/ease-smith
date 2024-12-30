import { Dialog } from "@mui/material";
import React, { useContext } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { CartContext } from "../../App";
import "./AddToCartDialogBox.css";

const AddToCartDialogBox = ({ open, handleClose, productDetails }) => {
  const {
    name,
    description,
    imgUrl,
    ratings,
    reviewImage,
    actualPrice,
    discountPrice,
  } = productDetails;

  const { cartCount, setCartCount } = useContext(CartContext);

  const closeDialogBox = () => {
    handleClose();
  };

  const handleQuantityRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  const handleQuantityAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <div className="px-5 sm:px-16 lg:px-24 py-5 add-to-cart-dialog-box">
        <h1 className="text-2xl font-[700] text-[#165315] text-center">
          Are You Sure?
        </h1>
        <div className="relative flex flex-col items-end mt-7">
          <img src="/assets/cart.png" alt="account-profile" className="w-6" />
          <div className=" animate-bounce absolute top-[-18px] right-[-7px] bg-[#F3A939]  w-5 h-5 flex justify-center items-center rounded-full">
            <span className="text-[12px]">{cartCount}</span>
          </div>
        </div>
        <div className="shadow-md shadow-gray-500 my-5 flex flex-col items-center py-5 bg-white">
          <img
            src={imgUrl}
            alt={name}
            className="shadow-md rounded-full shadow-[#F3A939] p-5 w-[150px] h-[150px] mb-5"
          />
          <div className="p-2">
            <h1 className=" text-xl font-[600] text-[#000000]">{name}</h1>
            <p className="text-start text-base font-[400] text-[#838383]">
              {description}
            </p>
            <div className="flex items-center space-x-2">
              <img src={reviewImage} alt="rating" />
              <span className="mt-1 text-[#A5A1A1] text-base font-[500]">
                {ratings}
              </span>
            </div>
            <div className="flex items-center space-x-2 ">
              <span className="mt-1 text-[#A5A1A1] text-base font-[400] line-through">
                ₹ {actualPrice}
              </span>
              <span className="mt-1 text-[#5E5A5A] text-xl font-[600]">
                ₹ {discountPrice}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-normal sm:flex-row sm:justify-between sm:items-center">
          <div className="flex items-center sm:space-x-5 modal-close-buttons-container">
            <button
              className="border border-[#F3A939] px-3 py-2 close-button"
              onClick={closeDialogBox}
            >
              CLOSE
            </button>
            <p className="text-white bg-[#F3A939] px-3 py-2 rounded-lg  hover:text-[#F3A939] hover:bg-transparent hover:border hover:border-[#F3A939] transition-all duration-500 flex items-center">
              <FiMinus
                className={
                  cartCount === 0 ? "invisible" : "mr-2 cursor-pointer"
                }
                onClick={handleQuantityRemoveFromCart}
              />{" "}
              ADD TO CART
              <FiPlus
                className="ml-2 cursor-pointer"
                onClick={handleQuantityAddToCart}
              />
            </p>
          </div>
          <div className="mt-3 sm:mt-0 ">
            <button
              disabled={cartCount === 0}
              onClick={closeDialogBox}
              className={
                cartCount === 0
                  ? "text-white bg-[#438542] px-3 py-2 rounded-lg flex items-center"
                  : "text-white bg-[#165315] px-3 py-2 rounded-lg flex items-center"
              }
            >
              CONFIRM
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default AddToCartDialogBox;
