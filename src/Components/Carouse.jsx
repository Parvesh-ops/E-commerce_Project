import React, { useContext, useEffect } from "react";
import { dataContext } from "../Context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

const Carouse = () => {
  const { data, fetchProducts } = useContext(dataContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Custom Arrows
  const SampleNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 z-10 bg-red-400 p-2 rounded-full shadow-md cursor-pointer hover:bg-red-500 transition-all duration-300"
    >
      <AiOutlineArrowRight size={24} />
    </div>
  );

  const SamplePrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 z-10 bg-red-400 p-2 rounded-full shadow-md cursor-pointer hover:bg-red-500 transition-all duration-300"
    >
      <AiOutlineArrowLeft size={24} />
    </div>
  );

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {data?.slice(0, 5)?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
          >
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-4 py-10 md:py-16">
              <div className="space-y-4 md:space-y-6 max-w-md md:max-w-lg text-center md:text-left">
                <h3 className="text-red-500 font-semibold font-sans text-sm sm:text-base">
                  Powering Your World with the Best in Electronics
                </h3>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase line-clamp-3 text-white">
                  {item.title}
                </h1>
                <p className="text-gray-400 line-clamp-3 md:w-[400px] pr-0 md:pr-7">
                  {item.description}
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition cursor-pointer mt-2">
                  Shop Now
                </button>
              </div>
              <div className="flex justify-center md:justify-end w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-64 sm:w-72 md:w-80 lg:w-96 hover:scale-105 transition-all duration-300 shadow-2xl shadow-red-400"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
};

export default Carouse;
