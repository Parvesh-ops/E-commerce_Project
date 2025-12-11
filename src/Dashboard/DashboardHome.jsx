import React from 'react'
import useFetch from '../hooks/useFetch.jsx'
import Charts from './Charts.jsx'

const Dashboard = () => {
    const { data: products, error, loading } = useFetch("/products")

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Failed to fetch data</p>;

    const totalProducts = products.length;
    const avgPrice = (
        products.reduce((acc, item) => acc + item.price, 0) / totalProducts
    ).toFixed(2);

    return (
        <div className="p-3">
            
            {/* Responsive Cards */}
            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-4
            ">
                <div className="p-4 bg-white shadow rounded text-center">
                    <p className="text-xl font-semibold">Total Products</p>
                    <p className="text-2xl font-bold">{totalProducts}</p>
                </div>

                <div className="p-4 bg-white shadow rounded text-center">
                    <p className="text-xl font-semibold">Avg Price</p>
                    <p className="text-2xl font-bold">${avgPrice}</p>
                </div>

                <div className="p-4 bg-white shadow rounded text-center">
                    <p className="text-xl font-semibold">Categories</p>
                    <p className="text-2xl font-bold">
                        {new Set(products.map(p => p.category)).size}
                    </p>
                </div>
            </div>

            <div className="mt-6">
                <Charts />
            </div>
        </div>
    );
};

export default Dashboard;
