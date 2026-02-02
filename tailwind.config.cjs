/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nacin: {
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
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.08)'
      }
    }
  },
  plugins: []
}
