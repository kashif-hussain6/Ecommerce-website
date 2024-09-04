import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, handleOrderPopup, product, quantity, setQuantity }) => {
  if (!product) return null;

  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              {/* Header section */}
              <div className="flex items-center justify-between">
                <h1>Order Now</h1>
                <div>
                  <IoCloseOutline
                    onClick={() => handleOrderPopup(null)}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>

              {/* Form section */}
              <div className="mt-4">
                <img src={product.img} alt={product.title} className="w-full h-[180px] object-cover rounded-md" />
                <h2 className="font-semibold mt-2">{product.title}</h2>
                <h2 className="font-bold">${product.price}</h2>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="form-input mt-2"
                />
                <div className="flex justify-center mt-4">
                  <Button
                    text="Order Now"
                    bgColor="bg-primary"
                    textColor="text-white"
                    handler={() => handleOrderPopup(null)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
