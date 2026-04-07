import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="h-16 w-auto flex items-center justify-start">
                            {/* Footer Logo - Always Inverted for White on Dark Bg */}
                            <img
                                src="/logo-update.png"
                                alt="AF Persianas"
                                width="160"
                                height="64"
                                className="h-full w-auto object-contain brightness-0 invert mix-blend-screen"
                            />
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Transformamos tus espacios con elegancia y funcionalidad. Expertos en venta e instalación de persianas de alta gama.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.facebook.com/persianas.af/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="https://www.instagram.com/persianas.af/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="https://api.whatsapp.com/send?phone=573147958057&text=Hola,%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-secondary transition-colors"><MessageCircle className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6 text-center lg:text-left tracking-wider uppercase text-xs">Colecciones</h4>
                        <ul className="space-y-4 text-sm flex flex-col items-center lg:items-start">
                            <li><Link to="/catalogo/persiana-sheer-elegance" className="hover:text-secondary transition-colors">Sheer Elegance</Link></li>
                            <li><Link to="/catalogo/persiana-enrollable-blackout" className="hover:text-secondary transition-colors">Enrollable Blackout</Link></li>
                            <li><Link to="/catalogo/persiana-panel-japones" className="hover:text-secondary transition-colors">Panel Japonés</Link></li>
                            <li><Link to="/catalogo/persiana-sheer-vertesse" className="hover:text-secondary transition-colors">Sheer Vertesse</Link></li>
                            <li><Link to="/catalogo/cortina-onda-serena" className="hover:text-secondary transition-colors">Onda Serena</Link></li>
                            <li className="pt-2">
                                <Link to="/catalogo" className="text-secondary font-bold hover:text-white transition-colors flex items-center group decoration-secondary/30 underline-offset-4 hover:underline">
                                    Ver Catálogo Completo
                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 mr-3 text-secondary shrink-0" />
                                <span>Santa Rosa de Cabal, Risaralda</span>
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
                        <div className="mt-8 flex flex-col space-y-2 text-xs border-t border-neutral-800/50 pt-6">
                            <h5 className="text-white font-semibold mb-1 uppercase tracking-wider">Legal</h5>
                            <Link to="/privacidad" className="hover:text-secondary transition-colors">Política de Privacidad</Link>
                            <Link to="/garantia" className="hover:text-secondary transition-colors">Garantía de Productos</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800/50 mt-12 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 uppercase tracking-[0.2em] gap-4">
                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} AF Persianas. Todos los derechos reservados.
                    </div>

                    {/* Developer Credit */}
                    <div className="text-center md:text-right opacity-80 hover:opacity-100 transition-opacity normal-case tracking-normal">
                        Desarrollado por <span className="text-secondary font-bold tracking-widest uppercase">ITRAM</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
