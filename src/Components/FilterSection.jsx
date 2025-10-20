import React, { useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const FilterSection = () => {
    const { categories, brand } = useContext(dataContext)

    return (
        <div className="mt-9">
            <div className="bg-gray-100 rounded-md p-4 h-max">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white p-2 rounded-md border-2 border-gray-400 focus:outline-none focus:border-red-400"
                />

                {/* Categories */}
                <h1 className="mt-5 font-semibold text-xl text-gray-800">Category</h1>

                <div className="flex flex-col gap-2 mt-3">
                    {categories?.map((category, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <input type="checkbox" id={category} className="w-4 h-4" />
                            <label
                                htmlFor={category}
                                className="cursor-pointer uppercase text-gray-700"
                            >
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/*Brands Section can be added */}
            <h1 className="mt-5 font-semibold text-xl text-gray-800">Brand</h1>
<select className="w-full mt-3 p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:border-red-400">
    {brand?.map((brandName, index) => (
        <option key={index} value={brandName} className="uppercase">
            {brandName}
        </option>
    ))}
</select>

{/* Price Range Section can be added */}
<h1 className='flex flex-col '>Price </h1>
        </div>
    )
}

export default FilterSection
