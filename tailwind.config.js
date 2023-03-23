/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: '#4b9cd3'
      },
      keyframes: {
        fromLeft: {
          'from': {left: '-300px', opacity:0},
          'to': {left:0, opacity:1}
        },
        toLeft: {
          'from': {left: '0', opacity:1},
          'to': {left:'-300px', opacity:0}
        },
        animation: {
          fromLeft: 'fromLeft 1s ease-in-out'
        },
      }
    },
  },
  plugins: [],
}