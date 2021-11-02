console.log(process.env.NODE_ENV)

const purge = process.env.NODE_ENV === 'development' ? false : true

module.exports = {
  purge: { enabled: purge, content: ['./public/*.html'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
