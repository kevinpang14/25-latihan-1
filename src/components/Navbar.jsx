import React from "react";
import logoTokopedia from "../assets/logoTokopedia.jpg";

const Navbar = () => {
  return (
    <div className=" border-black shadow-md mb-10 mt-5">
      <div
        id="navbar"
        className="max-w-screen-lg mx-auto border-b-2 position-fixed mb-10"
      >
        <div id="navbarLogo" className="mb-5">
          <div>
            <img src={logoTokopedia} alt="logoTokopedia" />
          </div>
        </div>
        <div id="navbarMenu" className="flex flex-row justify-between mb-5">
          <div id="navbarMenuList">
            <ul className="flex flex-row flex-wrap space-x-4 text-md py-1">
              <li className=" hover:border-blue-500 cursor-pointer border-b-2 border-white">
                Home
              </li>
              <li className=" hover:border-blue-500 cursor-pointer border-b-2 border-white">
                Company
              </li>
              <li className="group relative hover:border-blue-500 cursor-pointer border-b-2 border-white">
                Community
                {/* dropdown community, pop when hover */}
                <div className="absolute hidden group-hover:block top-full left-0 w-48 bg-white shadow-md z-10">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-blue-400">
                      Seller Story
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer hover:text-blue-400">
                      Life at Tokopedia
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" hover:border-blue-500 cursor-pointer border-b-2 border-white">
                Stories
              </li>
              <li className=" hover:border-blue-500 cursor-pointer border-b-2 border-white">
                Insight
              </li>
              <li className=" hover:border-blue-500 cursor-pointer border-b-2 border-white">
                Top List
              </li>
              <li className=" hover:border-blue-500 cursor-pointer border-b-2 border-white">
                Newsroom
              </li>
              <li className=" hover:border-blue-500 cursor-pointer border-b-2 border-white">
                Kalkupedia
              </li>
            </ul>
          </div>
          <div id="navbarSearch" className="py-1">
            Search
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
