/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        light: '#F2F1EB',
        cream: '#EEE7DA',
        green_primary: '#5F6F52',
        green_secondary: '#A9B388',
        brown_primary: '#B99470'
      }
    },
  },
  plugins: [],
}

