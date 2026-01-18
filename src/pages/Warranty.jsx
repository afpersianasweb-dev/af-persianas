import React from 'react';
import Section from '../components/Section';
import { Shield, Clock, PenTool, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Warranty = () => {
    return (
        <Section>
            <SEO
                title="Garantía"
                description="Conoce nuestra política de garantía de hasta 5 años en mecanismos y tejidos. Tu inversión en persianas AF está protegida."
            />
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">Política de Garantía</h1>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                    Tu inversión está protegida. Nos comprometemos con la calidad de nuestros productos y servicios.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 bg-white rounded-xl shadow-sm border border-neutral-100"
                >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                        <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Mecanismos</h3>
                    <p className="text-neutral-600">
                        Garantía extendida de <span className="font-bold text-neutral-800">3 a 5 años</span> en defectos de fabricación de mecanismos.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 bg-white rounded-xl shadow-sm border border-neutral-100"
                >
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6">
                        <Clock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Tejidos</h3>
                    <p className="text-neutral-600">
                        Cobertura contra <span className="font-bold text-neutral-800">decoloración prematura</span> y defectos en el tejido.
                    </p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="p-8 bg-white rounded-xl shadow-sm border border-neutral-100"
                >
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                        <PenTool className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Instalación</h3>
                    <p className="text-neutral-600">
                        Respaldamos nuestro trabajo con <span className="font-bold text-neutral-800">6 meses de garantía</span> en mano de obra.
                    </p>
                </motion.div>
            </div>

            <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6 max-w-4xl mx-auto">
                <FileCheck className="w-12 h-12 text-secondary shrink-0" />
                <div>
                    <h3 className="text-xl font-bold mb-2">Requisitos para validación</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        Para hacer válida su garantía, es necesario presentar su comprobante de compra original. La garantía no cubre daños ocasionados por mal uso, accidentes, o desgaste natural excesivo.
                    </p>
                    <button className="text-secondary font-medium hover:text-secondary-dark transition-colors">
                        Descargar Póliza Completa &rarr;
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default Warranty;
