import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
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
            <div className="relative h-[60vh] min-h-[400px]">
                <div className="absolute inset-0">
                    <img src={data.img} alt={data.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-neutral-900/50"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-end pb-16">
                    <Link to="/catalogo" className="text-white/80 hover:text-white flex items-center mb-6 transition-colors w-fit">
                        <ArrowLeft className="w-5 h-5 mr-2" /> Volver al Catálogo
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{data.name}</h1>
                    <p className="text-xl text-neutral-200 max-w-2xl">{data.fullDesc || data.desc}</p>
                </div>
            </div>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-neutral-900">Características Principales</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {data.features && data.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                                    <CheckCircle className="w-6 h-6 text-secondary mr-4" />
                                    <span className="text-lg text-neutral-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Button to="/contacto" variant="primary" className="w-full md:w-auto text-lg px-8">
                                Cotizar {data.name}
                            </Button>
                        </div>
                    </div>
                    <div className="bg-neutral-900 text-white p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">¿Por qué elegir {data.name}?</h3>
                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            Nuestros modelos de {data.name.toLowerCase()} están fabricados con materiales de certificación internacional, garantizando durabilidad y un acabado premium. Además, cuentas con 5 años de garantía en tejidos y mecanismos.
                        </p>
                        <div className="h-0.5 w-full bg-neutral-800 mb-6"></div>
                        <p className="text-sm text-neutral-500">
                            * Disponibles en una amplia gama de colores y texturas. Solicita tu muestra a domicilio.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default CategoryDetail;
