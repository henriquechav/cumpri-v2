/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Nunito", "sans-serif"],
    },
    extend: {
      colors: {
        "primary": "#548c2f",
      },
    },
  },
  plugins: [],
}

