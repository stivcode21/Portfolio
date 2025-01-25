/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //themes
      colors: {
        dark: {
          bg: "#0F0F0F",
          primary: "#6812EA",
          text: "#EEEEEE",
          textGray: "#ADB7BE",
        },
        light: {
          bg: "#F8F8F8",
          text: "#000000",
          textGray: "#AAAAAA",
        },
      },

      // Drop shadows personalizados
      dropShadow: {
        col: "0 2px 4px #ffffff55",
      },

      //animation
      keyframes: {
        "0%": {
          transform: "translateY(-100%})",
          opacity: "0",
        },
        "100%": {
          transform: "translateY(0)",
          opacity: "1",
        },
        fillWidth: {
          "0%": { width: "0%", transform: "translateX(0)" },
          "100%": { width: "100%", transform: "translateX(0)" },
        },
      },
      animation: {
        fill: "fillWidth 0.3s ease-in forwards",
        slideDownFadeIn: "slideDownFadeIn 2s ease-out",
      },
      fontFamily: {
        jersey: ['"Jersey 15"', "sans-serif"], // Define un alias para la fuente
      },
    },
  },
  plugins: [],
};
