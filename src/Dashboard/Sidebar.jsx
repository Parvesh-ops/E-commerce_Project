import { NavLink } from "react-router-dom";
import {
  Home,
  BarChart2,
  DollarSign,
  ShoppingCart,
  Users,
  Settings,
  FileText,
  CreditCard,
  Mail
} from "lucide-react";

export default function Sidebar() {
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
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <Home size={20} /> Dashboard
        </NavLink>

        {/* Charts */}
        <NavLink
          to="/dashboard/charts"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <BarChart2 size={20} /> Charts
        </NavLink>

        {/* Sales */}
        <NavLink
          to="/dashboard/sales"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <DollarSign size={20} /> Sales
        </NavLink>

        {/* MANAGEMENT SECTION */}
        <h2 className="text-black font-bold uppercase text-sm mt-4 mb-2">
          Management
        </h2>

        {/* Products */}
        <NavLink
          to="/dashboard/items"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <ShoppingCart size={20} /> Products
        </NavLink>

        {/* Customers */}
        <NavLink
          to="/dashboard/customers"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <Users size={20} /> Customers
        </NavLink>

        {/* Settings */}
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <Settings size={20} /> Settings
        </NavLink>

        {/* Reports */}
        <NavLink
          to="/dashboard/reports"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <FileText size={20} /> Reports
        </NavLink>

        {/* NOTIFICATIONS SECTION */}
        <h2 className="text-black font-bold uppercase text-sm mt-4 mb-2">
          Notifications
        </h2>

        {/* Transactions */}
        <NavLink
          to="/dashboard/transactions"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <CreditCard size={20} /> Transactions
        </NavLink>

        {/* Messages */}
        <NavLink
          to="/dashboard/messages"
          className={({ isActive }) =>
            `p-2 rounded-xl flex items-center gap-2 ${
              isActive ? "bg-gray-400" : ''
            } hover:bg-gray-300`
          }
        >
          <Mail size={20} /> Messages
        </NavLink>
      </nav>
    </aside>
  );
}
