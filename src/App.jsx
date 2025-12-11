// import React from 'react'
// import { BrowserRouter, Routes, Route, RouterProvider,createBrowserRouter } from 'react-router-dom'
// import Home from './Pages/Home.jsx'
// import Products from './Pages/Products.jsx'
// import About from './Pages/About.jsx'
// import Contact from './Pages/Contact.jsx'
// import Cart from './Pages/Cart.jsx'
// // import Navbar from './Components/Navbar.jsx'
// // import Footer from './Components/Footer.jsx'
// import SingleProduct from './Pages/SingleProduct.jsx'
// import BuyNow from './Components/BuyNow.jsx'
// import Dashboard from './Pages/Dashboard.jsx'

// const App = () => {
//   return (
//     <>
//       {/* <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/products' element={<Products />} />
//           <Route path='/products/:id' element={<SingleProduct />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/buynow' element={<BuyNow />} />
//           <Route path='/dashboard' element ={<Dashboard />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter> */}

//       {/*....................Using Nested Routing....................*/ }
//       const router = createBrowserRouter()
//       <RouterProvider router={router} />
      
//     </>
//   )
// }

// export default App



import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Products from './Pages/Products.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import About from './Pages/About.jsx' 
import Contact from './Pages/Contact.jsx'
import Cart from './Pages/Cart.jsx'
import BuyNow from './Components/BuyNow.jsx'
import DashboardLayout from './Dashboard/DashboardLayout.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'



const App = () => {
 const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/products',
        element:<Products />
      },
      {
        path:'/products/:id',
        element:<SingleProduct />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'cart',
        element:<Cart />
      },
      {
        path:'buynow',
        element:<BuyNow />
      },
    
    ]
  },
  {
    path:'/dashboard',
    element: <DashboardLayout />,
    children:[
      {path:'/dashboard', element:<Dashboard />}
    ]
  }
 ])
  return (
    <>
     <RouterProvider router={router} /> 
    </>
  )
}

export default App

