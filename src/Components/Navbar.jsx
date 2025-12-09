import React, { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";
import { cartContext } from '../Context/CartContext' // <-- added

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useContext(cartContext); // <-- added

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0); // <-- added

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="bg-white py-3 shadow-2xl fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">

        <Link to="/">
          <h1 className="text-2xl sm:text-3xl font-bold">
            <span className="text-red-500 font-serif">L</span>uxora
          </h1>
        </Link>

        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-semibold px-2 py-1 transition-all duration-200 ${
                  isActive
                    ? 'border-b-2 border-red-500 text-red-500'
                    : 'text-black hover:text-red-500 hover:border-b-2 hover:border-red-500'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center md:space-x-4">

          {/* Cart with Quantity Badge */}
          <NavLink to="/cart" className="relative mx-[10px]">
            <FaShoppingCart className="h-6 w-6 m-0.5" />
            {totalQty > 0 && (
              <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-2 text-white text-sm">
                {totalQty}
              </span>
            )}
          </NavLink>

          <SignedOut>
            <SignInButton>
              <button className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-all">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <div className="md:hidden ml-2 cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <ul className="flex flex-col space-y-2 px-4 py-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-semibold px-2 py-1 ${
                    isActive
                      ? 'border-l-4 border-red-500 pl-2 text-red-500'
                      : 'text-black hover:text-red-500'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
