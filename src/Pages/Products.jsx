import React, { useContext, useEffect } from 'react'
import { dataContext } from '../Context/DataContext'
import FilterSection from '../Components/FilterSection.jsx'
import ProductsCard from '../Components/ProductCard.jsx'

const Products = () => {
  const { data, fetchProducts } = useContext(dataContext)
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
          data?.length > 0 ? (
            <div>
              <div className='flex gap-8'>
                <FilterSection />
                <div className='grid grid-cols-4 gap-7 mt -9'>
                  {
                    data?.map((products,index)=>{
                      return <ProductsCard key={index} products = {products} />
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
