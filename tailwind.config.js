/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        beige: "#EADDC7",
        beigeDark: "#BF9F63",
        gold: "#cba135",
        blueDark: "#283A4A",
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
        serif: ['DeiGratia', 'Georgia', 'serif'],
        serifSmall: ['Trattatello', 'Georgia', 'serif' ]
      },
    }
  },
  plugins: [],
}
