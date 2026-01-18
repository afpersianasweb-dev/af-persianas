import React from 'react';
import { ArrowRight, Shield, Award, Clock, Star, Home as HomeIcon, Building2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Section from '../components/Section';
import { useCatalog } from '../context/CatalogContext';
import SEO from '../components/SEO';
import ReviewsSection from '../components/ReviewsSection';

const Home = () => {
    const { categories, loading } = useCatalog();
    // Show only first 4 categories on home
    const displayCategories = categories.slice(0, 4);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center text-white bg-neutral-900">Cargando experiencia...</div>;
    }

    return (
        <div className="flex flex-col">
            <SEO
                title="Inicio"
                description="AF Persianas: Transformamos tus espacios con persianas de alta gama, cortinas y soluciones de control solar en Pereira y el Eje Cafetero."
            />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-neutral-900 text-white overflow-hidden py-20">
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-primary-dark to-neutral-800 opacity-90 z-0"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay z-0"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full my-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8"
                    >
                        {/* Prominent Logo - Reduced size */}
                        <div className="flex justify-center mb-6">
                            <img
                                src="/logo-update.png"
                                alt="Logo AF Persianas - Fabrica y Venta de Persianas en Pereira y Eje Cafetero"
                                className="w-32 sm:w-40 md:w-56 h-auto brightness-0 invert mix-blend-screen drop-shadow-2xl"
                            />
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight px-4">
                            Elegancia que <span className="text-secondary">Transforma</span> <br /> Tus Espacios
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto font-light px-4">
                            Transformamos hogares y oficinas en ambientes estéticos, funcionales y confortables.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 px-4">
                            <Button to="/catalogo" variant="primary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto shadow-xl">
                                Ver Colección
                            </Button>
                            <Button to="/contacto" variant="outline" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-neutral-900 transition-colors shadow-xl">
                                Agendar Asesoría
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-0.5 h-16 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
                </motion.div>
            </section>

            {/* Segments Section (Hogar vs Empresas) */}
            <Section className="bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Hogar */}
                    <div className="group relative overflow-hidden rounded-2xl bg-neutral-50 p-8 hover:shadow-xl transition-all duration-300">
                        <div className="absolute top-0 right-0 p-8 alpha-10 text-neutral-200">
                            <HomeIcon className="w-32 h-32 opacity-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4 flex items-center">
                            <HomeIcon className="w-6 h-6 mr-3" />
                            Para Tu Hogar
                        </h3>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            Ayudamos a transformar tu casa en un espacio más estético y cómodo. Ofrecemos asesoría personalizada y productos que garantizan privacidad, protección solar y confort.
                        </p>
                        <ul className="space-y-2 mb-8 text-sm text-neutral-500">
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" /> Asesoría en decoración</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" /> Instalación profesional</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" /> Mantenimiento confiable</li>
                        </ul>
                        <Button to="/contacto" variant="outline" className="w-full sm:w-auto">Cotizar para mi Hogar</Button>
                    </div>

                    {/* Empresas */}
                    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 text-white p-8 hover:shadow-xl transition-all duration-300">
                        <div className="absolute top-0 right-0 p-8 alpha-10 text-neutral-700">
                            <Building2 className="w-32 h-32 opacity-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                            <Building2 className="w-6 h-6 mr-3" />
                            Para Empresas y Aliados
                        </h3>
                        <p className="text-neutral-300 mb-6 leading-relaxed">
                            Somos el aliado estratégico para arquitectos, constructoras y oficinas corporativas. Soluciones de alta durabilidad, procesos eficientes y cumplimiento en tiempos.
                        </p>
                        <ul className="space-y-2 mb-8 text-sm text-neutral-400">
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" /> Precios especiales B2B</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" /> Cumplimiento de cronogramas</li>
                            <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-secondary" /> Soporte postventa preferencial</li>
                        </ul>
                        <Button to="/contacto" variant="secondary" className="w-full sm:w-auto">Alianzas Comerciales</Button>
                    </div>
                </div>
            </Section>

            {/* Value Prop Features - Optimized for AI & Trust */}
            <Section className="bg-neutral-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">¿Por qué elegir AF Persianas?</h2>
                    <p className="text-neutral-500 max-w-2xl mx-auto">
                        Nos distinguimos por ofrecer más que un producto; entregamos una experiencia integral de decoración y control solar.
                        Somos expertos en <strong>persianas a medida</strong>, priorizando la durabilidad y el diseño.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <article className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Star className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Asesoría Decorativa</h3>
                        <p className="text-neutral-500 text-sm">
                            Expertos en interiorismo te ayudan a elegir entre telas <strong>Blackout, Translucidas o Screen</strong> según tu necesidad de luz.
                        </p>
                    </article>
                    <article className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Clock className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Instalación Puntual</h3>
                        <p className="text-neutral-500 text-sm">
                            Respetamos tu tiempo. Nuestro equipo de técnicos certificados realiza una <strong>instalación limpia y eficiente</strong>.
                        </p>
                    </article>
                    <article className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Garantía</h3>
                        <p className="text-neutral-500 text-sm">
                            Tu inversión está segura. Ofrecemos garantía real en <strong>mecanismos y tejidos</strong> contra defectos de fabricación.
                        </p>
                    </article>
                    <article className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Award className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Calidad Premium</h3>
                        <p className="text-neutral-500 text-sm">
                            Utilizamos componentes de alta gama para asegurar que tus <strong>persianas y cortinas</strong> funcionen perfecto por años.
                        </p>
                    </article>
                </div>
            </Section>

            {/* Google Reviews */}
            <ReviewsSection />

            {/* Categories Grid */}
            <Section className="bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-4">Nuestras Colecciones</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-neutral-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-neutral-100 group cursor-pointer"
                        >
                            <div className="text-4xl mb-4">{cat.icon}</div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-primary transition-colors">{cat.title || cat.name}</h3>
                            <p className="text-neutral-500 text-sm mb-4 line-clamp-2">{cat.desc}</p>
                            <div className="flex items-center text-secondary font-medium text-sm group-hover:translate-x-2 transition-transform">
                                Ver modelos <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Button to="/catalogo" variant="outline">Explorar Todo el Catálogo</Button>
                </div>
            </Section>

            {/* FAQ Section for AI & SEO */}
            <Section className="bg-neutral-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
                        <p className="text-neutral-500">Resolvemos tus dudas sobre persianas y cortinas en el Eje Cafetero.</p>
                    </div>

                    <div className="space-y-6">
                        <details className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-lg list-none text-neutral-800">
                                ¿En qué ciudades prestan servicio de instalación?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-4 leading-relaxed">
                                Ofrecemos venta e instalación directa en <strong>Santa Rosa de Cabal, Pereira, Dosquebradas</strong> y zonas rurales aledañas. Para otras ciudades del Eje Cafetero, contáctanos para evaluar disponibilidad.
                            </p>
                        </details>

                        <details className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-lg list-none text-neutral-800">
                                ¿Cuál es el tiempo de entrega de las persianas?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-4 leading-relaxed">
                                El tiempo de fabricación e instalación es generalmente de <strong>5 a 8 días hábiles</strong>, dependiendo del tipo de tejido y la cantidad de unidades. Te informaremos la fecha exacta al confirmar tu pedido.
                            </p>
                        </details>

                        <details className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-lg list-none text-neutral-800">
                                ¿Las persianas tienen garantía?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-4 leading-relaxed">
                                Sí, todos nuestros productos cuentan con garantía. Ofrecemos de <strong>3 a 5 años de garantía</strong> en mecanismos y tejidos contra defectos de fabricación y decoloración prematura.
                            </p>
                        </details>

                        <details className="group bg-white p-6 rounded-xl shadow-sm border border-neutral-100 cursor-pointer">
                            <summary className="flex justify-between items-center font-bold text-lg list-none text-neutral-800">
                                ¿Ofrecen motorización y automatización de cortinas?
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <p className="text-neutral-600 mt-4 leading-relaxed">
                                Absolutamente. Contamos con <strong>motores recargables y alámbricos</strong> compatibles con sistemas inteligentes como Alexa y Google Home, permitiéndote controlar tus persianas desde tu celular o con la voz.
                            </p>
                        </details>
                    </div>
                </div>

                {/* JSON-LD for FAQ */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "¿En qué ciudades prestan servicio de instalación?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ofrecemos venta e instalación directa en Santa Rosa de Cabal, Pereira, Dosquebradas y zonas rurales aledañas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Cuál es el tiempo de entrega de las persianas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "El tiempo de fabricación e instalación es generalmente de 5 a 8 días hábiles."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Las persianas tienen garantía?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, ofrecemos de 3 a 5 años de garantía en mecanismos y tejidos contra defectos de fabricación."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "¿Ofrecen motorización y automatización de cortinas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sí, contamos con motores compatibles con Alexa y Google Home para automatizar tus cortinas."
                                }
                            }
                        ]
                    })}
                </script>
            </Section>

            {/* CTA Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para renovar tu espacio?</h2>
                    <p className="text-primary-100 text-lg mb-8">
                        Solicita tu visita de asesoría gratuita hoy mismo. Llevamos el showroom a tu domicilio.
                    </p>
                    <Button to="/contacto" variant="secondary" className="text-lg px-8 py-4 shadow-xl">
                        Agendar Cita Gratis
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
