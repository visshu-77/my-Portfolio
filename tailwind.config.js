const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        heading: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'typing': 'typing 4s steps(30) 1s 1 normal both, blink 0.75s step-end infinite', // Typing animation + cursor blink
      },
      keyframes: {
        typing: {
          'from': { width: '0%' },
          'to': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },

  plugins: [],
};
