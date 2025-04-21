import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../logos/ClearMoney-logo.svg'; // Make sure the path is correct
import { useAuth } from '../AuthContext';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? 'text-blue-500 shadow-lg brightness-125' : 'hover:text-gray-300';

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

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
        <li className="ml-auto relative">
          <div 
            className="flex items-center cursor-pointer text-white"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="mr-2">{user?.displayName || user?.email}</span>
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
            </div>
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div className="py-1">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
