/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '1920': '1920px',
      '1800': '1800px',
      '1280': '1280px',
      '1370': '1370px',
      '1080': '1080px',
      '800': '800px',
      '450': '450px',
      'lg': '1024px'


    },
    extend: {
      boxShadow: {
        'square': '-4px 4px 0px 0px #000;',
        'squareIndex': '-6.666666507720947px 6.666666507720947px 0px 0px #000;',
        'circle': '-4px 4px 0px 0px #000;'
      }
    },
    backgroundImage: {
      'custom-bg': "url('/assets/ImagenBlog.jpg')",
    }
  },

  plugins: [],
}

