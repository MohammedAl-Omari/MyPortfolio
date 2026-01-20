/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <--- Make sure this exactly is here!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}