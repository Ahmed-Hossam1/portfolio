/** @type {import('tailwindcss').Config} */
export default {
  darkMode : "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'instrument': ['Instrument Serif', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors : {
        mainColor : "#ff4533",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

