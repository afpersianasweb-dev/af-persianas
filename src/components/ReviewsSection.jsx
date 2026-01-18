import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Mallerly Carvajal",
        date: "Hace un mes",
        rating: 5,
        text: "AF PERSIANAS presta un excelente servicio desde el inicio hasta el final. La empresa fue muy responsable y puntual, con una comunicación siempre clara y precisa. El trabajo de instalación de las persianas quedó impecable, de una calidad excepcional. Quedé muy satisfecha con todo el proceso y definitivamente los recomiendo al 100%.",
        initial: "M"
    },
    {
        id: 2,
        name: "Juliana Restrepo",
        date: "Hace 4 meses",
        rating: 5,
        text: "Son super buenos en su trabajo, las Persianas de mi oficina y de mi casa se ven divinas y son muy practicas y de excelente calidad ! Gracias",
        initial: "J"
    },
    {
        id: 3,
        name: "María Patricia Cardona Fernández",
        date: "Hace un mes",
        rating: 5,
        text: "El servicio es completamente ágil. Te hacen sugerencias para mejorar y hacer más acogedores los espacios. Lo recomiendo ampliamente",
        initial: "M"
    },
    {
        id: 4,
        name: "Adriana Polanco",
        date: "Hace un mes",
        rating: 5,
        text: "Los mejores seriedad y responsabilidad los distingue. Bnos precios y muy buena calidad. Me encanta todo lo que me ha hecho en mi casa",
        initial: "A"
    },
    {
        id: 5,
        name: "Yenny Paola Arango Franco",
        date: "Hace un mes",
        rating: 5,
        text: "AF Persianas demuestra un excelente nivel de profesionalismo y calidad en cada etapa del servicio, su atención al cliente es destacada y es sin duda un proveedor altamente recomendable.☺️",
        initial: "Y"
    },
    {
        id: 6,
        name: "Ana Maria Alvarado",
        date: "Hace 3 meses",
        rating: 5,
        text: "Me encantó como todos los lugares de mi casa quedaron como los quería, son súper limpios en si trabajo y puntuales.",
        initial: "A"
    },
    {
        id: 7,
        name: "Daniela Orozco",
        date: "Hace 4 meses",
        rating: 5,
        text: "Excelente servicio, muy rápidos, cumplidos y con las características solicitadas, me encantó",
        initial: "D"
    },
    {
        id: 8,
        name: "Juan David Arias Morales",
        date: "Hace 4 meses",
        rating: 5,
        text: "Excelente calidad y servicio. Muy profesionales y cumplidos.",
        initial: "J"
    },
    {
        id: 9,
        name: "katherine ustariz",
        date: "Hace un mes",
        rating: 5,
        text: "El servicio es eficiente, las persianas son lindas y de buena calidad, súper recomendado .",
        initial: "K"
    },
    {
        id: 10,
        name: "Carolina Valencia",
        date: "Hace un mes",
        rating: 5,
        text: "Felices con nuestras persianas, la casa se ve súper iluminada y muy elegante",
        initial: "C"
    },
    {
        id: 11,
        name: "jorge humberto gallo quintero",
        date: "Hace un mes",
        rating: 5,
        text: "Excelente servicio y cumplimiento, mi persiana cumple con lo que necesitaba. Mil gracias por su bien servicio.",
        initial: "J"
    },
    {
        id: 12,
        name: "RUBEN SMITH ORTIZ ZAMBRANO",
        date: "Hace un mes",
        rating: 5,
        text: "Super puntuales, excelente trabajo y de precio justo muy recomendados.",
        initial: "R"
    },
    {
        id: 13,
        name: "Felipe Olivares Galviz",
        date: "Hace un mes",
        rating: 5,
        text: "Excelente servicio, toda mis instalaciones las hago con ellos por su buena calidad y cumplimiento, muy recomendados",
        initial: "F"
    },
    {
        id: 14,
        name: "Diana Montoya",
        date: "Hace 3 meses",
        rating: 5,
        text: "10 de 10, excelente cumplimiento, calidad, atención y precio justo 👌🏽",
        initial: "D"
    },
    {
        id: 15,
        name: "Maria Isabel Suarez Betancourt",
        date: "Hace un mes",
        rating: 5,
        text: "Excelentes productos y servicio, muy recomendados dejan tus espacios muy lindos",
        initial: "M"
    }
];

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const ReviewsSection = () => {
    // Basic auto-scroll carousel logic
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextReview = () => setIndex((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    // Visible reviews (show 1 on mobile, 3 on desktop)
    // For simplicity in this logical component, we'll map a window of 3 reviews wrapping around
    const getVisibleReviews = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            items.push(reviews[(index + i) % reviews.length]);
        }
        return items;
    };

    return (
        <Section className="bg-white overflow-hidden">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <GoogleIcon />
                    <span className="font-bold text-neutral-600">Google Reviews</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
                <div className="flex justify-center items-center gap-1">
                    <span className="font-bold text-2xl">5.0</span>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <span className="text-neutral-500 text-sm ml-2">(33 opiniones)</span>
                </div>
                <a
                    href="https://www.google.com/search?q=af+persianas+santa+rosa+de+cabal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                    Ver todas las opiniones en Google
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>

            <div className="relative max-w-6xl mx-auto px-8">
                {/* Arrows */}
                <button onClick={prevReview} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-neutral-50 text-neutral-600 transition-colors hidden md:block">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextReview} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md hover:bg-neutral-50 text-neutral-600 transition-colors hidden md:block">
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {getVisibleReviews().map((review, idx) => (
                            <motion.div
                                key={`${review.id}-${index}`} // Key changes to force animation on shift
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                                        {review.initial}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-neutral-900 text-sm">{review.name}</h4>
                                        <p className="text-neutral-500 text-xs">{review.date}</p>
                                    </div>
                                    <GoogleIcon />
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                                    "{review.text}"
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Mobile indicators */}
                <div className="flex justify-center gap-2 mt-8 md:hidden">
                    {reviews.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === index ? 'bg-primary' : 'bg-neutral-300'}`}
                            aria-label={`Ir a la reseña ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ReviewsSection;
