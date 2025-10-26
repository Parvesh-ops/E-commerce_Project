import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../Context/DataContext'
import FilterSection from '../Components/FilterSection.jsx'
import ProductsCard from '../Components/ProductCard.jsx'
import Pagination from './Pagination.jsx'
import Lottie from 'lottie-react'
import notfound from '../assets/notfound.json'
const Products = () => {
  const { data, fetchProducts } = useContext(dataContext)

  const [Search, setSearch] = useState('')
  const [Category, setCategory] = useState('All')
  const [Brand, setBrand] = useState('All')
  const [priceRange, setpriceRange] = useState([0, 1000])
  const [Page, setPage] = useState(1)

  useEffect(() => {
    fetchProducts()
  }, [])

  const handelCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const handelBrandChange = (e) => {
    setBrand(e.target.value)
  }

  const pageHandler = (selectedPage) => setPage(selectedPage);


  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(Search.toLowerCase()) &&
      (Category === 'All' || item.category === Category) &&
      (Brand === 'All' || item.brand === Brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  )


  const dynamicPage = Math.ceil(filteredData?.length / 8)



  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 mb-10">

        {data?.length > 0 ? (
          <>
            <div className="flex gap-8">
              <FilterSection
                Search={Search}
                setSearch={setSearch}
                Brand={Brand}
                priceRange={priceRange}
                setpriceRange={setpriceRange}
                Category={Category}
                handelCategoryChange={handelCategoryChange}
                handelBrandChange={handelBrandChange}
              />

              {
                filteredData?.length > 0 ? (
                  <div className='flex flex-col justify-center items-center'>
                    <div className="grid grid-cols-4 gap-7 mt-9">
                      {filteredData?.slice(Page * 8 - 8, Page * 8).map((product, index) => (
                        <ProductsCard key={index} products={product} />
                      ))}
                    </div>
                    <Pagination
                      Page={Page}
                      pageHandler={pageHandler}
                      dynamicPage={dynamicPage}
                    />
                  </div>
                ) : (
                  <div className=' flext justify-center items-center md:h-[720px] md:w-[900px] mt-10'>
                    <Lottie animationData={notfound} classID='w-[500px]' />
                  </div>
                )
              }


            </div>

          </>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            {/* Loading animation or placeholder here */}
          </div>
        )}
      </div>
    </div>
  )
}

export default Products
