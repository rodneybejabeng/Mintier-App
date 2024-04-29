// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './LandingPage';
import NetWorth from './pages/NetWorth';
import Credit from './pages/Credit';
import Expenses from './pages/Expenses';
import Budget from './pages/Budget';

function App() {
  return (
    <Router>
      <div>
        <NavBar />  {/* Persistent NavBar included */}
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
