/**
 * @file authService.js
 * @description Service for handling authentication.
 * Currently simulates simple token-based auth with LocalStorage.
 */

const TOKEN_KEY = 'af_admin_token';
// Securely load password from env, fallback only for dev
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin';

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
    /**
     * Login with password
     * @param {string} password 
     * @returns {Promise<boolean>}
     */
    login: async (password) => {
        await delay(500);
        if (password === ADMIN_PASSWORD) {
            localStorage.setItem(TOKEN_KEY, 'true');
            return true;
        }
        throw new Error('Contraseña incorrecta');
    },

    /**
     * Logout user
     */
    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
    },

    /**
     * Check if user is authenticated
     * @returns {boolean}
     */
    isAuthenticated: () => {
        return localStorage.getItem(TOKEN_KEY) === 'true';
    }
};
