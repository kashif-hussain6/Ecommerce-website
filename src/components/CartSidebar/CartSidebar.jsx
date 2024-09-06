import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CartSidebar = ({ isCartOpen, toggleCart, cartItems }) => {
    console.log('CartSidebar isCartOpen:', isCartOpen);
    console.log('toggleCart:', toggleCart);
    console.log('cartItems:', cartItems);

    return (
        <div
            className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
        >
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button onClick={toggleCart} className="text-gray-600 dark:text-gray-400">
                    <FaTimes />
                </button>
            </div>
            <div className="p-4">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="border-b dark:border-gray-700 py-2">
                                {item.name} {/* Assuming each item has a name property */}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
