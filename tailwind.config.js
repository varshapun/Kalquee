/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
function withOpacityValue(cssVariable) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVariable}), ${opacityValue})`
    }

    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVariable}), var(${opacityVariable}, 1))`
    }

    return `rgb(var(${cssVariable}))`
  }
}
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],

  theme: {
    extend: {
      maxWidth: {
        '8xl': '85rem',
      },

      order: {
        first: '-9999',
        last: '9999',
        normal: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },

      fontFamily: {
        'playfair-display': ['Play fair Display'],
        'open-sans': ['OpenSans'],
      },

      colors: {
        cyan: colors.cyan,
        lightblue: colors.sky,

        primary: {
          50: '#b4e4ed',
          100: '#86dff0',
          200: '#66c6d9',
          300: '#318c9e',
          400: '#2adcfa',
          500: '#5DACBD',
          600: '#0c6c7d',
          700: '#0e788a',
          800: '#094954',
          900: '#0c6778',
          950: '#05424d',
        },
        black: '#040405',
        purple: '#EFF1FD',
      },

      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        72: '18rem',
        80: '20rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
