const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {

  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Quicksand'", ...defaultTheme.fontFamily.sans,],
        'serifpro': "'Source Serif Pro', serif"
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
     'honey': '#ffbc40',
     'olive': '#526f12',
     'licorice': '#1d1d1d',
     'maize': '#fbdc59',
     'pumpkin': '#ff8200',
     'truffles': '#d62c34',
     'mackerel': '#505050',
     'hubbard': '#d8d8d8',
     'oyster': '#EFEFEF',
     'rice': '#ffffff'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
