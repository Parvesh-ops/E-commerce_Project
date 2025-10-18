import React from 'react'
import Carouse from '../Components/Carouse'
import MidBanner from '../Components/MidBanner'
// import Footer from '../Components/Footer'
import Features from '../Components/Features'

const Home = () => {
  return (
    <>
      <Carouse />
      <MidBanner />
      <Features />
      {/* <Footer /> */}
      
    </>
  )
}

export default Home


// import React from 'react'
// import { Link } from 'react-router-dom'

// const featured = [
//   { id: 1, name: 'Classic Sneakers', price: '$59.99', img: '/src/assets/shoe-1.jpg' },
//   { id: 2, name: 'Running Pro', price: '$79.99', img: '/src/assets/shoe-2.jpg' },
//   { id: 3, name: 'Leather Boots', price: '$99.99', img: '/src/assets/shoe-3.jpg' }
// ]

// const Home = () => {
//   return (
//     <main className="max-w-6xl mx-auto px-4 py-12">
//       {/* Hero */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
//         <div>
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Find your perfect pair</h2>
//           <p className="text-gray-600 mb-6">Shop high-quality footwear curated for comfort and style. Free shipping on orders over $75.</p>
//           <div className="flex space-x-4">
//             <Link to="/products" className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600">Shop Now</Link>
//             <Link to="/about" className="border border-gray-300 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-50">Learn More</Link>
//           </div>
//         </div>
//         <div className="flex justify-center">
//           <img src="/src/assets/hero-shoes.jpg" alt="hero shoes" className="w-full max-w-md rounded-xl shadow-lg" />
//         </div>
//       </section>

//       {/* Featured preview */}
//       <section>
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="text-2xl font-bold">Featured</h3>
//           <Link to="/products" className="text-red-500 font-medium">View all</Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//           {featured.map(p => (
//             <article key={p.id} className="border rounded-md p-4 flex flex-col items-center text-center">
//               <img src={p.img} alt={p.name} className="w-40 h-40 object-cover mb-4 rounded" />
//               <h4 className="font-semibold mb-2">{p.name}</h4>
//               <p className="text-gray-600 mb-3">{p.price}</p>
//               <Link to={`/products`} className="mt-auto bg-gray-100 px-4 py-2 rounded text-sm hover:bg-gray-200">View</Link>
//             </article>
//           ))}
//         </div>
//       </section>
//     </main>
//   )
// }

// export default Home
