import React from "react";
import "./Footer.css";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F0FFE5] px-5 md:px-10 lg:px-20 py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div>
            <h1 className="text-[20px] font-[500] text-[#000000]">
              SUBSCRIBE TO OUR <br />
              NEWSLETTER
            </h1>
            <p className="text-[14px] font-[400] text-[#838383] my-1">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necesbus enim
            </p>
            <input
              className="bg-white px-3 py-2 outline-none border border-[#0000004D] my-1"
              placeholder="Enter Your Email Address"
            />
            <br />
            <button className="my-1 bg-[#247822] text-white rounded-full px-4 py-2">
              Subscribe
            </button>
          </div>
          <div>
            <h1 className="text-[20px] font-[500] text-[#000000]">ABOUT US</h1>
            <ul>
              <li className="text-[15px] font-[500] text-[#999999] mt-8 mb-2">
                Our Story
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Blogs
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Careers
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Contact Us
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Help & Support
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] font-[500] text-[#000000]">
              OUR SERVICES
            </h1>
            <ul>
              <li className="text-[15px] font-[500] text-[#999999] mt-8 mb-2">
                Book Maali
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Plant Day Care
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Rent Plants
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Plants & Pots
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Gardening Tools
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] font-[500] text-[#000000]">
              USEFUL LINKS
            </h1>
            <ul>
              <li className="text-[15px] font-[500] text-[#999999] mt-8 mb-2">
                My Account
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Orders & Returns
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Track Order
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Terms & Conditions
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Privacy Policy
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Return, Refund & <br />
                Replacement Policy
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] font-[500] text-[#000000]">
              GET IN TOUCH
            </h1>
            <ul>
              <li className="text-[15px] font-[500] text-[#999999] mt-8 mb-2">
                Address: F-262, First Floor,
                <br /> Sushant Lok Phase-III,
                <br /> Sector-57, Gurgaon,
                <br /> Haryana, India 122003
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Call: <br />
                +919958287272
              </li>
              <li className="text-[15px] font-[500] text-[#999999] my-2">
                Email: <br />
                care@chaperoneplants.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 mb-2">
          <h1 className="font-[500] text-[22px] text-black my-2">CHAPERONE</h1>
          <p className="text-[#838383] text-[16px] font-400 leading-6">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
          <div>
            <h1 className="font-[500] text-[18px] text-black mt-3 mb-1">
              Follow us on
            </h1>
            <div className="flex items-center space-x-3 my-2">
              <CiInstagram size={20} />
              <FaFacebook size={20} />
              <BsFillThreadsFill size={20} />
              <FaYoutube size={20} />
              <FaLinkedin size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-[#0000004D] bg-[#F0FFE5] px-5 md:px-10 lg:px-20 py-2">
        <p className="text-base font-[500] text-[#0000004D] text-center md:text-start">
          © 2023, chaperone.com All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
