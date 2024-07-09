/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans - serif"],
      },
      boxShadow:{
        'main': '5px 5px 10px rgba(203, 213, 225, 0.25)',
        'card': '8px 8px 10px rgba(214, 211, 209,1)',
        'darkcard' : '5px 5px 10px rgba(31, 41, 55, 1)',
        'toggle': '-5px -5px -5px rgba(253, 230, 138, 1)'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-dark-mode")(),
  ],
};
