import React from 'react';
import Section from '../components/Section';
import { Target, Eye, Heart, CheckCircle, Users, Lightbulb, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
    const values = [
        {
            title: "Honestidad y Transparencia",
            desc: "Actuamos con claridad en cada trato, brindando información sincera sobre precios, tiempos y condiciones.",
            icon: <CheckCircle className="w-6 h-6" />
        },
        {
            title: "Respeto y Empatía",
            desc: "Escuchamos y comprendemos a nuestros clientes, generando confianza y comodidad en todo el proceso.",
            icon: <Heart className="w-6 h-6" />
        },
        {
            title: "Puntualidad y Responsabilidad",
            desc: "Cumplimos lo prometido en tiempos de entrega, instalación y servicio, respondiendo siempre con compromiso.",
            icon: <Clock className="w-6 h-6" />
        },
        {
            title: "Calidad y Excelencia",
            desc: "Ofrecemos productos seguros, duraderos y estéticamente superiores, cuidando cada detalle de instalación y servicio.",
            icon: <Target className="w-6 h-6" />
        },
        {
            title: "Innovación y Mejora Continua",
            desc: "Evolucionamos constantemente nuestros productos y procesos para ofrecer soluciones modernas, sostenibles y de alto valor.",
            icon: <Lightbulb className="w-6 h-6" />
        },
    ];

    return (
        <div className="pt-0">
            <SEO
                title="Nosotros"
                description="Conoce a AF Persianas. Nuestra misión es transformar espacios con honestidad, calidad y diseño innovador en el Eje Cafetero."
            />
            {/* Header */}
            <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                    style={{ backgroundImage: "url('/images/equipo/equipo-1.jpg')" }}
                ></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Nuestra Esencia
                    </motion.h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto font-light italic">
                        “Liderar, expandir, transformar, inspirar y mejorar vidas.”
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-2">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-800">Misión</h2>
                        </div>
                        <p className="text-neutral-600 text-lg leading-relaxed">
                            Nuestra misión es ofrecer soluciones integrales en persianas y cortinas manuales y motorizadas a personas y empresas que buscan ambientes estéticos, funcionales y confortables. Brindamos asesoría personalizada, garantizando practicidad en la decoración de espacios, junto con privacidad y protección solar adaptadas a cada necesidad.
                        </p>
                    </div>

                    <div className="relative h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-100">
                        <img
                            src="/images/equipo/equipo-4.jpeg"
                            alt="Fundadores de AF Persianas"
                            className="absolute inset-0 w-full h-full object-cover object-[center_30%] transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 md:order-1 relative h-64 md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-100">
                        <img
                            src="/images/equipo/equipo-3.jpg"
                            alt="Visión AF Persianas"
                            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="order-1 md:order-2 space-y-6">
                        <div className="flex items-center space-x-4 mb-2">
                            <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-800">Visión</h2>
                        </div>
                        <p className="text-neutral-600 text-lg leading-relaxed">
                            En 5–10 años seremos líderes en nuestra región y una marca con proyección internacional, reconocida por transformar espacios en lugares que elevan el bienestar y la calidad de vida. Creemos que la decoración no es un lujo, sino una necesidad esencial para vivir en armonía, y queremos cambiar la manera en que las personas la perciben y la disfrutan.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section className="bg-neutral-50 mb-0">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-4">Nuestros Valores</h2>
                    <div className="h-1 w-20 bg-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary hover:border-secondary transition-colors duration-300"
                        >
                            <div className="text-primary mb-4">{val.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                            <p className="text-neutral-500">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Team/Profile Placeholder (Optional based on business model mentioned) */}
            <Section>
                <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Eres Arquitecto, Diseñador o Constructora?</h2>
                        <p className="text-neutral-300 mb-8">
                            Nos convertimos en tu aliado estratégico, brindando soluciones de alta calidad, cumplimiento en tiempos y soporte postventa para tus proyectos.
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=573147958057&text=Hola,%20me%20gustar%C3%ADa%20hablar%20de%20negocios."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-md font-medium transition-colors"
                        >
                            Hablemos de negocios
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
