import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Heading from './components/Shared/Heading';
import Popup from './components/Popup/Popup';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images
import headphone from './assets/hero/headphone.png';

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

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false); // State to manage order popup visibility
    const [loginPopup, setLoginPopup] = React.useState(false); // State to manage login popup visibility
    const [isLoggedIn, setIsLoggedIn] = React.useState(false); // State to track if user is logged in

    const handleOrderPopup = () => {
        if (!isLoggedIn) {
            setLoginPopup(true); // Show login popup if not logged in
        } else {
            setOrderPopup(!orderPopup); // Toggle order popup
        }
    };

    const handleLoginPopup = () => {
        setLoginPopup(!loginPopup); // Toggle login popup
    };

    const handleLogin = () => {
        setIsLoggedIn(true); // Set user as logged in
        setLoginPopup(false); // Close login popup
    };

    React.useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
            offset: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar handleLoginPopup={handleLoginPopup} isLoggedIn={isLoggedIn} />
            <Hero handleOrderPopup={handleOrderPopup} />
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData} />
            <Products 
                orderPopup={orderPopup} 
                handleOrderPopup={handleOrderPopup} 
                isLoggedIn={isLoggedIn} 
            />
            <Heading title="Welcome to My App" subtitle="Explore our features" />
            <Popup 
                orderPopup={orderPopup} 
                handleOrderPopup={handleOrderPopup} 
                loginPopup={loginPopup}
                handleLoginPopup={handleLoginPopup} 
                handleLogin={handleLogin} 
            />
        </div>
    );
};

export default App;
