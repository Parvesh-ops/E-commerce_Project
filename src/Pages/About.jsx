import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-12 px-4 sm:px-6 lg:px-12 flex items-center justify-center">
      <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.1)] p-6 sm:p-10 space-y-8 sm:space-y-10 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">

        {/* Subtle animated border glow */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-20 blur-lg animate-pulse"></div>

        {/* Heading */}
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 sm:mb-8 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
          About <span className="text-white drop-shadow-md">Luxora</span>
        </h1>

        {/* Welcome */}
        <p className="relative text-gray-200 text-base sm:text-lg z-10">
          Welcome to <span className="font-semibold text-red-400">Luxora</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we’re here to power up your tech life with premium products and unbeatable service.
        </p>

        {/* Our Mission */}
        <div className="relative z-10 space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400">Our Mission</h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg">
            At <span className="text-red-400">Luxora</span>, our mission is to make innovative technology accessible to everyone. We’re passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.
          </p>
        </div>

        {/* Why Choose Luxora */}
        <div className="relative z-10 space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400">Why Choose Luxora?</h2>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-200 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg">
            <li>Top-quality electronic products from trusted brands</li>
            <li>Lightning-fast and secure shipping</li>
            <li>Reliable customer support, always ready to help</li>
            <li>Easy returns and hassle-free shopping experience</li>
          </ul>
        </div>

        {/* Our Vision */}
        <div className="relative z-10 space-y-3 sm:space-y-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400">Our Vision</h2>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg">
            We envision a future where technology elevates everyday life. At Luxora, we’re committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.
          </p>
        </div>

        {/* Join Luxora */}
        <div className="relative z-10 text-center mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-400 mb-2">
            Join the <span className="text-pink-400">Luxora</span> Family
          </h3>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-4">
            Whether you’re a tech enthusiast, a professional, or just looking for something cool and functional — Luxora has something for everyone.
          </p>
          <Link to={'/products'}>
            <button className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,120,0.5)] transition-all duration-300 text-sm sm:text-base">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
