import React, { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const Category = () => {
  const { categories } = useContext(dataContext);

  // ✅ Function to get unique categories

  console.log(categories);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Shop by Category</h2>
      <div className="flex flex-wrap justify-around gap-4 ">
        {categories?.map((category, index) => (
          <button
            key={index}
            className=" uppercase  bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow cursor-pointer hover:scale-105 transition-transform duration-300 "
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
