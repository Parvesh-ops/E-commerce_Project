import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";

const AdminLogin = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const ADMIN_EMAIL = "arveshchaudhary@gmail.com";

  useEffect(() => {
  if (isAuthenticated) {
    console.log("Logged in user:", user); // <-- Check the email here
    if (user?.email === ADMIN_EMAIL) {
      navigate("/dashboard");
    } else {
      alert(`Access Denied! You are not an admin. Logged in as: ${user?.email}`);
    }
  }
}, [isAuthenticated, user, navigate]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center transform transition duration-500 hover:scale-105">
        
        {/* Admin Icon */}
        <div className="flex justify-center mb-4">
          <FaUserShield className="text-blue-600 text-5xl" />
        </div>
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Admin Login
        </h1>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
          Only authorized admins can access the dashboard. Please login with your admin account.
        </p>

        {/* Login Button */}
        <button
          onClick={() => loginWithRedirect({ redirectUri: window.location.origin + "/dashboard" })}
          className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Login with Auth0
        </button>

        {/* Footer Note */}
        <p className="mt-6 text-gray-500 dark:text-gray-400 text-xs md:text-sm">
          Powered by Auth0. Your credentials are secure.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
