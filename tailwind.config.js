/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Drop shadows personalizados
      dropShadow: {
        col: "0 2px 4px #ffffff55",
      },
      keyframes: {
        fillWidth: {
          "0%": { width: "0%", transform: "translateX(0)" },
          "100%": { width: "100%", transform: "translateX(0)" },
        },
      },
      animation: {
        fill: "fillWidth 0.3s ease-in forwards",
      },
    },
  },
  plugins: [],
};
