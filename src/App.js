// This is how the web page SHOULD look like!!

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { AuthProvider } from './components/AuthContext';
// import ProtectedRoute from './components/ProtectedRoute';
// import NavBar from './components/NavBar';
// import LandingPage from './LandingPage';
// import NetWorth from './pages/NetWorth';
// import Credit from './pages/Credit';
// import Expenses from './pages/Expenses';
// import Budget from './pages/Budget';
// import About from './pages/About';
// import Dashboard from './pages/Dashboard/Dashboard';
// import SignUp from './pages/SignUp/SignUp';
// import SignIn from './pages/SignIn/SignIn';
// import Terms from './pages/Terms';
// import Privacy from './pages/Privacy';
// import Footer from './components/Footer';

// function AppWrapper() {
//   return (
//     <AuthProvider>
//       <Router>
//         <App />
//       </Router>
//     </AuthProvider>
//   );
// }

// function App() {
//   const location = useLocation();  // Get the current location

//   // Conditional rendering for the NavBar based on route
//   const showNavBar = location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !== "/signin";

//   return (
//     <div>
//       {showNavBar && <NavBar />}
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/privacy" element={<Privacy />} />
//         <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//         <Route path="/networth" element={<ProtectedRoute><NetWorth /></ProtectedRoute>} />
//         <Route path="/credit" element={<ProtectedRoute><Credit /></ProtectedRoute>} />
//         <Route path="/expenses" element={<ProtectedRoute><Expenses /></ProtectedRoute>} />
//         <Route path="/budget" element={<ProtectedRoute><Budget /></ProtectedRoute>} />
//         <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
//       </Routes>
//     </div>
//   );
// }

// export default AppWrapper;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './LandingPage';
import NetWorth from './pages/NetWorth';
import Credit from './pages/Credit';
import Expenses from './pages/Expenses';
import Budget from './pages/Budget';
import About from './pages/About';
import Dashboard from './pages/Dashboard/Dashboard';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Footer from './components/Footer/Footer';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();  // Get the current location

  // Only render NavBar if not on the home or signup pages
  const showNavBar = location.pathname !== "/" && location.pathname !== "/signup" && location.pathname !== "/signin";

  return (
    <div className="body-container">
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/networth" element={<NetWorth />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
}

export default AppWrapper;
