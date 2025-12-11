import { Link } from "react-router-dom";
import { Home, BarChart2, DollarSign, ShoppingCart, Users, Settings, FileText, CreditCard, Mail } from "lucide-react"; 

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-b from-white to-white text-gray-900 shadow-2xl min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-red-600">
          L<span className="text-black font-bold">uxora</span>
        </h1>
      </div>

      <nav className="flex flex-col gap-3">
        <h2 className="text-black font-bold uppercase text-sm mb-2">Menu</h2>
        <Link to="/" className="hover:bg-gray-400  p-2 rounded-xl flex items-center gap-2 ">
          <Home size={20} /> Dashboard
        </Link>
        <Link to="/charts" className="hover:bg-gray-400 p-2 rounded-xl flex items-center gap-2">
          <BarChart2 size={20} /> Charts
        </Link>
        <Link to="/sales" className="hover:bg-gray-400 p-2 rounded-xl flex items-center gap-2">
          <DollarSign size={20} /> Sales
        </Link>

        <h2 className="text-black font-bold uppercase text-sm mt-4 mb-2">Management</h2>
        <Link to="/products" className="hover:bg-gray-400 p-2 rounded-xl flex items-center gap-2">
          <ShoppingCart size={20} /> Products
        </Link>
        <Link to="/customers" className="hover:bg-gray-400 p-2 rounded-xl flex items-center gap-2">
          <Users size={20} /> Customers
        </Link>
        <Link to="/warehouse" className="hover:bg-gray-400 p-2 rounded-xl flex items-center gap-2">
          <Settings size={20} /> setting
        </Link>
        <Link to="/reports" className="hover:bg-gray-400 p-2 rounded-xl flex items-center gap-2">
          <FileText size={20} /> Reports
        </Link>

        <h2 className="text-black font-bold uppercase text-sm mt-4 mb-2">Notifications</h2>
        <Link to="/transactions" className="hover:bg-gray-400 p-2 rounded-xl flex items-center gap-2">
          <CreditCard size={20} /> Transactions
        </Link>
        <Link to="/messages" className="hover:bg-gray-400 p-2 rounded-xl flex items-center gap-2">
          <Mail size={20} /> Messages
        </Link>
      </nav>
    </aside>
  );
}
