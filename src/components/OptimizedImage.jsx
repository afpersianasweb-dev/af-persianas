import React, { useState, useCallback } from 'react';

/**
 * OptimizedImage — Performance-first image component
 * 
 * Features:
 * - Native lazy loading (loading="lazy")
 * - Async decoding (decoding="async") 
 * - Animated skeleton placeholder (blur-up effect)
 * - Prevents CLS by reserving space via aspect-ratio container
 * - Graceful error fallback
 */
const OptimizedImage = ({
    src,
    alt,
    className = '',
    containerClassName = '',
    aspectRatio = '4/3',
    fallbackSrc = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80',
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback((e) => {
        if (!hasError) {
            setHasError(true);
            e.target.src = fallbackSrc;
        }
    }, [hasError, fallbackSrc]);

    return (
        <div
            className={`relative overflow-hidden bg-neutral-100 ${containerClassName}`}
            style={{ aspectRatio }}
        >
            {/* Skeleton Placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 z-10">
                    {/* Animated gradient shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 animate-pulse" />
                    {/* Subtle icon hint */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-neutral-200/60 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-neutral-300"
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

            {/* Actual Image */}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
                className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                } ${className}`}
                {...props}
            />
        </div>
    );
};

export default OptimizedImage;
