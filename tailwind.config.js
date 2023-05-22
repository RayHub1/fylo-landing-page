/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      inset: {
        '97': '24.25rem', // add custom value for left utility class
        '98': '24.5rem', // add custom value for left utility class
        '99': '24.75rem', // add custom value for left utility class
        '100': '25rem',
        '101': '25.25rem',
        '102': '25.5rem',
      },
    },
  },
  plugins: [],
}

