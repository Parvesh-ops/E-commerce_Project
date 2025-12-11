import React, { useEffect, useState } from "react";
import { Users, UserCheck, UserPlus } from "lucide-react";
import axios from "axios";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch customers from FakeStore API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/users");
        setCustomers(res.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="p-6 w-full">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Customers</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow rounded-xl flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-full">
            <Users size={24} className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Customers</p>
            <h2 className="text-xl font-semibold">{customers.length}</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-xl flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-full">
            <UserCheck size={24} className="text-green-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Active Customers</p>
            <h2 className="text-xl font-semibold">{customers.length}</h2>
          </div>
        </div>

        <div className="p-4 bg-white shadow rounded-xl flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-full">
            <UserPlus size={24} className="text-purple-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">New Customers</p>
            <h2 className="text-xl font-semibold">5</h2>
          </div>
        </div>
      </div>

      {/* Customers Table */}
      <div className="mt-8 bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Customer List</h2>

        {loading ? (
          <div className="text-gray-500 text-center py-10">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg overflow-hidden">
              <thead className="bg-gray-100 text-left text-sm">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Address</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {customers.map((customer) => (
                  <tr key={customer.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      {customer.name.firstname} {customer.name.lastname}
                    </td>
                    <td className="p-3">{customer.email}</td>
                    <td className="p-3">{customer.phone}</td>
                    <td className="p-3">
                      {customer.address.city}, {customer.address.street}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;
