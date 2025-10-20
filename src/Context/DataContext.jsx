import React, { createContext, useState } from 'react'
import axios from 'axios'

export const dataContext = createContext(null)

const DataContext = ({ children }) => {
  const [data, setData] = useState([])

  // Fetching products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
    //   setData(response.data)
    const productsData = response.data;
    setData(productsData);
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

    const uniqueCategories = (data, property) => {
    const allValues = data?.map((item) => item[property]); // Extract all categories
    const uniqueValues = ["All",...new Set(allValues)]; // Remove duplicates
    return uniqueValues;
  };

  const categories = uniqueCategories(data, "category");
  const brand = uniqueCategories(data, "brand");

  return (
    <dataContext.Provider value={{ data, setData, fetchProducts, categories,brand  }}>
      {children}
    </dataContext.Provider>
  )
}

export default DataContext
