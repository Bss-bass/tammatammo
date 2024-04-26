/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
   

  theme: {
    extend: {
      fontFamily : {
        koho : [
          "KoHo", "sans-serif"
        ],
        Inria : [
          "Inria Serif", "serif"
        ]
      }
      
    },
  },

  plugins: [],
};

module.exports = config;
