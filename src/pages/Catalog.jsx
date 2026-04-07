import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';
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
                        className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm md:hover:shadow-2xl md:hover:-translate-y-2 transition-all duration-500 ease-out border border-neutral-100"
                    >
                        <OptimizedImage
                            src={cat.images && cat.images.length > 0 ? cat.images[0] : '/placeholder.jpg'}
                            alt={cat.name}
                            className="transition-transform duration-700 md:group-hover:scale-110"
                            containerClassName=""
                            aspectRatio="4/3"
                        />
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-secondary transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-neutral-500 line-clamp-2 leading-relaxed mb-6">
                                {cat.desc}
                            </p>
                            <div className="flex items-center text-secondary font-bold text-sm uppercase tracking-wider">
                                Ver Detalles
                                <span className="ml-2 transition-transform duration-300 md:group-hover:translate-x-2">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-20 border-t border-neutral-100 pt-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">Catálogos de Exteriores</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        Descarga o visualiza nuestras especificaciones técnicas y opciones exclusivas para áreas exteriores.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-4xl mx-auto px-4">
                    <a
                        href="/catalogos/Catalogo%20linea%20inyectada.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-1 items-center justify-center p-6 bg-white border border-neutral-200 rounded-xl shadow-sm md:hover:shadow-xl transition-all duration-300 ease-out md:hover:-translate-y-1 md:hover:scale-[1.02] active:scale-95 text-neutral-800 md:hover:border-primary"
                    >
                        <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary md:group-hover:bg-primary md:group-hover:text-white transition-colors">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div className="text-left flex-1">
                            <h3 className="font-bold text-lg">Línea Inyectada</h3>
                            <p className="text-sm text-neutral-500">PDF Visual</p>
                        </div>
                        <Download className="w-5 h-5 text-neutral-400 md:group-hover:text-primary transition-colors" />
                    </a>

                    <a
                        href="/catalogos/Catalogo%20Sombrillas.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-1 items-center justify-center p-6 bg-white border border-neutral-200 rounded-xl shadow-sm md:hover:shadow-xl transition-all duration-300 ease-out md:hover:-translate-y-1 md:hover:scale-[1.02] active:scale-95 text-neutral-800 md:hover:border-secondary"
                    >
                        <div className="mr-4 bg-secondary/10 p-3 rounded-full text-secondary md:group-hover:bg-secondary md:group-hover:text-white transition-colors">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div className="text-left flex-1">
                            <h3 className="font-bold text-lg">Sombrillas</h3>
                            <p className="text-sm text-neutral-500">Colección Exterior</p>
                        </div>
                        <Download className="w-5 h-5 text-neutral-400 md:group-hover:text-secondary transition-colors" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Catalog;
