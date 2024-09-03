import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Heading from './components/Shared/Heading';
import Popup from './components/Popup/Popup'; // Import Popup component
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images
import headphone from './assets/hero/headphone.png';
import Products from './components/Products/Products';

const BannerData = {
    discount: '30% OFF',
    title: 'Fine Smile',
    date: '10 Jan to 28 Jan',
    image: headphone,
    title2: 'Air Solo Bass',
    title3: 'Winter Sale',
    title4:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
    bgColor: '#f42c37',
};

const App = () => {
    const [orderPopup, setOrderPopup] = React.useState(false); // State to manage popup visibility

    const handleOrderPopup = () => { // Function to toggle popup
        setOrderPopup(!orderPopup);
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
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Hero handleOrderPopup={handleOrderPopup} />
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData} />
            <Products />
            <Heading title="Welcome to My App" subtitle="Explore our features" />
            <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} /> 
        </div>
    );
};

export default App;
