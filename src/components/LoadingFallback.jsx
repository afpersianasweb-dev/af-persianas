import React from 'react';

const LoadingFallback = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-50">
            <div className="flex flex-col items-center space-y-4">
                <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="text-neutral-500 font-medium animate-pulse">Cargando...</p>
            </div>
        </div>
    );
};

export default LoadingFallback;
