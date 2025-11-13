import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const FilterSection = ({
  Search,
  setSearch,
  Brand,
  priceRange,
  setpriceRange,
  Category,
  handelBrandChange,
  handelCategoryChange
}) => {
  const { categories, brand } = useContext(dataContext)

  return (
    <div className="mt-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-md w-full md:w-64 flex-shrink-0">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 mb-6"
      />

      {/* Categories */}
      <h2 className="font-semibold text-lg text-gray-800 mb-2">Category</h2>
      <div className="flex flex-col gap-2 mb-4">
        {categories?.map((category, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              checked={Category === category}
              onChange={handelCategoryChange}
              className="w-4 h-4 accent-red-500"
            />
            <span className="uppercase text-gray-700">{category}</span>
          </label>
        ))}
      </div>

      {/* Brand */}
      <h2 className="font-semibold text-lg text-gray-800 mb-2">Brand</h2>
      <select
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
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
      <h2 className="font-semibold text-lg text-gray-800 mb-2">Price Range</h2>
      <div className="flex flex-col gap-1 mb-4">
        <span className="text-gray-600 text-sm">
          ${priceRange[0]} - ${priceRange[1]}
        </span>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => setpriceRange([priceRange[0], Number(e.target.value)])}
          className="w-full accent-red-500"
        />
      </div>

      {/* Reset Filters */}
      <button
        className="w-full bg-red-500 text-white rounded-lg px-3 py-2 hover:bg-red-600 transition-all duration-200"
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
