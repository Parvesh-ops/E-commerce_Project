import { NavLink } from "react-router-dom";
import {Home,BarChart2,DollarSign,ShoppingCart,Users,Settings,FileText,CreditCard,Mail} from "lucide-react";

export default function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `p-2 rounded-xl flex items-center gap-2 transition ${isActive ? "bg-gray-400 font-semibold" : "text-gray-700"
    } hover:bg-gray-300`;

  return (
    <aside className="w-64 bg-gradient-to-b from-white to-white text-gray-900 shadow-2xl min-h-screen p-6">

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-red-600">
          L<span className="text-black font-bold">uxora</span>
        </h1>
      </div>

      <nav className="flex flex-col gap-3">
        {/* MENU SECTION */}
        <h2 className="text-black font-bold uppercase text-sm mb-2">Menu</h2>

        {/* Dashboard */}
        <NavLink to="/dashboard" className={linkClasses}>
          <Home size={20} /> Dashboard
        </NavLink>


        {/* Charts */}
        <NavLink to="/dashboard/charts" className={linkClasses}>
          <BarChart2 size={20} /> Charts
        </NavLink>


        {/* Sales */}
        <NavLink to="/dashboard/sales" className={linkClasses}>
          < DollarSign size={20} /> Sales
        </NavLink>


        {/* MANAGEMENT SECTION */}
        <h2 className="text-black font-bold uppercase text-sm mt-4 mb-2">
          Management
        </h2>

        {/* Products */}
        <NavLink to="/dashboard/items" className={linkClasses}>
          < ShoppingCart size={20} /> Sales
        </NavLink>

        {/* Customers */}
        <NavLink to="/dashboard/customers" className={linkClasses}>
          < Users size={20} />Products
        </NavLink>

        {/* Settings */}
        <NavLink to="/dashboard/settings" className={linkClasses}>
          < Settings size={20} />Settings
        </NavLink>

        {/* Reports */}
        <NavLink to="/dashboard/reports" className={linkClasses}>
          < FileText size={20} />Reports
        </NavLink>

        {/* NOTIFICATIONS SECTION */}
        <h2 className="text-black font-bold uppercase text-sm mt-4 mb-2">
          Notifications
        </h2>

        {/* Transactions */}
        <NavLink to="/dashboard/transactions" className={linkClasses}>
          <CreditCard size={20} />Transaction
        </NavLink>

        {/* Messages */}
        <NavLink to="/dashboard/message" className={linkClasses}>
          <Mail size={20} /> Messages
        </NavLink>

      </nav>
    </aside>
  );
}