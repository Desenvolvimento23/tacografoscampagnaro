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
                    DEFAULT: '#C02A25', // Vermelho Campagnaro
                    hover: '#99221d',
                },
                secondary: '#000000',
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
