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

  return (
    <dataContext.Provider value={{ data, setData, fetchProducts }}>
      {children}
    </dataContext.Provider>
  )
}

export default DataContext
