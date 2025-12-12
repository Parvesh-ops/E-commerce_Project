import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const { loginWithRedirect, isAuthenticated, user, } = useAuth0();
  const navigate = useNavigate();
  const ADMIN_EMAIL = "admin@gmail.com";

  useEffect(() => {
    if (isAuthenticated) {
      // Check if the logged-in user is admin
      if (user?.email === ADMIN_EMAIL) {
        navigate("/dashboard");
      } else {
        alert("Access denied! You are not an admin.");
      }
    }
  }, [isAuthenticated, user, navigate]);


  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Admin Login
        </h1>
        <p className="text-gray-600 mb-6">
          Only authorized admins can access the dashboard.
        </p>

        <button
          onClick={() => loginWithRedirect()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
