/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with 'class' strategy
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#06223F",
        bg_light_primary: "#F5F9FD",
        gray: "#B7C5D3",
        dark_bg: "#0A192F", // New dark mode background
        dark_gray: "#8892B0", // Dark mode gray color
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)",
        darkPrimaryLinear: "linear-gradient(180deg, #1C3A63 0.48%, #102A44 100%)", // Dark mode gradient
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(223, 229, 236, 0.9)",
        dark: "-5px 35px 40px rgba(0, 0, 0, 0.7)", // Dark mode shadow
      },
    },
  },
  plugins: [],
};
