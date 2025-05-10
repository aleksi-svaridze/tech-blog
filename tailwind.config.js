/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          '900': '#232536',
          '500': '#31323C',
          '400': '#2b2c34'
        },
        'red': '#FF5959',
        'gray': {
          '900': '#4c4c4c',
          '800': '#6D6E76',
          '700': '#F4F0F8',
        }
      },
    },
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'inter': ["Inter", "sans-serif"],
      'sen': ["Sen", "sans-serif"],
      'jakarta': ["Plus Jakarta Sans", "sans-serif"],
    }
  },
  plugins: [],
}