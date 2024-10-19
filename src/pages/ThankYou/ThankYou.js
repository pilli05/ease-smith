import React from "react";
import "./ThankYou.css";
import { useNavigate } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleProductsPage = () => {
    navigate("/products");
  };

  return (
    <div className="my-10 ">
      <div className="relative mx-10 md:mx-24 lg:mx-60 border-b-2 pb-2 border-b-[#B0B0B0]">
        <h1 className="text-center text-[#0F4811] font-400 text-base">
          Your Cart
        </h1>
        <span className="absolute top-[-10px] right-[50px]">
          <RiCloseLine
            size={20}
            className="cursor-pointer"
            onClick={handleProductsPage}
          />
        </span>
      </div>
      <div className="my-10 flex flex-col items-center">
        <h1 className="font-[600] text-2xl text-[#0F4811] text-center">
          Congratulations <br />
          Order Placed!
        </h1>

        <img
          src="/assets/thank-you-image.png"
          alt="thank-you"
          className="my-5"
        />
        <p className="font-[400] text-base text-[#0F4811] text-center">
          Thank you for choosing Chaperone services. <br />
          We will soon get in touch with you!
        </p>
        <button
          className="bg-[#165315] px-10 py-2 text-white my-5 hover:bg-transparent hover:border hover:border-[#165315] hover:text-[#165315] transition-all duration-500"
          onClick={handleProductsPage}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
