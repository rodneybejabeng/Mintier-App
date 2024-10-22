import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../logos/ClearMoney-logo.svg'; // Make sure the path is correct
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'text-blue-500 shadow-lg brightness-125' : 'hover:text-gray-300';

  return (
    <nav className="navigation">
      <ul className="flex justify-between items-center">
        <li className="mr-6">
          <Link to="/"> 
            <img src={logo} alt="Clear Money Logo" className="h-14 w-14" />
          </Link>
        </li>
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
