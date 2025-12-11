import React from "react";
import { Search, Bell,  User} from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full bg-white flex items-center justify-between">

      {/* Center: Search Bar */}
      <div className="flex-1 mx-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products, orders..."
            className="w-full border border-gray-300 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Right side: Notifications,  Profile */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-full">
          <User size={20} />
          <span className="text-gray-700 font-medium">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
