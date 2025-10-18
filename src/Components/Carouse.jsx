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
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 right-5 z-10 bg-red-400 p-2 rounded-full shadow-md cursor-pointer hover:bg-red-500 hover:red-500 transition-all duration-300"
      >
        <AiOutlineArrowRight size={24} />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 left-5 z-10 bg-red-400 p-2 rounded-full shadow-md cursor-pointer hover:bg-red-500 hover:bg-red-400transition-all duration-300"
      >
        <AiOutlineArrowLeft size={24} />
      </div>
    );
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {data?.slice(0, 5)?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
          >
            <div className="flex gap-10 justify-center h-[600px] items-center px-4">
              <div className="space-y-6">
                <h3 className="text-red-500 font-semibold font-sans text-sm">
                  Powering Your World with the Best in Electronics
                </h3>
                <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                  {item.title}
                </h1>
                <p className="text-gray-400 line-clamp-3 md:w-[400px] pr-7">
                  {item.description}
                </p>
                <button className="bg-red-500 text-white px-2 py-1.5 rounded-md hover:bg-red-600 transition cursor-pointer mt-2">
                  Shop Now
                </button>
              </div>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-[360px] hover:scale-110 transition-all duration-300 shadow-2xl shadow-red-400"
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
