const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
  plugins: [],
}

// rgb(30,30,40)
