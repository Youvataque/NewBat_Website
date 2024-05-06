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
        'Secondary' : "#113264",
        'App1' : '#256EB4',
        'App2' : '#F29235',
        'App3' : '#52C848'
      },
      height: {
        '54' : '216px',
        '100' : '400px',
        '110' : '450px',
        '130' : '510px',
        '150' : '600px',
        '160' : '650px',
        '180' : '731px',
        '190' : '800px',
        '200' : '900px',
        '210' : '1000px',
        '220' : '1100px',
        '250' : '1300px'
      },
      width: {
        '85': '350px',
        '110' : '450px',
        '130' : '510px',
        '150' : '600px',
        '180' : '700px',
        '200' : '900px',
        '210' : '1000px',
        '220' : '1100px',
        '250' : '1300px'
      },
      screens: {
        '2xl': '2000px'
      },
      borderRadius : {
        '4xl' : '43px'
      },
      fontSize : {
        '4xl' : '45px'
      }
    },
  },
  plugins: [],
}
