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
        'theme-dark': '#171A1A', // Custom dark background color
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    }
  },
  plugins: []
};
