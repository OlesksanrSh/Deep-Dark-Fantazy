/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
      mainColor: '#050C2A'
      },
      padding:{
        big: '50px'
      },
      screens:{
        sm: '480px',
        md: '780px',
        lg: '1028px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}
