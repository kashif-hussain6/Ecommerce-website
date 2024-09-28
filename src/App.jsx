import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import headphone from './assets/hero/headphone.png';
import watch from './assets/hero/watch.png';
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

const BannerData = {
  discount: '30% OFF',
  title: 'Fine Smile',
  date: '10 Jan to 28 Jan',
  image: headphone,
  title2: 'Air Solo Bass',
  title3: 'Winter Sale',
  title4: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
  bgColor: '#f42c37',
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: watch,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [loginPopup, setLoginPopup] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [cartCount, setCartCount] = React.useState(0);
  const [cartItems, setCartItems] = React.useState([]);
  const [showCart, setShowCart] = React.useState(false); // New state to control cart popup visibility

  const handleOrderPopup = () => {
    if (!isLoggedIn) {
      setLoginPopup(true);
    } else {
      setOrderPopup(!orderPopup);
    }
  };

  const handleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  const handleLogin = () => { 
    setIsLoggedIn(true);
    setLoginPopup(false);
    toast.success('Logged in successfully!');
  };

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }

    setCartCount(cartCount + quantity);
    setShowCart(true); // Show cart when a product is added
    toast.success('Product added to cart!');
  };

  const removeFromCart = (productId) => {
    const itemToRemove = cartItems.find(item => item.id === productId);
    if (itemToRemove) {
      const updatedCartItems = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCartItems);
      setCartCount(cartCount - itemToRemove.quantity);
      
      // Hide the popup if the cart is empty after removing an item
      if (updatedCartItems.length === 0) {
        setShowCart(false);
      }
      
      toast.info('Product removed from cart!');
    }
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar
        handleLoginPopup={handleLoginPopup}
        isLoggedIn={isLoggedIn}
        cartCount={cartCount}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        showCart={showCart} // Pass showCart state to Navbar
        setShowCart={setShowCart} // Pass setShowCart to Navbar to control popup visibility
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        handleOrderPopup={handleOrderPopup}
      />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Banner data={BannerData} />
      <Products 
        orderPopup={orderPopup} 
        handleOrderPopup={handleOrderPopup} 
        isLoggedIn={isLoggedIn} 
        handleLoginPopup={handleLoginPopup} 
        handleLogin={handleLogin} 
        addToCart={addToCart} 
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
