/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backGround' : "#F4FAFF",
        'Primary' : "#0D74CE",
        'Secondary' : "#113264"
      },
      height: {
        '180' : '731px',
        '190' : '800px',
        '200' : '900px',
        '220' : '1100px',
        '250' : '1300px'
      },
      width: {
        '250' : '1300px'
      }
    },
  },
  plugins: [],
}

