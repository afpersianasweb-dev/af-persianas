import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Initial check
        setIsAuthenticated(authService.isAuthenticated());
        setIsLoading(false);
    }, []);

    const login = async (password) => {
        try {
            await authService.login(password);
            setIsAuthenticated(true);
            return true;
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        authService.logout();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
