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
        onyx: '#4A5D4E',
        'eerie-black': '#212121',
        jet: '#4A5D4E',
        'dim-gray': '#6B6B6B',
        'antiflash-white': '#F8F9F1',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #A3B18A 50%, #F8F9F1 100%)',
      },

    },
  },
  plugins: [],
};