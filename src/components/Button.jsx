import React from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

const Button = ({
    children,
    variant = 'primary',
    to,
    className,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "border-transparent text-white bg-primary hover:bg-primary-dark focus:ring-primary shadow-lg shadow-primary/30",
        secondary: "border-transparent text-white bg-secondary hover:bg-secondary-dark focus:ring-secondary shadow-lg shadow-secondary/30",
        outline: "border-primary text-primary bg-transparent hover:bg-primary/5 focus:ring-primary",
        white: "border-transparent text-primary bg-white hover:bg-neutral-100 focus:ring-white shadow-lg",
    };

    const classes = twMerge(clsx(baseStyles, variants[variant], className));

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'white']),
    to: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
