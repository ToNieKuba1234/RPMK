/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'darkblue-gradient': 'linear-gradient(68.1deg, rgba(3, 20, 176, 1) 15%, rgba(3, 20, 40, 1) 85%)',
      },
      fontFamily: {
        'fire-sans-condensed': ['Fire Sans Condesned', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'noto-serif': ['Noto Serif', 'serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      backface: {
        hidden: 'backface-visibility: hidden',
      },
    },
  },
  plugins: [],
}

