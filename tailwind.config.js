/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      beige: "#EADDC7",
      beigeDark: "#BF9F63",
    },
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Ballet'],
    },
  },
  plugins: [],
}
