const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: '1rem',
            }
        },
        screens: {
            'xs': '428px',
            ...defaultTheme.screens,
        },
    },
    plugins: [],
};
