import React, { useState } from "react";
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiSearch,
  FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";

interface HeaderProps {
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({ logo = "/logo.png" }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full">
      {/* Top bar */}
      {/* <div className="bg-gray-800 text-white py-2 px-4 flex justify-between items-center text-sm">
        <div>Flat 50% Off On Grocery Shop</div>
        <div className="flex space-x-4">
          <span>Help?</span>
          <span>Track Order</span>
          <span>Language</span>
          <span>Currency</span>
        </div>
      </div> */}

      {/* Main header */}
      <div className="py-4 px-6 flex justify-between items-center bg-white">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Food Funday" className="h-12" />
          </Link>
        
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-lg mx-4 relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-light-green"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch size={18} />
          </button>
        </div>

        {/* User actions */}
        <div className="flex items-center space-x-6">
          <div className="flex flex-col items-center">
            <FiUser className="text-gray-700" size={20} />
            <div className="text-xs mt-1">
              <div>Account</div>
              <div>Login</div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <FiHeart className="text-gray-700" size={20} />
              <span className="absolute -top-2 -right-2 bg-light-green text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="text-xs mt-1">Wishlist</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <FiShoppingCart className="text-gray-700" size={20} />
              <span className="absolute -top-2 -right-2 bg-light-green text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                4
              </span>
            </div>
            <div className="text-xs mt-1">Cart</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-t border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex space-x-6">
            <Link to="/" className="font-medium">
              Home
            </Link>
            <div className="relative group">
              <Link to="/categories" className="font-medium flex items-center">
                Categories
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link to="/products" className="font-medium flex items-center">
                Products
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link to="/pages" className="font-medium flex items-center">
                Pages
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link to="/blog" className="font-medium flex items-center">
                Blog
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
            </div>
            <Link to="/offers" className="font-medium">
              Offers
            </Link>
          </div>
          <div className="flex items-center text-sm">
            <FiMapPin className="mr-1" />
            <span>Surat</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
