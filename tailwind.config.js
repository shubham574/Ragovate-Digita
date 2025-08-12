/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        'moon-800': '#232946',
        'moon-700': '#2a2d43',
           'moon-600': '#353866',
           'moon-400': '#7c90a0',
        'moonBlue-600': '#3e5c76',
        'moonBlue-500': '#4f6d7a',
        'moonBlue-400': '#7c90a0',
        'sun-500': '#ffb300',
        'sunOrange-500': '#ff6f00',
        'sun-50': '#fff8e1',
        'sun-400': '#ffd54f',
        // Add any other custom colors you use
        'lightText': '#f4f4f4',
      },
      // If you use gradients like bg-sun-gradient, define them in the plugins or as utilities
    },
  },
  plugins: [],
}