/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
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
  