import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Section = ({ children, className, id, fullWidth = false }) => {
    return (
        <section id={id} className={twMerge(clsx("py-16 md:py-24 relative overflow-hidden", className))}>
            <div className={clsx("mx-auto px-4 sm:px-6 lg:px-8", fullWidth ? "w-full" : "max-w-7xl")}>
                {children}
            </div>
        </section>
    );
};

export default Section;
