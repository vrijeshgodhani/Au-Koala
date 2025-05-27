/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        color1 : 'rgb(232, 218, 203)',
        color2 : 'rgb(140, 162, 175)',
        color3 : 'rgb(205, 127, 50)',
        color4 : 'rgb(154, 86, 48)',
        color5 : 'rgb(128, 130, 112)',
        color6 : 'rgb(128, 128, 128)',
        color7 : 'rgb(205, 178, 165)',
        color8 : 'rgb(154, 96, 81)',
      }
    },
  },
  plugins: [],
}