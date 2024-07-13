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
        'card': '0 4px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1), 0 -3px 6px rgba(0, 0, 0, 0.05)',
        'darkcard' : '0 4px 10px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.2), 0 -3px 6px rgba(0, 0, 0, 0.1)',
        'toggle': '-5px -5px -5px rgba(253, 230, 138, 1)',
        'main-2': '0 4px 10px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1), 0 -3px 6px rgba(0, 0, 0, 0.05)',
      },
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '375px',
      // => @media (min-width: 768px) { ... }

      'lg': '425px',
      // => @media (min-width: 1024px) { ... }

      'xl': '768px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1024px',
      // => @media (min-width: 1536px) { ... }
      '3xl' : '1440px',
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-dark-mode")(),
  ],
};
