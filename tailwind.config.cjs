/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
       backgroundImage: {
        'rect': "url('./src/assets/Rectangle 5.png')",
        
      },
      fontFamily: {
        'dmsan': "dmsan"
      }
    },
  },
  plugins: [],
};
