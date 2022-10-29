const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            /*            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },*/
            colors: {
                'light-100': '#C0E8FF',
                'light-50': '#DCF2FF',
                'light-blue': '#2932F5',
                'dark-purple': '#260273',
                'dark-blue': '#013075',
                'sp-black': '#011526',
                'dark-yellow': '#F5F001',
                'light-beige': '#F6F6EB',
                'bg-dark': '#262626',
                'bg-light': '#3D3D3D',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
