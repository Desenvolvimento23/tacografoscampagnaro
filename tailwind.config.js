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
                    DEFAULT: '#003366', // Azul Institucional
                    hover: '#00509e',
                },
                secondary: '#00509e',
                accent: {
                    DEFAULT: '#25d366', // Verde WhatsApp
                    hover: '#128c7e',
                },
                surface: '#f4f7f6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
