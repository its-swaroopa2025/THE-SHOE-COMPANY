/** @type {import('tailwindcss').Config} */
const plugin=require('tailwindcss/plugin')
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
      'media440': '440px',
        'media560': '560px',
        'media1200': '1200px'
    },
     backgroundImage: {
        'testimonial-section': "url('/images/testimonalsBG.png')",
      },
        fontFamily: {
        archivo: ["Archivo", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
  addVariant("open-menu", ".open-menu &");
})
  ],
}

