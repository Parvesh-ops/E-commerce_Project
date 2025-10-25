import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../Context/DataContext'
import FilterSection from '../Components/FilterSection.jsx'
import ProductsCard from '../Components/ProductCard.jsx'

const Products = () => {
  const { data, fetchProducts } = useContext(dataContext)
  const [Search, setSearch] = useState('')
  const [Category, setCategory] = useState('All')
  const [Brand, setBrand] = useState('Al')
  const [priceRange, setpriceRange] = useState(0, 1000)
  useEffect(() => {
    fetchProducts();
  }, [])

  const handelCategoryChange = (e)=>{
   setCategory(e.target.value) 
  }

  const handelBrandChange = (e)=>{
    setBrand(e.target.value)
  }

  const filteredData = data?.filter((item)=>(
item.title.toLowerCase().includes(Search.toLocaleLowerCase()) &&
(Category === "All" || item.Category === Category) &&
(Brand === "All" || item.Brand === Brand) &&
item.price >= priceRange[0] && item.price <= priceRange[1]
  ))

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div>
              <div className='flex gap-8'>
                <FilterSection Search={Search} setSearch={setSearch} Brand={Brand} setBrand={setBrand} priceRange={priceRange} setpriceRange={setpriceRange} Category={Category} setCategory={setCategory} handelCategoryChange ={handelCategoryChange} handelBrandChange={handelBrandChange}/>
                <div className='grid grid-cols-4 gap-7 mt -9'>
                  {
                    data?.map((products, index) => {
                      return <ProductsCard key={index} products={products} />
                    })

                  } </div>
              </div>
            </div>
          ) : (
            <div className='flex items-center justify-center h-[400px]'>
              {/* <Video muted autoPlay loop >
                <source src={Loading} type="" />
              </Video> */}

            </div>
          )
        }

      </div>
    </div>
  )
}

export default Products
