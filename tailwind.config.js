/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B1E3B',
        accent: '#FE9A01',
        default: '#fff',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
