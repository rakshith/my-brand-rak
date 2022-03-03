const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      'brand-gray': '#2C2C38',
      'brand-dark-gray': '#1E1E28',
      'brand-text-yellow': '#FBCC13',
      'brand-text-gray': '#8C8C8E',
    },
    extend: {
      screens: {
        ...defaultTheme.screens,
      },
      backgroundImage: {
        'cover-pic':
          "linear-gradient(to top, rgba(25,25,35, 1), rgba(30,30,40, 0.9)), url('https://peakvisor.com/img/news/Turkey-Mount-Ararat.jpg')",
        'cover-pic-over':
          "linear-gradient(to top, rgba(30,30,40, 0.9), rgba(95,96,103, 0.9)), url('https://peakvisor.com/img/news/Turkey-Mount-Ararat.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

// rgb(30,30,40)
