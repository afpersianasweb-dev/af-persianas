import React, { useState } from 'react';
import Section from '../components/Section';
import { MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;

        const whatsappMessage = `Hola, mi nombre es ${name}.
Correo: ${email}
Teléfono: ${phone}
Mensaje: ${message}`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=573023644236&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <Section>
            <SEO
                title="Contacto"
                description="Contáctanos para una asesoría gratuita. Instalación de persianas en Pereira, Dosquebradas, Santa Rosa. ¡Hablemos por Whatsapp!"
            />
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
                <p className="text-lg text-neutral-600">
                    Ya sea para tu hogar o empresa, estamos listos para asesorarte. <br />
                    <span className="font-semibold text-primary">¡Vamos a tu domicilio!</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
                <div className="space-y-6 text-left">
                    <h2 className="text-2xl font-bold text-neutral-800">Información de Contacto</h2>
                    <p className="text-neutral-500">Síguenos en nuestras redes o escríbenos directamente.</p>

                    <div className="space-y-4">
                        {/* Placeholders for actual contact details */}
                        <div className="p-4 bg-neutral-50 rounded-lg">
                            <p className="font-bold text-neutral-900">Atención a Clientes</p>
                            <p className="text-neutral-600">+57 314 795 8057</p>
                            <p className="text-neutral-600">+57 302 364 4236</p>
                        </div>
                        <div className="p-4 bg-neutral-50 rounded-lg">
                            <p className="font-bold text-neutral-900">Correo Electrónico</p>
                            <p className="text-neutral-600">persianas.af@gmail.com</p>
                        </div>

                        <a
                            href="https://api.whatsapp.com/send?phone=573023644236&text=Hola,%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors group cursor-pointer"
                        >
                            <div className="p-2 bg-green-500 text-white rounded-full mr-4 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-bold text-neutral-900">WhatsApp</p>
                                <p className="text-sm text-green-700 font-medium">Chat directo con un asesor</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="bg-neutral-50 p-6 rounded-xl">
                    <h3 className="font-bold text-lg mb-4">Envíanos un mensaje</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nombre Completo"
                            required
                            minLength={3}
                            className="w-full p-3 rounded-md border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Correo Electrónico"
                            required
                            className="w-full p-3 rounded-md border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Teléfono (10 dígitos)"
                            pattern="[0-9]{10}"
                            className="w-full p-3 rounded-md border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="¿En qué podemos ayudarte? (Medidas aproximadas, tipo de persiana...)"
                            rows="4"
                            required
                            minLength={10}
                            className="w-full p-3 rounded-md border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        ></textarea>
                        <button type="submit" className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform active:scale-95 duration-200">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </Section>
    );
};
export default Contact;
