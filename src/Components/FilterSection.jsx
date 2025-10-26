import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const FilterSection = ({ Search, setSearch, Brand, priceRange, setpriceRange, Category, handelBrandChange, handelCategoryChange }) => {
  const { categories, brand } = useContext(dataContext)

  return (
    <div className="mt-9 bg-gray-100 rounded-md p-4 h-max">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-red-400"
      />

      {/* Categories */}
      <h1 className="mt-5 font-semibold text-xl text-gray-800">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categories?.map((category, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={category}
              name={category}
              checked={Category === category}
              value={category}
              onChange={handelCategoryChange}
              className="w-4 h-4"
            />
            <label htmlFor={category} className="cursor-pointer uppercase text-gray-700">
              {category}
            </label>
          </div>
        ))}
      </div>

      {/* Brand */}
      <h1 className="mt-5 font-semibold text-xl text-gray-800">Brand</h1>
      <select
        className="w-full mt-3 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-red-400"
        value={Brand}
        onChange={handelBrandChange}
      >
        {brand?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* Price Range */}
      <h1 className="mt-5 font-semibold text-xl mb-3">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label>
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          min='0'
          max='1000'
          value={priceRange[1]}
          onChange={(e) => setpriceRange([priceRange[0], Number(e.target.value)])}
        />
      </div>

      {/* Reset Filters */}
      <button
        className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer"
        onClick={() => {
          setSearch('')
          setpriceRange([0, 1000])
          // Optionally reset Brand & Category
        }}
      >
        Reset Filters
      </button>
    </div>
  )
}

export default FilterSection
