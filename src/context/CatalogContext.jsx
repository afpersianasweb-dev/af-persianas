import React, { createContext, useContext, useState, useEffect } from 'react';
import { dataService } from '../services/dataService';
import { useContentProtection } from '../hooks/useContentProtection';

const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [protectionEnabled, setProtectionEnabled] = useState(true);

    // Initial Data Fetch
    useEffect(() => {
        const loadJava = async () => {
            try {
                const [cats, protection] = await Promise.all([
                    dataService.getCategories(),
                    dataService.getProtectionStatus()
                ]);
                setCategories(cats);
                setProtectionEnabled(protection);
            } catch (err) {
                console.error("Failed to load catalog data", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        loadJava();
    }, []);

    // Security: Content Protection
    useContentProtection(protectionEnabled);

    // Wrappers for Service Calls
    const addCategory = async (newCategory) => {
        try {
            const added = await dataService.addCategory(newCategory);
            setCategories(prev => [...prev, added]);
            return added;
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    const deleteCategory = async (id) => {
        try {
            await dataService.deleteCategory(id);
            setCategories(prev => prev.filter(cat => cat.id !== id));
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    const updateCategory = async (id, updatedData) => {
        try {
            await dataService.updateCategory(id, updatedData);
            setCategories(prev => prev.map(cat => cat.id === id ? { ...cat, ...updatedData } : cat));
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    const toggleProtection = async (status) => {
        try {
            await dataService.setProtectionStatus(status);
            setProtectionEnabled(status);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <CatalogContext.Provider value={{
            categories,
            loading,
            error,
            addCategory,
            deleteCategory,
            updateCategory,
            setProtectionEnabled: toggleProtection,
            protectionEnabled
        }}>
            {children}
        </CatalogContext.Provider>
    );
};

export const useCatalog = () => useContext(CatalogContext);
