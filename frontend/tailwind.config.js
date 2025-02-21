/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ["almarai", ...defaultTheme.fontFamily.sans]
      }
    },

  },
  plugins: [],
}

module.exports = {
  darkMode: 'class', // Enables dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

