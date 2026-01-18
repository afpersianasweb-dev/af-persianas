/**
 * @file apiClient.js
 * @description Centralized API client wrapper for making HTTP requests.
 * Standardizes error handling, headers, and response parsing.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

class ApiClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.headers = {
            'Content-Type': 'application/json',
        };
    }

    /**
     * Set the Authorization header
     * @param {string} token - The auth token
     */
    setAuthToken(token) {
        if (token) {
            this.headers['Authorization'] = `Bearer ${token}`;
        } else {
            delete this.headers['Authorization'];
        }
    }

    /**
     * Generic request method
     * @param {string} endpoint - The endpoint to call
     * @param {object} options - Fetch options (method, body, etc.)
     * @returns {Promise<any>} - The parsed JSON response
     */
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const controller = new AbortController();
        const { timeout = 10000, ...fetchOptions } = options;

        const id = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, {
                ...fetchOptions,
                headers: {
                    ...this.headers,
                    ...fetchOptions.headers,
                },
                signal: controller.signal,
            });

            clearTimeout(id);

            if (!response.ok) {
                // Handle HTTP errors
                const errorBody = await response.json().catch(() => ({}));
                const error = new Error(errorBody.message || `HTTP Error ${response.status}`);
                error.status = response.status;
                error.data = errorBody;
                throw error;
            }

            // Return empty object for 204 No Content
            if (response.status === 204) return {};

            return await response.json();

        } catch (error) {
            clearTimeout(id);
            if (error.name === 'AbortError') {
                throw new Error('Request timed out');
            }
            throw error;
        }
    }

    get(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'GET' });
    }

    post(endpoint, body, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
        });
    }

    put(endpoint, body, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(body),
        });
    }

    delete(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    }
}

// Export a singleton instance
export const apiClient = new ApiClient(API_BASE_URL);
export default apiClient;
