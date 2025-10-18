import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">

        {/* Logo Section */}
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold">
              <span className="text-red-500 font-serif">L</span>uxora
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {['/', '/products', '/about', '/contact'].map((path, index) => {
            const labels = ['Home', 'Products', 'About', 'Contact'];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-lg font-semibold px-2 py-1 transition-all duration-200 ${
                    isActive
                      ? 'border-b-2 border-red-500 text-red-500'
                      : 'text-black hover:text-red-500 hover:border-b-2 hover:border-red-500'
                  }`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </ul>

        {/* Cart & Auth Section */}
        <div className="flex items-center">
          <NavLink to="/cart" className="relative mx-[26px]">
            <FaShoppingCart className="h-6 w-6" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-4 text-white text-sm">0</span>
          </NavLink>

          {/* Clerk Authentication */}
          <SignedOut>
            <SignInButton>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-all">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton  />
          </SignedIn>
        </div>
      </div>
    </div>
  )
}

export default Navbar
