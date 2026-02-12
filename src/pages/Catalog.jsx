import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { useCatalog } from '../context/CatalogContext';

import SEO from '../components/SEO';

const Catalog = () => {
    const { categories, loading } = useCatalog();

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 bg-secondary/20 rounded-full mb-4"></div>
                    <div className="text-neutral-400 font-medium">Cargando catálogo premium...</div>
                </div>
            </div>
        );
    }

    return (
        <Section>
            <SEO
                title="Catálogo Premium"
                description="Explora nuestra colección exclusiva de persianas y cortinas: Onda Serena, Blackout, Sheer Elegance y más. Calidad y diseño para tu hogar."
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900">Nuestro Catálogo</h1>
                <p className="text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                    Descubre soluciones innovadoras y elegantes para el control de luz y privacidad en cada rincón de tu hogar.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/catalogo/${cat.id}`}
                        className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                                src={cat.images && cat.images.length > 0 ? cat.images[0] : '/placeholder.jpg'}
                                alt={cat.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.src = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80';
                                }}
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-secondary transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-neutral-500 line-clamp-2 leading-relaxed mb-6">
                                {cat.desc}
                            </p>
                            <div className="flex items-center text-secondary font-bold text-sm uppercase tracking-wider">
                                Ver Detalles
                                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};

export default Catalog;
