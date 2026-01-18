import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, LogOut, Shield } from 'lucide-react';
import Button from '../../components/Button';
import { useCatalog } from '../../context/CatalogContext';
import { useAuth } from '../../context/AuthContext';
import CategoryForm from './components/CategoryForm';
import CategoryList from './components/CategoryList';

const Dashboard = () => {
    const { categories, addCategory, deleteCategory, updateCategory } = useCatalog();
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    // Local state for form handling
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        desc: '',
        fullDesc: '',
        img: '',
        icon: '',
        features: ''
    });

    const handleLogout = () => {
        logout();
        navigate('/admin');
    };

    const handleEdit = (category) => {
        setIsEditing(category.id);
        setFormData({
            ...category,
            features: (category.features && Array.isArray(category.features)) ? category.features.join(', ') : ''
        });
        setIsAdding(false);
    };

    const handleAddNew = () => {
        setFormData({
            id: '', name: '', desc: '', fullDesc: '', img: '', icon: '', features: ''
        });
        setIsAdding(true);
        setIsEditing(null);
    };

    const handleSave = async () => {
        const featuresArray = formData.features.split(',').map(f => f.trim()).filter(f => f);
        const dataToSave = { ...formData, features: featuresArray };

        try {
            if (isAdding) {
                // Basic validation
                if (!dataToSave.id || !dataToSave.name) return alert('ID y Nombre son obligatorios');
                await addCategory(dataToSave);
            } else {
                await updateCategory(isEditing, dataToSave);
            }
            // Close form only on success
            setIsEditing(null);
            setIsAdding(false);
        } catch (error) {
            alert('Error al guardar: ' + error.message);
        }
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de eliminar esta categoría?')) {
            deleteCategory(id);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Admin Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                        <Shield className="w-8 h-8 text-primary mr-3" />
                        Panel Administrativo
                    </h1>
                    <div className="flex items-center">
                        <button onClick={handleLogout} className="text-gray-500 hover:text-red-600 flex items-center">
                            <LogOut className="w-5 h-5 mr-1" /> Salir
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Actions */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-semibold text-gray-800">Gestión del Catálogo</h2>
                    {!isAdding && !isEditing && (
                        <Button onClick={handleAddNew} variant="primary">
                            <Plus className="w-5 h-5 mr-2" /> Nueva Categoría
                        </Button>
                    )}
                </div>

                {/* Edit/Add Form */}
                {(isEditing || isAdding) && (
                    <CategoryForm
                        formData={formData}
                        setFormData={setFormData}
                        isAdding={isAdding}
                        onSave={handleSave}
                        onCancel={() => { setIsEditing(null); setIsAdding(false); }}
                    />
                )}

                {/* List */}
                <CategoryList
                    categories={categories}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </main>
        </div>
    );
};

export default Dashboard;
