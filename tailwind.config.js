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
                    DEFAULT: '#b12324',
                    hover: '#b12324',
                },
                secondary: '#000000',
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
