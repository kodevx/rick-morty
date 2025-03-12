/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          grobold: ['Grobold','sans-serif'],
          bluetea: ['Bluetea','sans-serif'],
          arnorg: ['Arnorg','serif'],
          badaga: ['Badaga','sans-serif'],
          goldieBoxing: ['GoldieBoxing'],
          hfcomic: ['HFComic'],
        },
      },
    },
    plugins: [],
  }
  