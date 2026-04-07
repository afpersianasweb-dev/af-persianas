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
    const { pathname } = useLocation();
    const navigationType = useNavigationType();

    useEffect(() => {
        // Only scroll to top on forward navigation (PUSH/REPLACE)
        // On POP (browser back/forward), let the browser handle scroll restoration
        if (navigationType !== 'POP') {
            window.scrollTo(0, 0);
        }
    }, [pathname, navigationType]);

    return null;
};

export default ScrollToTop;
