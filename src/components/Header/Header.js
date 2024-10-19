import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="bg-[#165315] px-3 py-2 grid grid-cols-12">
        <span className="text-white text-sm font-[500] col-span-12 md:col-span-7 text-end">
          Free Shipping on orders above 999 /-
        </span>
        <span className="text-white text-sm font-[500] col-span-12 md:col-span-5 text-end">
          Call us on: +91 98768 05120
        </span>
      </div>
      <div className="my-5 grid grid-cols-12 items-center px-10 sticky top-0 py-5 bg-white z-50">
        <div className="col-span-3 flex items-center">
          <img
            src="/assets/easesmith-logo.png"
            alt="logo"
            className="w-[60px] mr-4"
          />
          <span className="text-2xl font-[600] text-[#165315]">Chaperone</span>
        </div>
        <div className="col-span-6 text-base font-[500] flex items-center justify-between ">
          <span>Home</span>
          <span className="text-[#F3A939] border-b border-b-[#F3A939]">
            Plants & Pots
          </span>
          <span>Tools</span>
          <span>Our Services</span>
          <span>Blog</span>
          <span>Our Story</span>
          <span>FAQs</span>
        </div>
        <div className="col-span-3 flex justify-end space-x-5">
          <div className="flex flex-col items-center">
            <img
              src="/assets/account-profile.png"
              alt="account-profile"
              className="w-6"
            />
            <span className="text-[13px] font-[500] mt-1">My Profile</span>
          </div>
          <div className="relative flex flex-col items-center">
            <img src="/assets/cart.png" alt="account-profile" className="w-6" />
            <span className="text-[13px] font-[500] mt-1">Cart</span>
            <div className="absolute top-[-18px] right-[-7px] bg-[#F3A939]  w-5 h-5 flex justify-center items-center rounded-full">
              <span className="text-[12px]">3</span>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Header;
