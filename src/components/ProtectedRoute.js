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
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const user = localStorage.getItem('user');
    return user ? true : false;
};

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoute;
