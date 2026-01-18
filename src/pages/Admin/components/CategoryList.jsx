import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const CategoryList = ({ categories, onEdit, onDelete }) => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
                {Array.isArray(categories) && categories.length > 0 ? (
                    categories.map((category) => (
                        <li key={category.id}>
                            <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        className="h-10 w-10 rounded-full object-cover mr-4 bg-gray-200"
                                        src={category.img}
                                        alt=""
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/40?text=IMG'; }}
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-primary truncate">{category.name}</p>
                                        <p className="text-sm text-gray-500">{category.id}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button onClick={() => onEdit(category)} className="p-2 text-gray-400 hover:text-primary">
                                        <Edit2 className="w-5 h-5" />
                                    </button>
                                    <button onClick={() => onDelete(category.id)} className="p-2 text-gray-400 hover:text-red-600">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="px-4 py-8 text-center text-gray-500">
                        No hay categorías registradas. ¡Comienza agregando una!
                    </li>
                )}
            </ul>
        </div>
    );
};

export default CategoryList;
