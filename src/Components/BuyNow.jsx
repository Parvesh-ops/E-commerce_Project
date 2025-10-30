import React, { useState } from "react";

const BuyNow = () => {
  const [user, setUser] = useState({ name: "", contactNo: "", location: "" });
  const [error, setError] = useState({});

  const changeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!user.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!user.contactNo.trim()) {
      newErrors.contactNo = "Contact number is required";
    }
    if (!user.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      setError({});
      setUser({ name: "", contactNo: "", location: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-white to-red-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          🛍 Buy Now
        </h2>

        <form onSubmit={formHandler} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={user.name}
              onChange={changeUser}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            {error.name && (
              <p className="text-red-500 text-sm mt-1">{error.name}</p>
            )}
          </div>

          {/* Contact Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              name="contactNo"
              value={user.contactNo}
              onChange={changeUser}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            {error.contactNo && (
              <p className="text-red-500 text-sm mt-1">{error.contactNo}</p>
            )}
          </div>
          {/* Location  field*/}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Location
            </label>
            <input
              type="location"
              placeholder="Enter your location"
              name="location"
              value={user.location}
              onChange={changeUser}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
            {error.location && (
              <p className="text-red-500 text-sm mt-1">{error.location}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-200"
          >
            Confirm Purchase
          </button>
        </form>

      </div>
    </div>
  );
};

export default BuyNow;
