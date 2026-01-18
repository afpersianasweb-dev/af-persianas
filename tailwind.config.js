/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#0E4A4A',
                    DEFAULT: '#0C5555',
                    dark: '#083E3E',
                },
                secondary: {
                    light: '#D4B87F',
                    DEFAULT: '#C9A86A',
                    dark: '#B09055',
                },
                neutral: {
                    50: '#F9FAFB',
                    100: '#F5F5F5',
                    200: '#E9E9E9',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#222222',
                    900: '#111827',
                }
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url('/hero-bg.jpg')", // Placeholder
            }
        },
    },
    plugins: [],
}
