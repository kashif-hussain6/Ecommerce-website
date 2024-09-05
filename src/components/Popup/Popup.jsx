import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../Shared/Button';

const Popup = ({ 
  orderPopup, 
  handleOrderPopup, 
  loginPopup, 
  handleLoginPopup, 
  handleLogin, 
  product, 
  quantity, 
  setQuantity, 
  isLoggedIn 
}) => {
    return (
        <>
            {/* Login Popup */}
            {!isLoggedIn && loginPopup && (
                <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
                    <div className="relative w-[300px] p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
                        {/* Close icon for Login Popup */}
                        <IoCloseOutline
                            onClick={handleLoginPopup}
                            className="absolute top-4 right-4 text-2xl cursor-pointer text-gray-600 dark:text-gray-300"
                        />
                        <h1 className="text-center mb-4">Login</h1>
                        <div className="mt-4">
                            <input type="text" placeholder="Name" className="form-input mb-2" />
                            <input type="email" placeholder="Email" className="form-input mb-2" />
                            <input type="text" placeholder="Address" className="form-input mb-2" />
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handleLogin}
                                    className="bg-primary w-full text-white py-2 px-4 rounded-full"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Order Popup */}
            {orderPopup && product && (
                <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
                    <div className="relative w-[300px] p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
                        {/* Header section */}
                        <div className="flex items-center justify-between">
                            <h1>Order Now</h1>
                            <IoCloseOutline
                                onClick={() => handleOrderPopup()}
                                className="text-2xl cursor-pointer text-gray-600 dark:text-gray-300"
                            />
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
                                    handler={() => handleOrderPopup()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
