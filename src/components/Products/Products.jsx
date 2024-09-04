import React, { useState } from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import Popup from "../Popup/Popup";

import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-9.jpg";
import Img7 from "../../assets/product/p-7.jpg";

const ProductsData = [
  { id: 1, img: Img1, title: "Boat Headphone", price: "120", aosDelay: "0" },
  { id: 2, img: Img2, title: "Rocky Mountain", price: "420", aosDelay: "200" },
  { id: 3, img: Img3, title: "Goggles", price: "320", aosDelay: "400" },
  { id: 4, img: Img4, title: "Printed", price: "220", aosDelay: "600" },
];

const ProductsData2 = [
  { id: 1, img: Img5, title: "Boat Headphone", price: "120", aosDelay: "0" },
  { id: 2, img: Img6, title: "Rocky Mountain", price: "420", aosDelay: "200" },
  { id: 3, img: Img7, title: "Goggles", price: "320", aosDelay: "400" },
  { id: 4, img: Img5, title: "Printed", price: "220", aosDelay: "600" },
];

const Products = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true);
    setLoginPopup(false);
  };

  const handleOrderPopup = (product = null) => {
    if (!isLoggedIn) {
      setLoginPopup(true);
    } else {
      setSelectedProduct(product);
      setOrderPopup(!orderPopup);
    }
  };

  return (
    <div>
      <div className="container">
        <Heading title="Our Products" subtitle="Explore Our Products" />
        <ProductCard
          data={ProductsData}
          handleOrderPopup={handleOrderPopup}
        />
        <ProductCard
          data={ProductsData2}
          handleOrderPopup={handleOrderPopup}
        />
        <Popup
          orderPopup={orderPopup}
          handleOrderPopup={handleOrderPopup}
          product={selectedProduct}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        {loginPopup && (
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[300px] p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              <h1 className="text-center mb-4">Login</h1>
              <input type="text" placeholder="Name" className="form-input mb-2" />
              <input type="email" placeholder="Email" className="form-input mb-2" />
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleLogin}
                  className="bg-primary text-white py-2 px-4 rounded-full"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
