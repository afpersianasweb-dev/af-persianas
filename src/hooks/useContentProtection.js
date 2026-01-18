import { useEffect } from 'react';

export const useContentProtection = (enabled = true) => {
    useEffect(() => {
        if (!enabled) return;

        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        const handleDragStart = (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        };

        const handleKeyDown = (e) => {
            // Optional: Block specific shortcuts if needed
            // if (e.ctrlKey && (e.key === 'u' || e.key === 's')) {
            //     e.preventDefault();
            // }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [enabled]);
};
