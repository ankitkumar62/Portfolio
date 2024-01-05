/** @type {import('tailwindcss').Config} */
const scrollbarPlugin = require('tailwind-scrollbar');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,cjs,mjs}",
  ],
  theme: {
    container: {
      centerpadding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        abc:'rgb(11,13,30)',
        aa:'rgb(15,23,39)',
        tebg:'-webkit-linear-gradient(#eee, #333)',
        'wild-blue-yonder': 'hsla(216, 33%, 68%, 1)',
        'carolina-blue': 'hsla(199, 89%, 49%, 1)',
        'prussian-blue': 'hsla(216, 33%, 20%, 1)',
        'oxford-blue': 'hsla(222, 44%, 13%, 1)',
        'oxford-blue-2': 'hsla(222, 47%, 11%, 1)',
        ' --text-white': ' hsla(0, 0%, 100%, 1)',
        '--text-alice-blue': 'hsla(216, 100%, 95%, 1)',
        ' --text-columbia-blue': ' hsla(199, 69%, 84%, 1,',
        ' --text-wild-blue-yonder': 'hsla(216, 33%, 68%, 1)',
        ' --text-carolina-blue': ' hsla(199, 89%, 49%, 1)',
        ' --text-shadow-blue': 'hsla(217, 24%, 59%, 1)',
        ' --text-slate-gray': 'hsla(217, 17%, 48%, 1)',
       
      },
      backgroundImage: {
        explosion: 'url("/src/pp/bbg.jpg")',
        circles: 'url("/src/pp/bg-circles.png")',
        bcd:'url("https://e1.pxfuel.com/desktop-wallpaper/835/390/desktop-wallpaper-black-gradient-dark-blue-gradient-background.jpg")',
        circleStar: 'url("/src/pp/circle-star.svg")',
        site: 'url("/src/pp/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        typing: "typing 1.8s steps(20) infinite alternate, blink .7s infinite",
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s steps(20) infinite alternate',
        'type-reverse': 'type 3s steps(20) infinite alternate',

      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%': { width: '10ch' },
        },
      },

    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [scrollbarPlugin],
};

