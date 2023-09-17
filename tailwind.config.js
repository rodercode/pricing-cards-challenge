/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",

      md: "900px",

      lg: "950px",

      xl: "1280px",

      "2xl": "1536px",
    },

    extend: {
      colors: {
        // PRIMARY COLORS
        "primary-color-dark": "#3A4046",
        "primary-color-base": "#6D7379",
        "primary-color-light": "#6D7379",

        // SECONDARY COLORS
        "secondary-color-dark": "#C84242",
        "secondary-color-base": "#fa5252",
        "secondary-color-light": "#FB7575",

        // GREY COLORS
        "gray-color-dark": "#3A4046",
        "gray-color-base": "#495057",
        "gray-color-light": "#6D7379",
      },
      borderWidth: {
        1: "1px",
      },
      lineHeight: {
        "xl-relaxed": "1.725",
        "xl-loose": "2.5",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
