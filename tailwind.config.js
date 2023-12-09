/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#242424",
        borderDark: "#CAC6DA",
        darkPrimary: "#36254B",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      playfair: ["Playfair Display", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
