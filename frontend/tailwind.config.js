/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lexend', 'sans-serif'],
      },
      colors: {
        'theme-dark': '#171A1A',
        'theme-light': '#F3F7FF',
        'nav-light': '#D8F0FA',
        'nav-dark': '#0C2D48'
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: []
};
