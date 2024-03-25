/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        "2xl": "1519px",
        "vsm": "540px",
      },
      container:{
        center: true,
      },
      fontFamily:{
        vazir : "vazir"
      },
      colors:{
        snappGreen:"#21aa58",
        snappBlack:"#404040",
        snappGray:"#f2f5f8",
        snappWhite:"#a3a3a3"
      },
      //backgroundImage:{
        //'snappGuy':"url('Assets/imgs/Pictures/mainTopImg.jpg')",
        //'superApp':"url('Assets/imgs/Pictures/superapp.jpg')",
      //},
    },
  },
  plugins: [],
}

