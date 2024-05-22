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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar';
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

function AppWrapper() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route element={<NavBar />}>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/networth" element={<ProtectedRoute><NetWorth /></ProtectedRoute>} />
            <Route path="/credit" element={<ProtectedRoute><Credit /></ProtectedRoute>} />
            <Route path="/expenses" element={<ProtectedRoute><Expenses /></ProtectedRoute>} />
            <Route path="/budget" element={<ProtectedRoute><Budget /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppWrapper;
