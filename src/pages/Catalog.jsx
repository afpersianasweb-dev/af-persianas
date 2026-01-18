import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import { useCatalog } from '../context/CatalogContext';

import SEO from '../components/SEO';

const Catalog = () => {
    const { categories, loading } = useCatalog();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Cargando catálogo...</div>;
    }

    return (
        <Section>
            <SEO
                title="Catálogo"
                description="Explora nuestra colección de persianas enrollables, sheer, blackout y motorizadas. Diseños modernos para hogar y oficina."
            />
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Nuestro Catálogo</h1>
                <p className="text-neutral-500 max-w-2xl mx-auto">Explora nuestra amplia variedad de persianas y cortinas diseñadas para cada necesidad y estilo.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <Link key={cat.id} to={`/catalogo/${cat.id}`} className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-neutral-900/10 transition-colors z-10" />
                        <img
                            src={cat.img}
                            alt={cat.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-900/80 to-transparent z-20">
                            <h3 className="text-white text-xl font-bold group-hover:text-secondary-light transition-colors">{cat.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};

export default Catalog;
