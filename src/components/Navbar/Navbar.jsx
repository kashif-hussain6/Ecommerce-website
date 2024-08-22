import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-primary text-2xl font-semibold tracking-widest uppercase sm:text-3xl ">DSHOP</a>
        <ul className="flex space-x-8">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">Shop</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Blogs</a></li>
          <li className="relative group">
            <a href="#" className="hover:text-gray-400 flex items-center">
              Quick Links <FiChevronDown className="ml-1"/>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <FaSearch className="hover:text-gray-400 cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="hover:text-gray-400 cursor-pointer" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">4</span>
        </div>
        <div className="flex items-center">
          <label className="inline-flex items-center cursor-pointer">
            <span className="relative">
              <input type="checkbox" className="hidden" />
              <span className="w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
              <span className="absolute  w-4 h-4 bg-white rounded-full shadow inset-y-0 left-0" style={{ transform: "translateX(0)" }}></span>
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
