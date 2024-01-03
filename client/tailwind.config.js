/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        light: '#F9F7F7',
        cream: '#e2e7f1',
        blue_primary: '#1a3f69',
        blue_secondary: '#3F72AF',
        blue_secondary_hover: '#325a8a',
        dark_primary: '#454b55',
        dark_primary_hover: '#2c2f36'
      },
    },
  },
  plugins: [],
}

