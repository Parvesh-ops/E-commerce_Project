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

 {/* Dashboard Routes */}
import DashboardLayout from './Dashboard/DashboardLayout.jsx'
import Dashboard from './Dashboard/DashboardHome.jsx'
import Charts from './Dashboard/Charts.jsx'
import Sales from './Dashboard/Sales.jsx'
import Items from './Dashboard/Items.jsx'
import Customers from './Dashboard/Customers.jsx'
import Settings from './Dashboard/Settings.jsx'



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

  //Dashboard
  {
    path:'/dashboard',
    element: <DashboardLayout />,
    children:[
      {index: true, element:<Dashboard />},
      {path :'charts' , element : <Charts />},
      {path : 'sales' , element :<Sales />},
      {path : 'items' , element :<Items />},
      {path : 'customers' , element :<Customers />},
      {path : 'settings' , element :<Settings />},
      
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


// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Layout from "./Layout.jsx";

// // Website Pages
// import Home from "./Pages/Home.jsx";
// import Products from "./Pages/Products.jsx";
// import SingleProduct from "./Pages/SingleProduct.jsx";
// import About from "./Pages/About.jsx";
// import Contact from "./Pages/Contact.jsx";
// import Cart from "./Pages/Cart.jsx";
// import BuyNow from "./Components/BuyNow.jsx";

// // Dashboard Pages
// import DashboardLayout from "./Dashboard/DashboardLayout.jsx";
// import DashboardHome from "./Dashboard/DashboardHome.jsx";
// import Charts from "./Dashboard/Charts.jsx";
// import Sales from "./Dashboard/Sales.jsx";
// import Management from "./Dashboard/Management.jsx";
// import ProductsAdmin from "./Dashboard/ProductsAdmin.jsx";
// import Customers from "./Dashboard/Customers.jsx";
// import Settings from "./Dashboard/Settings.jsx";
// import Reports from "./Dashboard/Reports.jsx";
// import Notifications from "./Dashboard/Notifications.jsx";
// import Transactions from "./Dashboard/Transactions.jsx";
// import Messages from "./Dashboard/Messages.jsx";

// const App = () => {
//   const router = createBrowserRouter([
//     // =====================
//     // WEBSITE ROUTES
//     // =====================
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { path: "/", element: <Home /> },
//         { path: "products", element: <Products /> },
//         { path: "products/:id", element: <SingleProduct /> },
//         { path: "about", element: <About /> },
//         { path: "contact", element: <Contact /> },
//         { path: "cart", element: <Cart /> },
//         { path: "buynow", element: <BuyNow /> },
//       ],
//     },

//     // =====================
//     // DASHBOARD ROUTES
//     // =====================
//     {
//       path: "/dashboard",
//       element: <DashboardLayout />,
//       children: [
//         { index: true, element: <DashboardHome /> }, // same as <Route index>
//         { path: "charts", element: <Charts /> },
//         { path: "sales", element: <Sales /> },
//         { path: "management", element: <Management /> },
//         { path: "products", element: <ProductsAdmin /> },
//         { path: "customers", element: <Customers /> },
//         { path: "settings", element: <Settings /> },
//         { path: "reports", element: <Reports /> },
//         { path: "notifications", element: <Notifications /> },
//         { path: "transactions", element: <Transactions /> },
//         { path: "messages", element: <Messages /> },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default App;

