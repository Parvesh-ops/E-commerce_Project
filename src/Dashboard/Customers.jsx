import React, { useEffect, useState } from "react";
import { Users, UserCheck, UserPlus, UserX } from "lucide-react";
import axios from "axios";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  // Filtered customers based on search
  const filteredCustomers = customers.filter(
    (c) =>
      c.name.firstname.toLowerCase().includes(search.toLowerCase()) ||
      c.name.lastname.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  // Handle View button
  const handleView = (customer) => {
    alert(
      `Customer Info:\n\nName: ${customer.name.firstname} ${customer.name.lastname}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nAddress: ${customer.address.city}, ${customer.address.street}`
    );
  };

  // Handle Edit button
  const handleEdit = (customer) => {
    const newName = prompt(
      "Edit Customer Name:",
      `${customer.name.firstname} ${customer.name.lastname}`
    );
    if (newName) {
      const [firstname, ...lastname] = newName.split(" ");
      setCustomers((prev) =>
        prev.map((c) =>
          c.id === customer.id
            ? { ...c, name: { firstname, lastname: lastname.join(" ") } }
            : c
        )
      );
      alert("Customer updated successfully!");
    }
  };

  // Handle Delete button
  const handleDelete = (customerId) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers((prev) => prev.filter((c) => c.id !== customerId));
      alert("Customer deleted successfully!");
    }
  };

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

        <div className="p-4 bg-white shadow rounded-xl flex items-center gap-4">
          <div className="p-3 bg-red-100 rounded-full">
            <UserX size={24} className="text-red-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Inactive Customers</p>
            <h2 className="text-xl font-semibold">3</h2>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="my-6 flex justify-end">
        <input
          type="text"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-1/3"
        />
      </div>

      {/* Customers Table */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">Customer List</h2>

        {loading ? (
          <div className="text-gray-500 text-center py-10">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border rounded-lg overflow-hidden text-sm">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Phone</th>
                  <th className="p-3">Address</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      {customer.name.firstname} {customer.name.lastname}
                    </td>
                    <td className="p-3">{customer.email}</td>
                    <td className="p-3">{customer.phone}</td>
                    <td className="p-3">
                      {customer.address.city}, {customer.address.street}
                    </td>
                    <td className="p-3 flex justify-center gap-2">
                      <button
                        onClick={() => handleView(customer)}
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleEdit(customer)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(customer.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredCustomers.length === 0 && (
              <p className="text-gray-500 text-center py-6">No customers found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;
