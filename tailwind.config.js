const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Signika', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}
