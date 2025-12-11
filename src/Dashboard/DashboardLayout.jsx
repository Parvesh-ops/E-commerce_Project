import React from "react";
import Sidebar from './Sidebar';
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <Sidebar />
      {/* Right side → Topbar + page content */}
      <div className="flex-1">
        {/* Top bar */}
        <Topbar />
        {/* Page Content */}
        <div className="p-4">
          <Outlet />  
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
