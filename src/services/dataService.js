/**
 * @file dataService.js
 * @description Service for handling data operations (Catalog, Categories).
 * Currently simulates async operations using LocalStorage to prepare for backend integration.
 */

import { initialCategories } from '../data/catalog';

// Force removal of old keys to prevent any remaining cache issues
localStorage.removeItem('af_catalog_v4_real_images');
localStorage.removeItem('af_protection_enabled_v4');

const STORAGE_KEY = 'af_catalog_v5_aesthetic';
const PROTECTION_KEY = 'af_protection_enabled_v5';

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const dataService = {
    /**
     * Fetch all categories
     * @returns {Promise<Array>}
     */
    getCategories: async () => {
        await delay(300); // Simulate network latency
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (!saved) {
                // Si no existe, guardamos las categorías iniciales
                localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCategories));
                return initialCategories;
            }
            const parsed = JSON.parse(saved);
            // Versión de seguridad: Si no hay 10 productos o falta la propiedad 'images', forzamos reset
            const isInvalidVersion = !Array.isArray(parsed) || parsed.length !== 10 || (parsed.length > 0 && !parsed[0].images);

            if (isInvalidVersion) {
                console.log("Detectada versión antigua o corrupta del catálogo. Reseteando a versión 10 productos...");
                localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCategories));
                return initialCategories;
            }
            return parsed;
        } catch (error) {
            console.error('Error fetching categories:', error);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCategories));
            return initialCategories;
        }
    },

    /**
     * Save a new category
     * @param {Object} category 
     * @returns {Promise<Object>}
     */
    addCategory: async (category) => {
        await delay(300);
        const current = await dataService.getCategories();
        const updated = [...current, category];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return category;
    },

    /**
     * Update a category
     * @param {string|number} id 
     * @param {Object} updates 
     * @returns {Promise<Object>}
     */
    updateCategory: async (id, updates) => {
        await delay(300);
        const current = await dataService.getCategories();
        const updated = current.map(cat => cat.id === id ? { ...cat, ...updates } : cat);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return updates;
    },

    /**
     * Delete a category
     * @param {string|number} id 
     * @returns {Promise<boolean>}
     */
    deleteCategory: async (id) => {
        await delay(300);
        const current = await dataService.getCategories();
        const updated = current.filter(cat => cat.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        return true;
    },

    /**
     * Get content protection status
     * @returns {Promise<boolean>}
     */
    getProtectionStatus: async () => {
        // This might be sync in reality, but good to wrap if it becomes a server setting
        const saved = localStorage.getItem(PROTECTION_KEY);
        return saved !== null ? JSON.parse(saved) : true;
    },

    /**
     * Set content protection status
     * @param {boolean} status 
     */
    setProtectionStatus: async (status) => {
        localStorage.setItem(PROTECTION_KEY, JSON.stringify(status));
        return status;
    }
};
