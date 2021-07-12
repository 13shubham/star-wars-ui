module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      display: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}