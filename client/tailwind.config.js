/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'square': '-4px 4px 0px 0px #000;',
        'circle': '-4px 4px 0px 0px #000;'
      }
    },
  },

  plugins: [],
}

