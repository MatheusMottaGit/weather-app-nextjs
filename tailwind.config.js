/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     backgroundImage: {
      main: 'url("../assets/Background.svg")',
      clouds: 'url("../assets/TemperatureNow.svg")'
     },

     colors: {
      state: '#6D67D0',
      vodka: '#C2BFF4',
      palelavender: '#DAD8F7',
      lavender: '#E7E6FB',
      safron: '#F6C833',
      napples: '#FBDB60',
      middlegreen: '#87EBCD',
      perwinkle: '#C2CEF2',
      meatbrown: '#E5BB46',
      violet: '#8E87FA',
      bluebell: '#9D99E4'
     },

     fontFamily: {
      lato: 'var(--font-lato)'
     }
    },
  },
  plugins: [],
}
