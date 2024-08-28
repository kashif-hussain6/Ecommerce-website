import React from "react";
import Slider from "react-slick";
import headphoneImage from "../../assets/hero/headphone.png"; // Replace with the actual path to your image

const Banner = () => {
  const BannerData = [
    {
      id: 1,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Headphones",
      img: headphoneImage,
    },
    {
      id: 2,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Virtual",
      img: headphoneImage,
    },
    {
      id: 3,
      subtitle: "Beats Solo",
      title: "Wireless",
      title2: "Branded",
      img: headphoneImage,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900">
    <div className="overflow-hidden rounded-3xl min-h-[500px] sm:min-h-[650px] bg-[#1c2535] flex justify-center items-center">
      <div className="w-full">
        <Slider {...settings}>
          {BannerData.map((data) => (
            <div key={data.id} className="flex flex-col sm:flex-row justify-between items-center h-full">
              <div className="text-white space-y-4 p-4 text-center sm:text-left">
                <p className="text-2xl sm:text-4xl lg:text-2xl font-bold">{data.subtitle}</p>
                <h1 className="text-5xl sm:text-6xl lg-text-7xl font-bold">{data.title}</h1>
                <h2 className="text-5xl uppercase md:text-[100px] sm:text-[80px] xl:text-[150px] font-bold text-opacity-5 text-white leading-none">
                  {data.title2}
                </h2>
                <button className="bg-red-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md hover:bg-red-600 transition duration-300">
                  Shop By Category
                </button>
              </div>
             
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
  
  );
};

export default Banner;
