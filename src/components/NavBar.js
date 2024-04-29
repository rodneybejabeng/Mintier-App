// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between">
        <li className="mr-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li className="mr-6">
          <Link to="/networth" className="text-white hover:text-gray-300">Net Worth</Link>
        </li>
        <li className="mr-6">
          <Link to="/credit" className="text-white hover:text-gray-300">Credit</Link>
        </li>
        <li className="mr-6">
          <Link to="/expenses" className="text-white hover:text-gray-300">Expenses</Link>
        </li>
        <li className="mr-6">
          <Link to="/budget" className="text-white hover:text-gray-300">Budget</Link>
        </li>
        <li className="mr-6">
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
