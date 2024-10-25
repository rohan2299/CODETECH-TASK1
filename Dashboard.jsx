import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaHome, FaShoppingCart, FaDownload, FaQuestionCircle } from 'react-icons/fa'; // Importing icons from react-icons

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card for Home */}
        <Link to="/" className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer transition-colors duration-200 hover:bg-orange-400">
          <FaHome className="text-4xl mb-2" /> {/* Home icon */}
          <h2 className="text-lg font-semibold">Home</h2>
          <p className="mt-2">Welcome to your dashboard!</p>
        </Link>
        
        {/* Card for Shop */}
        <Link to="/shop" className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer transition-colors duration-200 hover:bg-orange-400">
          <FaShoppingCart className="text-4xl mb-2" /> {/* Shop icon */}
          <h2 className="text-lg font-semibold">Shop</h2>
          <p className="mt-2">Explore our products.</p>
        </Link>

        {/* Card for Downloads */}
        <Link to="/downloads" className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer transition-colors duration-200 hover:bg-orange-400">
          <FaDownload className="text-4xl mb-2" /> {/* Downloads icon */}
          <h2 className="text-lg font-semibold">Downloads</h2>
          <p className="mt-2">Manage your downloads here.</p>
        </Link>

        {/* Card for Help */}
        <Link to="/help" className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer transition-colors duration-200 hover:bg-orange-400">
          <FaQuestionCircle className="text-4xl mb-2" /> {/* Help icon */}
          <h2 className="text-lg font-semibold">Help</h2>
          <p className="mt-2">Need assistance? We are here to help!</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;