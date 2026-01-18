import React, { useState } from 'react';
import Section from '../components/Section';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('Todos');

    const categories = ['Todos', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'Todos'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <Section>
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Galería de Proyectos</h1>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                    Descubre cómo hemos transformado espacios en Pereira y sus alrededores con nuestros productos.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                ? 'bg-primary text-white shadow-lg'
                                : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="group relative rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl bg-white"
                            onClick={() => setSelectedImage(project)}
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <ZoomIn className="text-white w-10 h-10 drop-shadow-lg" />
                                </div>
                            </div>
                            <div className="p-4">
                                <span className="text-xs font-bold text-secondary uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-lg font-bold text-neutral-800 mt-1">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-full md:w-2/3 h-64 md:h-auto bg-black">
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
                                <span className="text-sm font-bold text-secondary uppercase tracking-wider mb-2">{selectedImage.category}</span>
                                <h2 className="text-2xl font-bold text-neutral-900 mb-4">{selectedImage.title}</h2>
                                <p className="text-neutral-600 leading-relaxed mb-6">
                                    {selectedImage.description}
                                </p>
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="px-6 py-2 bg-neutral-100 text-neutral-800 font-medium rounded-md hover:bg-neutral-200 transition-colors self-start"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};

export default Gallery;
