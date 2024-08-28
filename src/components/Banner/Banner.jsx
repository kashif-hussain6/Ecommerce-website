import React from 'react';
import headphoneImage from '../../assets/hero/headphone.png'; 

const Banner = () => {
    return (
        <div className="h-screen flex items-center justify-between px-28 bg-gradient-to-r from-gray-900 to-gray-800  ">
            <div className="text-white">
                <p className="text-lg font-semibold">Beats Solo</p>
                <h1 className="text-7xl font-bold">Wireless</h1>
                <h2 className="text-9xl font-bold text-gray-700 mt-2">HEADPHONES</h2>
                <button className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full">
                    Shop By Category
                </button>
            </div>

            <div className="flex-shrink-0">
                <img src={headphoneImage} alt="Wireless Headphones" className="" />
            </div>
        </div>
    );
};

export default Banner;
