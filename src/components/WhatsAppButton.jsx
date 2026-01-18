import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = "573147958057";
    const message = encodeURIComponent("Hola, estoy interesado en sus servicios.");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Chat en WhatsApp"
        >
            <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping group-hover:opacity-100"></span>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg text-white hover:bg-green-600 transition-colors"
            >
                <MessageCircle className="w-8 h-8" />
            </motion.div>

            {/* Tooltip */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-neutral-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                ¡Chatea con nosotros!
            </span>
        </a>
    );
};

export default WhatsAppButton;
