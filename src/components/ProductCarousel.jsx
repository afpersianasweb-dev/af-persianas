import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = ({ images, productName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    if (!images || images.length === 0) return null;

    const nextSlide = () => {
        setIsLoaded(false); // Reset for new image
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIsLoaded(false); // Reset for new image
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-neutral-100">
            {/* Skeleton Placeholder — visible while image loads */}
            {!isLoaded && (
                <div className="absolute inset-0 z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-neutral-300/50 flex items-center justify-center">
                            <svg
                                className="w-7 h-7 text-neutral-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            )}

            {/* Image with framer-motion transitions */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${productName} - Vista ${currentIndex + 1}`}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-110 cursor-zoom-in"
                    onLoad={() => setIsLoaded(true)}
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80';
                        setIsLoaded(true);
                    }}
                />
            </AnimatePresence>

            {/* Navigation Arrows — Always visible */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 backdrop-blur-md text-neutral-900 p-3 rounded-full shadow-lg transition-all z-20 flex items-center justify-center border border-white/20"
                        aria-label="Imagen anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white/80 backdrop-blur-md text-neutral-900 p-3 rounded-full shadow-lg transition-all z-20 flex items-center justify-center border border-white/20"
                        aria-label="Siguiente imagen"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setIsLoaded(false);
                                    setCurrentIndex(idx);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
                                aria-label={`Ir a imagen ${idx + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductCarousel;
