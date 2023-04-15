/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "animate":{
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          }
        }
    },
    animation: {
      "slide-in": "slide-in 0.5s ease-out",
      "slide-out": "slide-out 0.5s ease-out",
      "animate": "animate 30s linear infinite"
    },
    fontFamily: {
      heading : ["Orbitron", "sans-serif"],
      secondary: ["Inter", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
}}