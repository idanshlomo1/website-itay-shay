/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: 'white',
        secondaryColor: '#5c6372',

        shineColor1: '#40a7f6',
        shineColor2: "#63CEFF",
        shineColor3: "#7f8dfc",

        bgColor: 'black',
        bgPath: '#222627',

        bgColor1: "#161c23"

      },
    },
  },
  plugins: [],
}
