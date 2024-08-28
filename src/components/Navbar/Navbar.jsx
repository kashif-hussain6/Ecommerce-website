import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let timeoutId = null;

  const DropdownLinks = [
    { id: 1, name: "Trending Products", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" },
    { id: 3, name: "Top Rated", link: "/#" },
  ];

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);  
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); 
  };

  return (
    <nav className="bg-gray-900 text-gray-400 py-6 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-10">
        <a href="#" className="text-primary text-2xl font-semibold tracking-widest uppercase sm:text-3xl">
          ESHOP
        </a>
        <ul className="flex space-x-8">
          <li><a href="#" className="hover:text-white">Home</a></li>
          <li><a href="#" className="hover:text-white">Shop</a></li>
          <li><a href="#" className="hover:text-white">About</a></li>
          <li><a href="#" className="hover:text-white">Blogs</a></li>
          <li className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
            <a href="#" className="hover:text-white flex items-center">
              Quick Links <FaCaretDown className="ml-1 transform duration-200" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </a>
            {dropdownOpen && (
              <ul className="absolute left-0 w-48 mt-2 p-2 bg-gray-800 text-white shadow-lg rounded-md z-10">
                {DropdownLinks.map((item) => (
                  <li key={item.id} className=" hover:bg-primary/20 font-semibold rounded-md space-y-3 p-2  w-full inline-block ">
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-10">
        <div className="relative group hidden sm:block">
          <input type="text" placeholder="Search" className="search-bar" />
          <FaSearch className="text-gray-600 text-xl cursor-pointer group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
        </div>
        <div className="relative">
          <FaShoppingCart className="text-gray-500 text-xl cursor-pointer" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">4</span>
        </div>
        <DarkMode />
      </div>
    </nav>
  );
}

export default Navbar;
