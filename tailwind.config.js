/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter var",
        { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
    extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'primaryBg':'#f4f5f9',
          'secondary':'#00abb3',
          footerBg:'#1c2525'

        },
    },
  },
  plugins: [require("daisyui") ,],
  daisyui: {
    themes: ["light", ],
  },
}