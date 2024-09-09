import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Popup from './components/Popup/Popup';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import images    
import headphone from './assets/hero/headphone.png';
import watch from './assets/hero/watch.png';


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
    image: watch ,
    title2: "Smart Solo",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "#2dcc6f",
  };



  


const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false);
    const [loginPopup, setLoginPopup] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [cartCount, setCartCount] = React.useState(0); 

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

    const addToCart = () => {
        setCartCount(cartCount + 1); 
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
            />
            <Hero handleOrderPopup={handleOrderPopup} />
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData} />
            <Products 
                orderPopup={orderPopup} 
                handleOrderPopup={handleOrderPopup} 
                isLoggedIn={isLoggedIn} 
                handleLoginPopup={handleLoginPopup} 
                handleLogin={handleLogin} 
                addToCart={addToCart} 
            />
            <Popup 
                orderPopup={orderPopup} 
                handleOrderPopup={handleOrderPopup} 
                loginPopup={loginPopup} 
                handleLoginPopup={handleLoginPopup} 
                handleLogin={handleLogin} 
                isLoggedIn={isLoggedIn} 
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
            
        </div>

    );
};

export default App;
