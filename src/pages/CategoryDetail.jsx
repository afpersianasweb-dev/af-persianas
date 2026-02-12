import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import ProductCarousel from '../components/ProductCarousel';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useCatalog } from '../context/CatalogContext';

const CategoryDetail = () => {
    const { category } = useParams();
    const { categories, loading } = useCatalog();

    if (loading) {
        return (
            <Section>
                <div className="flex items-center justify-center min-h-[50vh]">Cargando detalles...</div>
            </Section>
        );
    }

    // Find category safely (case insensitive)
    const data = categories.find(c => c.id.toLowerCase() === category?.toLowerCase());

    if (!data) {
        return (
            <Section>
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold mb-4">Categoría no encontrada</h2>
                    <Button to="/catalogo" variant="primary">Volver al Catálogo</Button>
                </div>
            </Section>
        );
    }

    return (
        <div className="pt-0">
            <div className="relative bg-neutral-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 pt-12 pb-16 relative z-10">
                    <Link to="/catalogo" className="text-white/60 hover:text-white flex items-center mb-8 transition-colors w-fit">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Volver al Catálogo
                    </Link>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{data.name}</h1>
                            <p className="text-xl text-neutral-300 max-w-xl leading-relaxed">
                                {data.fullDesc || data.desc}
                            </p>
                        </div>
                        <div className="relative">
                            <ProductCarousel images={data.images} productName={data.name} />
                        </div>
                    </div>
                </div>
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-8 text-neutral-900">Especificaciones y Ventajas</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {data.features && data.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center p-5 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                                    <CheckCircle className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
                                    <span className="text-lg text-neutral-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <Button to="/contacto" variant="primary" className="w-full md:w-auto text-lg px-10 py-4 shadow-xl shadow-primary/20">
                                Cotizar Mi {data.name} Personalizada
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="bg-neutral-900 text-white p-10 rounded-3xl flex-grow flex flex-col justify-center relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6">¿Por qué elegir {data.name}?</h3>
                                <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                    Nuestras {data.name.toLowerCase()} están fabricadas con materiales de certificación internacional, garantizando una excelente durabilidad y un acabado premium. Además, cuentas con 5 años de garantía integral en tejidos y mecanismos.
                                </p>
                                <div className="h-0.5 w-24 bg-secondary mb-8"></div>
                                <ul className="space-y-3 text-sm text-neutral-500 italic">
                                    <li>• Amplia gama de colores y texturas premium.</li>
                                    <li>• Solicita tu muestra a domicilio sin costo adicional.</li>
                                    <li>• Instalación profesional incluida.</li>
                                </ul>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default CategoryDetail;
