/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "4rem", // px-16 = 4rem (1rem = 16px)
      },
    },

    extend: {
      colors: {
        prLavender: "#7456FF",
        srLavender: "#8368FF",
        trLavender: "#A693FF",
        qtLavender: "#C5B9FF",
        qnLavender: "#E0DAFF",
        prBlack: "#0C0C0C",
        srBlack: "#0F0F0F",
        trBlack: "#131313",
        cvHover: "#F0ABFC",
        reFuchsia: "#8a2be2"


      },

      backgroundImage: {
        bgGradient: "linear-gradient(to bottom, #0C0C0C, #060021)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
