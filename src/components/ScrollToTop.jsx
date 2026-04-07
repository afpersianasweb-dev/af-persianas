import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * ScrollToTop — Intelligent Scroll Restoration
 * 
 * - PUSH navigation (user clicks a link): scroll to top ✅
 * - POP navigation (user presses Back/Forward): do nothing, let browser restore position ✅
 * - REPLACE navigation: scroll to top ✅
 */
const ScrollToTop = () => {
    const { pathname, key } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        // Desactivar la restauración nativa del navegador que suele fallar en SPAs y lanzar al footer
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Restaurar posición si volvemos atrás, sino ir arriba
        if (navigationType === 'POP') {
            const savedPosition = sessionStorage.getItem(`scroll-${key}`);
            if (savedPosition !== null) {
                // Pequeño delay para dejar que React monte el DOM primero
                setTimeout(() => {
                    window.scrollTo({ top: parseInt(savedPosition, 10), behavior: 'instant' });
                }, 50);
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        // Debounce simple para guardar el scroll de la página actual frecuentemente
        let timeoutId = null;
        const handleScroll = () => {
            if (timeoutId) return;
            timeoutId = setTimeout(() => {
                sessionStorage.setItem(`scroll-${key}`, window.scrollY.toString());
                timeoutId = null;
            }, 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Cleanup: asegurar el último valor antes de desmontar
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
            sessionStorage.setItem(`scroll-${key}`, window.scrollY.toString());
        };
    }, [pathname, key, navigationType]);

    return null;
};

export default ScrollToTop;
