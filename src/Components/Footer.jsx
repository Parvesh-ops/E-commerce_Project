import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  const suscribed = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  }
  return (
    <footer className='bg-gray-900 text-gray-200 py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              {/* <img src={Logo} alt="" className='w-32'/> */}
              <h1 className='text-red-500 text-2xl font-bold'>L<span className='text-white'>uxora</span></h1>
            </Link>
            <p className='mt-2 text-sm'>Powering Your World with the Best in Electronics.</p>
            <p className='mt-2 text-sm'>Nepal, Kathmandu City, BR 10001</p>
            <p className='text-sm'>Email: support@Zaptro.com</p>
            <p className='text-sm'>Phone: +9779814336521</p>
        </div>
        {/* customer service link */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Customer Service</h3>
            <ul className='mt-2 text-sm space-y-2'>
                <li className="hover:underline hover:text-red-500 transition-all duration-200 cursor-pointer" >Contact Us</li>
                <li className="hover:underline hover:text-red-500 transition-all duration-200 cursor-pointer">Shipping & Returns</li>
                <li className="hover:underline hover:text-red-500 transition-all duration-200 cursor-pointer">FAQs</li>
                <li className="hover:underline hover:text-red-500 transition-all duration-200 cursor-pointer">Order Tracking</li>
                <li className="hover:underline hover:text-red-500 transition-all duration-200 cursor-pointer">Size Guide</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-6 md:mb-0'>
            <h3 className='text-xl font-semibold'>Follow Us</h3>
            <div className='flex space-x-4 mt-2'>
               <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:text-blue-800 transition-all duration-200'><FaFacebook size={22} /></a>
               <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='text-blue-400 hover:text-blue-600 transition-all duration-200'><FaTwitterSquare size={22} /></a>
               <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-pink-500 hover:text-pink-700 transition-all duration-200'><FaInstagram size={22} /></a>
               <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className='text-red-600 hover:text-red-800 transition-all duration-200'><FaPinterest size={22} /></a>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold'>Stay in the Loop</h3>
            <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='mt-4 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md  text-white border-[1px] focus:ring-2 focus:ring-white-500'
                />
                <button onClick={suscribed} type='submit' className='bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='text-red-500'>Luxora</span>. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer