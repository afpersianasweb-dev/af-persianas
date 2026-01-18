import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingFallback from './LoadingFallback';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <LoadingFallback />;
    }

    if (!isAuthenticated) {
        // Redirect to login but save the attempted location
        return <Navigate to="/admin" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
