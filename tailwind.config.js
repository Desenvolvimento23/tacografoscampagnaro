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
                    DEFAULT: '#C62828', // Vermelho Campagnaro
                    hover: '#A42020',
                },
                secondary: '#413F3F',
                accent: {
                    DEFAULT: '#25d366', // Verde WhatsApp
                    hover: '#1ebe5d',
                },
                surface: '#ffffff',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
