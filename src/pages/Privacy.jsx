import React from 'react';
import Section from '../components/Section';
import { Lock, Eye, Server, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const Privacy = () => {
    return (
        <Section>
            <SEO
                title="Política de Privacidad"
                description="En AF Persianas valoramos tu privacidad. Conoce cómo protegemos tus datos personales."
            />
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
                    <p className="text-neutral-500">
                        Tu privacidad es fundamental para nosotros. Conoce cómo gestionamos tus datos.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Section 1 */}
                    <div className="flex gap-6">
                        <div className="hidden md:flex w-12 h-12 bg-neutral-100 rounded-full items-center justify-center shrink-0">
                            <Eye className="w-6 h-6 text-neutral-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">1. Recopilación de Información</h2>
                            <p className="text-neutral-600 leading-relaxed bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                                Recopilamos información que usted nos proporciona directamente cuando solicita una cotización, se pone en contacto con nosotros o realiza una compra. Esto puede incluir nombre, dirección de correo electrónico, número de teléfono y dirección del domicilio para fines de instalación.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="flex gap-6">
                        <div className="hidden md:flex w-12 h-12 bg-neutral-100 rounded-full items-center justify-center shrink-0">
                            <Server className="w-6 h-6 text-neutral-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">2. Uso de la Información</h2>
                            <p className="text-neutral-600 leading-relaxed bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                                Utilizamos su información exclusivamente para procesar pedidos, coordinar visitas técnicas, responder a sus consultas y mejorar nuestros servicios. No vendemos ni compartimos su información personal con terceros para fines comerciales.
                            </p>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="flex gap-6">
                        <div className="hidden md:flex w-12 h-12 bg-neutral-100 rounded-full items-center justify-center shrink-0">
                            <Lock className="w-6 h-6 text-neutral-600" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">3. Seguridad de Datos</h2>
                            <p className="text-neutral-600 leading-relaxed bg-white p-6 rounded-xl border border-neutral-100 shadow-sm">
                                Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o la alteración.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center pt-10 border-t border-neutral-200">
                    <ShieldCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <p className="text-sm text-neutral-500">
                        Última actualización: Enero 2026
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Privacy;
