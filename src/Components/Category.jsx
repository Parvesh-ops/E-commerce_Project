import React, { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Category = () => {
  const { categories } = useContext(dataContext);

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-20 bg-white/5 backdrop-blur-md rounded-2xl mx-auto my-10 max-w-6xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 text-center">
        Shop by Category
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-around gap-4">
        {categories?.map((category, index) => (
          <button
            key={index}
            className="uppercase bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md cursor-pointer hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
