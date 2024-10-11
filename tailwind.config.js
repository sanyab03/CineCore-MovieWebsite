/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
      Gilroy: ["Roboto", "Arial", "Helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        'custom-dark-green': '#22572F', // You can adjust this hex value for even darker
      },
      screens: {
        xs: "281px",
      },
    },
  },
  plugins: [],
};
