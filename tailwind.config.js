/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/renderer/**/*.{js,jsx,ts,tsx}",
    "./src/preload/**/*.{js,jsx,ts,tsx}",
    "./src/main/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        primary: "#2A8C82",
        secondary: "#41BFB3",
        textPrimary: "#000000",
      },
    },
  },
  plugins: [require("daisyui")],
}
