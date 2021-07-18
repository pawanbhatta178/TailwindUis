module.exports = {
  purge: [ './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx,vue}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#232735", //nav color jobseeker
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
