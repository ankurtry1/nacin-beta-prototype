/** @type {import('tailwindcss').Config} */
const palettes = {
  classic: {
    50: '#f3f7ff',
    100: '#e8f0ff',
    200: '#cfe1ff',
    300: '#a9c7ff',
    400: '#76a4ff',
    500: '#4d7dff',
    600: '#2f5cf0',
    700: '#2448c2',
    800: '#1f3e9b',
    900: '#1d357d',
    950: '#121f47'
  },
  premium: {
    50: '#fff6f4',
    100: '#fde9e4',
    200: '#f7cfc3',
    300: '#eeaa98',
    400: '#e17b6f',
    500: '#c25754',
    600: '#9f3e45',
    700: '#7a2c34',
    800: '#5b2028',
    900: '#3b1419',
    950: '#220a0d'
  }
}
const activePalette = 'premium'

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nacin: palettes[activePalette]
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.08)'
      }
    }
  },
  plugins: []
}
