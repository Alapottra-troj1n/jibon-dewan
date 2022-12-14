/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
   
    fontFamily: {
      'display': 'Frank Ruhl Libre',
      'type': 'Open Sans',
      'extra': 'Bebas Neue'
    }
  },
  plugins: [],
}
