/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        boxShadow: {
          'box': '0px 0px 12px 1px #b1b1b1'
        }
    },
    screens: {
      'sm': '426px',

      'md': { 'min': '641px' },

      'lg': { 'max': '1200px' },
      
      'xl': { 'min': '1201px' },
    }
  },
  plugins: [],
}

