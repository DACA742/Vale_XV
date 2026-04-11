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
        onyx: '#E6A6A1',
        'eerie-black': '#212121',
        jet: '#E6A6A1',
        'dim-gray': '#6B6B6B',
        'antiflash-white': '#F8F9F1',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(135deg, #E6A6A1 50%, #F8F9F1 100%)',
      },

    },
  },
  plugins: [],
};