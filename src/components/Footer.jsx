import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="h-16 w-auto flex items-center justify-start">
                            {/* Footer Logo - Always Inverted for White on Dark Bg */}
                            <img
                                src="/logo-update.png"
                                alt="AF Persianas"
                                className="h-full w-auto object-contain brightness-0 invert mix-blend-screen"
                            />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Transformamos tus espacios con elegancia y funcionalidad. Expertos en venta e instalación de persianas de alta gama.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.facebook.com/persianas.af/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="https://www.instagram.com/persianas.af/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="https://api.whatsapp.com/send?phone=573147958057&text=Hola,%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><MessageCircle className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Navegación</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/catalogo" className="hover:text-white transition-colors">Catálogo</Link></li>
                            <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                            <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Catalog */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-4 text-center lg:text-left">Nuestros Productos</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
                            <Link to="/catalogo/cortina-onda-serena" className="hover:text-white transition-colors">Onda Serena</Link>
                            <Link to="/catalogo/persiana-aluminio" className="hover:text-white transition-colors">Aluminio</Link>
                            <Link to="/catalogo/persiana-enrollable-blackout" className="hover:text-white transition-colors">Enrollable Blackout</Link>
                            <Link to="/catalogo/persiana-enrollable-screen" className="hover:text-white transition-colors">Enrollable Screen</Link>
                            <Link to="/catalogo/persiana-panel-japones" className="hover:text-white transition-colors">Panel Japonés</Link>
                            <Link to="/catalogo/persiana-sheer-elegance" className="hover:text-white transition-colors">Sheer Elegance</Link>
                            <Link to="/catalogo/persiana-sheer-vertesse" className="hover:text-white transition-colors">Sheer Vertesse</Link>
                            <Link to="/catalogo/persiana-vertical" className="hover:text-white transition-colors">Vertical</Link>
                            <Link to="/catalogo/persiana-viewtex" className="hover:text-white transition-colors">Viewtex</Link>
                            <Link to="/catalogo/telas-string" className="hover:text-white transition-colors">Telas String</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                <span>Servicio en Santa Rosa de Cabal, Pereira, Dosquebradas y zonas rurales.</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                <div className="flex flex-col">
                                    <span>+57 314 795 8057</span>
                                    <span>+57 302 364 4236</span>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                <span>persianas.af@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <p>&copy; {new Date().getFullYear()} AF Persianas. Todos los derechos reservados.</p>
                        <span className="hidden md:inline text-neutral-600">|</span>
                        <p className="text-neutral-500">
                            Desarrollado por <span className="text-secondary font-semibold hover:text-white transition-colors cursor-pointer">Itram</span>
                        </p>
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
                        <Link to="/garantia" className="hover:text-white transition-colors">Garantía</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
