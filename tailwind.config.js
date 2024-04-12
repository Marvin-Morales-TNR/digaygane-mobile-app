// tailwind.config.js
module.exports = {
    content: [
        './index.{js,jsx,ts,tsx}', 
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        screens: {
            'phone-sm': '320px', // Para teléfonos pequeños (por ejemplo, iPhone SE)
            'phone-md': '375px', // Para teléfonos medianos (por ejemplo, iPhone 6/7/8)
            'phone-lg': '414px', // Para teléfonos grandes (por ejemplo, iPhone 6/7/8 Plus)
            'tablet': '768px', // Para tablets (por ejemplo, iPad)
        },
    },
    plugins: [],
};