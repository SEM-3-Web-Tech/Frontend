/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary:"#09001e",
      secondary:"#000383",
      tertiary:"#0e38ae",
      queternary:"#7751a8 ",
      light:"#ffd1ee",
      orange:"#ff6600",
      grey:"#808080",
      white:"#fafafa",
      black:"#000",
      red:"#f00",
    },
    
    extend: {
      backgroundImage:{
        news:"url('finance.jpg')"
      },
      right:{
        '3/25':"25%"
      }
    },
  },
  plugins: [],
}