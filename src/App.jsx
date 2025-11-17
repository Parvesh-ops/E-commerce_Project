import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Cart from './Pages/Cart.jsx'
import CartContext from './Context/CartContext.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import BuyNow from './Components/BuyNow.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/buynow' element={<BuyNow />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
