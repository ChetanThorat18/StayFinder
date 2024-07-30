import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-300 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <a className="text-2xl text-blue-500 font-bold" href="/">
            <i className="far fa-compass"></i>
          </a>
          <a
            className="text-gray-700 hover:text-blue-500"
            href="/"
          >
            Home
          </a>
          <Link
            className="text-gray-700 hover:text-blue-500"
            to="/listings"
          >
            All Listings
          </Link>
          <Link
            className="text-gray-700 hover:text-blue-500"
            to="/listings/new"
          >
            Add New Listing
            </Link>
        </div>
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-gray-900 focus:outline-none focus:border-gray-900 focus:text-gray-900"
          type="button"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.5C0 4.22386 0.223858 4 0.5 4H19.5C19.7761 4 20 4.22386 20 4.5C20 4.77614 19.7761 5 19.5 5H0.5C0.223858 5 0 4.77614 0 4.5ZM0.5 9C0.223858 9 0 9.22386 0 9.5C0 9.77614 0.223858 10 0.5 10H19.5C19.7761 10 20 9.77614 20 9.5C20 9.22386 19.7761 9 19.5 9H0.5ZM0 14.5C0 14.2239 0.223858 14 0.5 14H19.5C19.7761 14 20 14.2239 20 14.5C20 14.7761 19.7761 15 19.5 15H0.5C0.223858 15 0 14.7761 0 14.5Z"
            />
          </svg>
        </button>
      </div>
    </nav>
    
  );
};

export default Navbar;
