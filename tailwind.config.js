

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      'blue': '#1875e4',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'red': '#fe6351',
      'gray-dark': '#444444',
      'gray': '#8492a6',
      'gray-light': '#eff1f2',
      'black': '#000000',
      'white': '#fff'
    },
    fontFamily: {
      'SFPro': ['SFPro', 'Arial']
    },

  },
  plugins:
    [
      require("daisyui"),
      require('tailwindcss-animated'),

    ],


}
