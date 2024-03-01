/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archangels: ['Archangelsk', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        blue: '#52bedc'
      }
    },
  },
  plugins: [],
}

