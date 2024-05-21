import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './LandingPage';
import NetWorth from './pages/NetWorth';
import Credit from './pages/Credit';
import Expenses from './pages/Expenses';
import Budget from './pages/Budget';
import About from './pages/About';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/SignUp';


function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  const location = useLocation();  // Get the current location

  return (
    <div>
      {/* Conditionally render NavBar if not on the landing page */}
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/networth" element={<NetWorth />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default AppWrapper;  // Export the wrapper component
