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
import React from "react";
import Sidebar from './Sidebar';
import Topbar from "./Topbar";
import {Auth0Provider} from '@auth0/auth0-react'
import { Outlet } from "react-router-dom";
// import AdminLogin from "./AdminLogin";


const DashboardContent = () => {
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

const DashboardLayout = () => {
  return (
    <Auth0Provider
      domain="dev-3wey8x257lqdnzgj.us.auth0.com"
      clientId="eKam3hxVlcZE8og6iWuLpDa1X8j60g5T"
       authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      {/* <AdminLogin /> */}
      <DashboardContent />
    </Auth0Provider>
  );
};

export default DashboardLayout;
