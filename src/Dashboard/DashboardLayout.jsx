// import React from "react";
// import Sidebar from './Sidebar';
// import Topbar from "./Topbar";
// import { Outlet } from "react-router-dom";

// const DashboardLayout = () => {
//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <Sidebar />
//       {/* Right side → Topbar + page content */}
//       <div className="flex-1">
//         {/* Top bar */}
//         <Topbar />
//         {/* Page Content */}
//         <div className="p-4">
//           <Outlet />  
//         </div>
//       </div>
//     </div>
//   );
// };


// export default DashboardLayout;


//Using Auth0
// import React from "react";
// import Sidebar from './Sidebar';
// import Topbar from "./Topbar";
// import {Auth0Provider} from '@auth0/auth0-react'
// import { Outlet } from "react-router-dom";
// import AdminLogin from "./AdminLogin";


// const DashboardContent = () => {
//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <Sidebar />
//       {/* Right side → Topbar + page content */}
//       <div className="flex-1">
//         {/* Top bar */}
//         <Topbar />
//         {/* Page Content */}
//         <div className="p-4">
//           <Outlet />  
//         </div>
//       </div>
//     </div>
//   );
// };

// const DashboardLayout = () => {
//   return (
//     <Auth0Provider
//       domain="dev-3wey8x257lqdnzgj.us.auth0.com"
//       clientId="eKam3hxVlcZE8og6iWuLpDa1X8j60g5T"
//        authorizationParams={{
//       redirect_uri: window.location.origin + "/dashboard/"
//     }}>
//       <AdminLogin />
//       <DashboardContent />
//     </Auth0Provider>
//   );
// };

// export default DashboardLayout;


import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import AdminLogin from "./AdminLogin";

// Dashboard UI (only visible if logged in and admin)
const DashboardContent = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Topbar />
      <div className="p-4">
        {/* Nested pages will render here */}
        <Outlet />
      </div>
    </div>
  </div>
);

// Protected Dashboard: handles authentication
const ProtectedDashboard = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const ADMIN_EMAIL = "arveshchaudhary@gmail.com";

  if (isLoading) return <div className="text-center p-10">Loading...</div>;

  // Not logged in → show login page
  if (!isAuthenticated) return <AdminLogin />;

  // Logged in but not admin → access denied
  if (user?.email !== ADMIN_EMAIL) {
    return (
      <div className="text-center p-10 text-red-600">
        Access Denied! You are not an admin.
      </div>
    );
  }


  // Logged in as admin → show dashboard
  return <DashboardContent />;
};

// Main Layout with Auth0 provider
const DashboardLayout = () => {
  return (
    <Auth0Provider
      domain="dev-3wey8x257lqdnzgj.us.auth0.com"
      clientId="eKam3hxVlcZE8og6iWuLpDa1X8j60g5T"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/dashboard",
      }}

    >
      <ProtectedDashboard />
    </Auth0Provider>
  );
};

export default DashboardLayout;

