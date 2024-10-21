import React, { useContext, useState } from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { CartContext } from "../../App";
import { Popper } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  };

  const { cartCount } = useContext(CartContext);

  const [open, setOpen] = useState(false);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [showTools, setShowTools] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const handleToolsClick = (event) => {
    setAnchorEl1(anchorEl1 ? null : event.currentTarget);
  };

  const handleServicesClick = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };

  let openToolsMenu = Boolean(anchorEl1);
  const idTools = openToolsMenu ? "simple-popper" : undefined;

  let openServicesMenu = Boolean(anchorEl2);
  const idServices = openServicesMenu ? "simple-popper" : undefined;

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setShowServices(false);
    setShowTools(false);
  };

  const handleShowTools = () => {
    setShowTools(!showTools);
  };

  const handleShowServices = () => {
    setShowServices(!showServices);
  };

  const DrawerList = (
    <Box sx={{ width: 300, padding: "20px" }} role="presentation">
      <div
        className="flex justify-end border-b border-b-[#165315] pb-3"
        onClick={toggleDrawer(false)}
      >
        <MdOutlineClose color="red" />
      </div>
      <div className="my-10 flex justify-evenly">
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
            <span className="text-[12px]">{cartCount}</span>
          </div>
        </div>
      </div>
      <ul className="">
        <li
          className="text-[15px] font-[500] text-[#999999] mt-8 mb-2"
          onClick={toggleDrawer(false)}
        >
          Home
        </li>
        <li
          className="text-[15px] font-[500] inline-flex my-2 text-[#F3A939] border-b border-b-[#F3A939]"
          onClick={toggleDrawer(false)}
        >
          Plants & Pots
        </li>
        <li
          className="text-[15px] font-[500] text-[#999999] my-2"
          onClick={toggleDrawer(false)}
        >
          Careers
        </li>
        <li className="text-[15px] font-[500] text-[#999999] my-2">
          <div className="flex items-center">
            <span>Tools</span>{" "}
            <IoIosArrowDown className="ml-1 mt-1" onClick={handleShowTools} />
          </div>
          {showTools ? (
            <div
              className="text-sm text-[#838383]  p-2 shadow-md shadow-gray-500 bg-white space-y-3"
              onClick={toggleDrawer(false)}
            >
              <p>Gardening Tools</p>
              <p>Pest Control</p>
              <p>Fertilizers</p>
              <p>Watering Cans</p>
              <p>Gardening Accessories</p>
            </div>
          ) : null}
        </li>
        <li className="text-[15px] font-[500] text-[#999999] my-2 ">
          <div className="flex items-center">
            <span>Our Services</span>{" "}
            <IoIosArrowDown
              className="ml-1 mt-1"
              onClick={handleShowServices}
            />
          </div>
          {showServices ? (
            <div
              className="text-sm text-[#838383]  p-2 shadow-md shadow-gray-500 bg-white space-y-3"
              onClick={toggleDrawer(false)}
            >
              <p>Book a Maali</p>
              <p>Plant Day Care</p>
              <p>Rent Plants</p>
            </div>
          ) : null}
        </li>
        <li
          className="text-[15px] font-[500] text-[#999999] my-2"
          onClick={toggleDrawer(false)}
        >
          Blog
        </li>
        <li
          className="text-[15px] font-[500] text-[#999999] my-2"
          onClick={toggleDrawer(false)}
        >
          Our Story
        </li>
        <li className="text-[15px] font-[500] text-[#999999] my-2">FAQs</li>
      </ul>
    </Box>
  );

  return (
    <>
      <div className="bg-[#165315] px-3 py-3 md:py-2 grid grid-cols-12 space-y-1 md:space-y-0">
        <span className="text-white text-sm font-[500] col-span-12 md:col-span-7 text-center md:text-end">
          Free Shipping on orders above 999 /-
        </span>
        <span className="text-white text-sm font-[500] col-span-12 md:col-span-5 text-center md:text-end">
          Call us on: +91 98768 05120
        </span>
      </div>
      <div className="hidden lg:block sticky top-0 bg-white z-50 shadow">
        <div className=" my-5 grid grid-cols-12 items-center px-10 py-5">
          <div className="col-span-3 flex items-center ">
            <img
              src="/assets/easesmith-logo.png"
              alt="logo"
              className="w-[60px] mr-4 cursor-pointer"
              onClick={handleHomePage}
            />
            <span className="text-2xl font-[600] text-[#165315]">
              Chaperone
            </span>
          </div>
          <div className="col-span-7 text-base font-[500] flex items-center justify-between ">
            <span className="cursor-pointer">Home</span>
            <span className="text-[#F3A939] border-b border-b-[#F3A939] cursor-pointer">
              Plants & Pots
            </span>
            <div>
              <span className="cursor-pointer flex items-center">
                Tools{" "}
                <IoIosArrowDown
                  className="ml-1 mt-1"
                  aria-describedby={idTools}
                  type="button"
                  onClick={handleToolsClick}
                />
              </span>

              <Popper
                id={idTools}
                open={openToolsMenu}
                anchorEl={anchorEl1}
                className="z-50 "
              >
                <Box sx={{ p: 1, bgcolor: "background.paper" }}>
                  <div className="text-sm text-[#838383]  p-2 shadow-md shadow-gray-500 bg-white space-y-3">
                    <p>Gardening Tools</p>
                    <p>Pest Control</p>
                    <p>Fertilizers</p>
                    <p>Watering Cans</p>
                    <p>Gardening Accessories</p>
                  </div>
                </Box>
              </Popper>
            </div>
            <div>
              <span className="cursor-pointer flex items-center">
                Our Services{" "}
                <IoIosArrowDown
                  className="ml-1 mt-1"
                  aria-describedby={idServices}
                  type="button"
                  onClick={handleServicesClick}
                />
              </span>
              <Popper
                id={idServices}
                open={openServicesMenu}
                anchorEl={anchorEl2}
                className="z-50 "
              >
                <Box sx={{ p: 1, bgcolor: "background.paper" }}>
                  <div className="text-sm text-[#838383]  p-2 shadow-md shadow-gray-500 bg-white space-y-3">
                    <p>Book a Maali</p>
                    <p>Plant Day Care</p>
                    <p>Rent Plants</p>
                  </div>
                </Box>
              </Popper>
            </div>
            <span className="cursor-pointer">Blog</span>
            <span className="cursor-pointer">Our Story</span>
            <span className="cursor-pointer">FAQs</span>
          </div>
          <div className="col-span-2 flex justify-end space-x-5">
            <div className="flex flex-col items-center">
              <img
                src="/assets/account-profile.png"
                alt="account-profile"
                className="w-6"
              />
              <span className="text-[13px] font-[500] mt-1">My Profile</span>
            </div>
            <div className="relative flex flex-col items-center">
              <img
                src="/assets/cart.png"
                alt="account-profile"
                className="w-6"
              />
              <span className="text-[13px] font-[500] mt-1">Cart</span>
              <div className="absolute top-[-18px] right-[-7px] bg-[#F3A939]  w-5 h-5 flex justify-center items-center rounded-full">
                <span className="text-[12px]">{cartCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50 bg-white shadow">
        <div className="block lg:hidden flex justify-between items-center px-5 py-5">
          <div className="col-span-3 flex items-center ">
            <img
              src="/assets/easesmith-logo.png"
              alt="logo"
              className="w-[60px] mr-4 cursor-pointer"
              onClick={handleHomePage}
            />
            <span className="text-2xl font-[600] text-[#165315]">
              Chaperone
            </span>
          </div>
          <div className="">
            <RxHamburgerMenu size={25} onClick={toggleDrawer(true)} />
          </div>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </div>
      <div className="flex justify-center px-5 mt-7">
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
