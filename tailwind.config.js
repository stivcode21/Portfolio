/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //dropshadow
      dropShadow: {
        col: "0 2px 4px #ffffff55",
      },
      //font family
      fontFamily: {
        sour: ["M PLUS Code Latin", "monospace"],
        logo: ["Rampart One", "sans-serif"],
      },
      //animaciones - 1
      animation: {
        tada: "tada 2s ease-in-out",
        sink: "sink 1s ease-in-out infinite",
        "rotational-wave": "rotational-wave 2s ease-in-out infinite",
      },
      keyframes: {
        tada: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.9) rotate(-3deg)" },
          "20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%": { transform: "scale(1.1) rotate(3deg)" },
          "40%": { transform: "scale(1.1) rotate(-3deg)" },
          "50%": { transform: "scale(1.1) rotate(3deg)" },
          "60%": { transform: "scale(1.1) rotate(-3deg)" },
          "70%": { transform: "scale(1.1) rotate(3deg)" },
          "80%": { transform: "scale(1.1) rotate(-3deg)" },
          "90%": { transform: "scale(1.1) rotate(3deg)" },
          "100%": { transform: "scale(1) rotate(0)" },
        },
        sink: {
          "0%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-5px)" },
        },
        "rotational-wave": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
