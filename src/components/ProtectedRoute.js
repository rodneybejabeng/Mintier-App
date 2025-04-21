// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from './AuthContext'; // Ensure this path is correct according to your project structure

// const ProtectedRoute = ({ children }) => {
//     const { user } = useAuth();
//     const location = useLocation();

//     if (!user) {
//         // Redirect them to the /signin page, but save the current location they were trying to go to
//         return <Navigate to="/signin" state={{ from: location }} replace />;
//     }

//     return children;
// };

// export default ProtectedRoute;


// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    // Show loading state if auth is still initializing
    if (loading) {
        return <div>Loading...</div>;
    }

    // Redirect to signin if not authenticated
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    // Render child routes if authenticated
    return <Outlet />;
};

export default ProtectedRoute;
