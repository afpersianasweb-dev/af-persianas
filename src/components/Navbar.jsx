import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Catálogo', path: '/catalogo' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Proyectos', path: '/proyectos' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <nav
            aria-label="Navegación principal"
            className={clsx(
                "fixed w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center group" aria-label="AF Persianas Inicio">
                        {/* 
                Logo Container:
                - Mobile: h-10 (smaller)
                - Desktop: h-12 (standard)
                - Aspect Ratio: managed by img containment
             */}
                        <div className="relative h-10 md:h-12 w-auto flex items-center justify-start">
                            <img
                                src="/logo-update.png"
                                alt="AF Persianas Logo"
                                className={clsx(
                                    "h-full w-auto object-contain transition-all duration-300",
                                    scrolled ? "mix-blend-multiply" : "brightness-0 invert mix-blend-screen"
                                )}
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={clsx(
                                    "text-sm font-medium transition-colors hover:text-secondary",
                                    location.pathname === link.path ? "text-secondary" : (scrolled ? "text-neutral-700" : "text-white")
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-label="Abrir menú de navegación"
                            className={clsx(
                                "hover:text-primary focus:outline-none",
                                scrolled ? "text-neutral-700" : "text-white"
                            )}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={clsx(
                                "text-base font-medium py-2 px-4 rounded-md hover:bg-neutral-50",
                                location.pathname === link.path ? "text-secondary bg-neutral-50" : "text-neutral-700"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="secondary" className="w-full justify-center" to="/contacto">
                        Cotizar Ahora
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
