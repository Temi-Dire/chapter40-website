/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "450px",
      "2sm": "530px",
      md: "600px",
      lg: "768px",
      "2lg": " 900px",
      xl: "1024px",
      "2xl": "1200px",
      "3xl": "1280px",
      "4xl": "1440px",
      "5xl": "2300px",
    },
    extend: {
      colors: {
        black: "#242424",
        "white-300": "#f9f9f9",
        "black-500": "hsla(0, 0%, 14%, 0.6)",
        borderDark: "#CAC6DA",
        darkPrimary: "#36254B",
        lightPrimary: "#634d93",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      playfair: ["Playfair Display", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
      josefin: ["Josefin Sans", "sans-serif"],
      baskerville: ["Baskerville", "sans-serif"],
    },
    boxShadow: {
      xl: "3px 1px 7.1px 5px rgba(152, 66, 136, 0.11)",
    },
  },
  plugins: [],
};
