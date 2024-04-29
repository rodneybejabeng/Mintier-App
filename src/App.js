// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NetWorth from './pages/NetWorth.js';
import Credit from './pages/Credit.js';
import Expenses from './pages/Expenses.js';
import Budget from './pages/Budget.js';
import LandingPage from './LandingPage.js';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">LandingPage</Link></li>
            <li><Link to="/networth">Net Worth</Link></li>
            <li><Link to="/credit">Credit</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
            <li><Link to="/budget">Budget</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/networth" element={<NetWorth />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/budget" element={<Budget />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;