import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-red-500">Join</span> with us !!!
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your phone"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-red-500 hover:bg-red-600 duration-300 px-5 py-2.5 font-bold
           rounded-md text-black md:w-auto w-full"
          >
            Request Code
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <span className="text-red-500">Bùi Văn Khải ft Thân Việt Anh</span>
        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  );
};

export default Footer;