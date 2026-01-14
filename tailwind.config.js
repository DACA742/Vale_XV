/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        script: ['Great Vibes', 'cursive'],
      },
      colors: {
        onyx: '#C0862F',
        'eerie-black': '#212121',
        jet: '#C0862F',
        'dim-gray': '#6B6B6B',
        'antiflash-white': '#ECECEC',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #C0862F 0%, #A86E22 25%, #704C18 50%, #3A2A12 75%, #1A1A1A 100%)',
      },

    },
  },
  plugins: [],
};