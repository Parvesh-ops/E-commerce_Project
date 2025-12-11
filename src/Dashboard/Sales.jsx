import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, ShoppingBag, Users, DollarSign } from "lucide-react";
import axios from "axios";

const Sales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Transform products to chart data
  const chartData = products.map((product, index) => ({
    name: product.title.substring(0, 10), // shorten title for X-axis
    price: product.price,
  }));

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">Sales Overview</h1>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white shadow rounded-xl flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full">
            <DollarSign size={24} className="text-green-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>
            <h2 className="text-xl font-semibold">$58,240</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-xl flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <ShoppingBag size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h2 className="text-xl font-semibold">1,245</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-xl flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-full">
            <Users size={24} className="text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">New Customers</p>
            <h2 className="text-xl font-semibold">320</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-xl flex items-center gap-4">
          <div className="p-3 bg-red-100 rounded-full">
            <TrendingUp size={24} className="text-red-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Net Profit</p>
            <h2 className="text-xl font-semibold">$12,430</h2>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="mt-8 bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Sales Chart</h2>
        {loading ? (
          <p className="text-gray-500 text-center py-20">Loading chart data...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#4ade80" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}
         {/* Recent Sales Table */}
      <div className="mt-8 bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>

        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-left text-sm">
              <tr>
                <th className="p-3">Customer</th>
                <th className="p-3">Product</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              <tr className="border-b">
                <td className="p-3">Amit Sharma</td>
                <td className="p-3">Nike Shoes</td>
                <td className="p-3">$120</td>
                <td className="p-3 text-green-600 font-semibold">Completed</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Sara Karki</td>
                <td className="p-3">iPhone 13 Case</td>
                <td className="p-3">$25</td>
                <td className="p-3 text-yellow-500 font-semibold">Pending</td>
              </tr>

              <tr className="border-b">
                <td className="p-3">Binod Rai</td>
                <td className="p-3">T-Shirt</td>
                <td className="p-3">$18</td>
                <td className="p-3 text-green-600 font-semibold">Completed</td>
              </tr>

              <tr>
                <td className="p-3">Prakash Limbu</td>
                <td className="p-3">Smart Watch</td>
                <td className="p-3">$95</td>
                <td className="p-3 text-red-500 font-semibold">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Sales;
