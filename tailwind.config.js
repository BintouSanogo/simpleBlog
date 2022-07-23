/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      }
    },
  },
  plugins: [],
}
