import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'text-blue-300 shadow-lg brightness-125' : 'hover:text-gray-300';

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between">
        <li className="mr-6">
          <Link to="/dashboard" className={`text-white ${isActive('/dashboard')}`}>Dashboard</Link>
        </li>
        <li className="mr-6">
          <Link to="/networth" className={`text-white ${isActive('/networth')}`}>Net Worth</Link>
        </li>
        <li className="mr-6">
          <Link to="/credit" className={`text-white ${isActive('/credit')}`}>Credit</Link>
        </li>
        <li className="mr-6">
          <Link to="/expenses" className={`text-white ${isActive('/expenses')}`}>Expenses</Link>
        </li>
        <li className="mr-6">
          <Link to="/budget" className={`text-white ${isActive('/budget')}`}>Budget</Link>
        </li>
        <li className="mr-6">
          <Link to="/about" className={`text-white ${isActive('/about')}`}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
