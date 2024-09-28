import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart, FaTrashAlt } from "react-icons/fa"; 
import { Link } from "react-scroll";
import DarkMode from "./DarkMode";

const MenuLinks = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "Shop", link: "shop" },
  { id: 3, name: "Footer", link: "footer" },
  { id: 4, name: "Blogs", link: "blogs" },
];

const Navbar = ({ cartCount, cartItems, handleOrderPopup, removeFromCart }) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data) => (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      smooth={true}
                      duration={1000}
                      offset={-70}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 cursor-pointer"
                    >
                      {data.name}
                    </Link>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        >
                          Trending Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        >
                          Best Selling
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        >
                          Top Rated
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Cart Icon */}
            <button className="relative p-3" onClick={handleCartClick}>
              <FaShoppingCart className="text-xl text-gray-600 dark:text-gray-400" /> {/* Updated Icon */}
              {cartCount > 0 && (
                <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                  {cartCount}
                  <span className="animate-ping absolute inline-flex p-[7px] rounded-full bg-red-400 opacity-75"></span>
                </div>
              )}
            </button>
            {/* Cart Dropdown */}
            {showCart && (
              <div className="absolute right-0 top-16 bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg w-[300px] z-50 transition-transform transform duration-300 ease-in-out scale-100">
                <h3 className="text-lg font-semibold mb-4">Cart Items</h3>
                {cartItems.length > 0 ? (
                  <>
                    <ul className="space-y-2">
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex items-center gap-4 justify-between">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div>
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-gray-500 dark:text-gray-300">
                                ${item.price} x {item.quantity} = ${item.price * item.quantity}
                              </p>
                            </div>
                          </div>
                          {/* Delete Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrashAlt className="text-lg" />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex justify-between items-center">
                      <h4 className="font-semibold">Total:</h4>
                      <span className="text-lg font-bold">${getTotalPrice()}</span>
                    </div>
                  </>
                ) : (
                  <p>No items in the cart.</p>
                )}
              </div>
            )}
            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
