
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily:{
      Koho:["Koho","sans-serif"],
      Inter:["Inter","sans-serif"],
      Poppins:["Poppins","sans-serif"]
     },
     backgroundImage: {
      'group1': "url('../public/images/Group (2).png')",
      'ellipse': "url('../public/images/Ellipse 24 (1).png')",
      'texture': "url('../public/images/texture.png')",
    },
    },
  },
  plugins: [],  
}