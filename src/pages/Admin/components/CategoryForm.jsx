import React from 'react';
import Button from '../../../components/Button';

const CategoryForm = ({ formData, setFormData, isAdding, onSave, onCancel }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-lg font-bold mb-4">{isAdding ? 'Agregar Nueva Categoría' : 'Editar Categoría'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">ID (URL slug)</label>
                    <input
                        type="text"
                        value={formData.id}
                        onChange={e => setFormData({ ...formData, id: e.target.value })}
                        disabled={!isAdding}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Descripción Corta</label>
                    <input
                        type="text"
                        value={formData.desc}
                        onChange={e => setFormData({ ...formData, desc: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Descripción Completa</label>
                    <textarea
                        value={formData.fullDesc}
                        onChange={e => setFormData({ ...formData, fullDesc: e.target.value })}
                        rows={3}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">URL Imagen</label>
                    <input
                        type="text"
                        value={formData.img}
                        onChange={e => setFormData({ ...formData, img: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Icono (Emoji)</label>
                    <input
                        type="text"
                        value={formData.icon}
                        onChange={e => setFormData({ ...formData, icon: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Características (separadas por coma)</label>
                    <input
                        type="text"
                        value={formData.features}
                        onChange={e => setFormData({ ...formData, features: e.target.value })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
                <Button onClick={onCancel} variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                    Cancelar
                </Button>
                <Button onClick={onSave} variant="primary">
                    Guardar Cambios
                </Button>
            </div>
        </div>
    );
};

export default CategoryForm;
