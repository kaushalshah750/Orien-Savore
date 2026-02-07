/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            colors: {
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F4C430',
                    dark: '#AA8C2C',
                },
                charcoal: {
                    DEFAULT: '#121212',
                    light: '#1E1E1E',
                    lighter: '#2C2C2C',
                },
            },
            keyframes: {
                fadeInSlow: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                fadeInSlow: 'fadeInSlow 2s ease-out forwards',
            },
        },
    },
    plugins: [],
}
