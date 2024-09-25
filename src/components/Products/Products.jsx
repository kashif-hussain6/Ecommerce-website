
import React, { useState } from 'react';
import Heading from '../Shared/Heading';
import ProductCard from './ProductCard';
import Popup from '../Popup/Popup';

import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-4.jpg';
import Img5 from '../../assets/product/p-5.jpg';
import Img6 from '../../assets/product/p-9.jpg';
import Img7 from '../../assets/product/p-7.jpg';

const ProductsData = [
  { id: 1, img: Img1, title: 'Boat Headphone', price: '120', aosDelay: '0' },
  { id: 2, img: Img2, title: 'Rocky Mountain', price: '420', aosDelay: '200' },
  { id: 3, img: Img3, title: 'Goggles', price: '320', aosDelay: '400' },
  { id: 4, img: Img4, title: 'Printed', price: '220', aosDelay: '600' },
];

const ProductsData2 = [
  { id: 5, img: Img5, title: 'Boat Headphone', price: '120', aosDelay: '0' },
  { id: 6, img: Img6, title: 'Rocky Mountain', price: '420', aosDelay: '200' },
  { id: 7, img: Img7, title: 'Goggles', price: '320', aosDelay: '400' },
  { id: 8, img: Img5, title: 'Printed', price: '220', aosDelay: '600' },
];

const Products = ({
  orderPopup,
  handleOrderPopup,
  isLoggedIn,
  handleLoginPopup,
  handleLogin,
  addToCart,
}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleOrderPopupWithProduct = (product) => {
    if (!isLoggedIn) {
      handleLoginPopup();
    } else {
      setSelectedProduct(product);
      handleOrderPopup();
    }
  };

  return (
    <div id="shop"> {/* Added id="shop" */}
      <div className="container">
        <Heading title="Our Products" subtitle="Explore Our Products" />
        <ProductCard data={ProductsData} handleOrderPopup={handleOrderPopupWithProduct} />
        <ProductCard data={ProductsData2} handleOrderPopup={handleOrderPopupWithProduct} />
        <Popup
          orderPopup={orderPopup}
          handleOrderPopup={handleOrderPopup}
          loginPopup={handleLoginPopup}
          handleLoginPopup={handleLoginPopup}
          handleLogin={handleLogin}
          product={selectedProduct}
          quantity={quantity}
          setQuantity={setQuantity}
          isLoggedIn={isLoggedIn}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default Products;
