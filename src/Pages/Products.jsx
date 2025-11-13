import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../Context/DataContext';
import FilterSection from '../Components/FilterSection.jsx';
import ProductsCard from '../Components/ProductCard.jsx';
import Pagination from './Pagination.jsx';
import Lottie from 'lottie-react';
import notfound from '../assets/notfound.json';

const Products = () => {
  const { data, fetchProducts } = useContext(dataContext);

  const [Search, setSearch] = useState('');
  const [Category, setCategory] = useState('All');
  const [Brand, setBrand] = useState('All');
  const [priceRange, setpriceRange] = useState([0, 1000]);
  const [Page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
    window.scrollTo(0, 0);
  }, []);

  const handelCategoryChange = (e) => setCategory(e.target.value);
  const handelBrandChange = (e) => setBrand(e.target.value);
  const pageHandler = (selectedPage) => setPage(selectedPage);

  const filteredData = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(Search.toLowerCase()) &&
      (Category === 'All' || item.category === Category) &&
      (Brand === 'All' || item.brand === Brand) &&
      item.price >= priceRange[0] &&
      item.price <= priceRange[1]
  );

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {data?.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="w-full md:w-1/4">
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
          </div>

          {/* Products Section */}
          <div className="w-full md:w-3/4 flex flex-col items-center">
            {filteredData?.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full">
                  {filteredData?.slice(Page * 8 - 8, Page * 8).map((product, index) => (
                    <ProductsCard key={index} products={product} />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination Page={Page} pageHandler={pageHandler} dynamicPage={dynamicPage} />
              </>
            ) : (
              <div className="flex justify-center items-center w-full mt-10">
                <Lottie animationData={notfound} className="w-72 sm:w-96" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-80">
          {/* Loading animation or placeholder */}
          <p className="text-gray-500">Loading products...</p>
        </div>
      )}
    </div>
  );
};

export default Products;
