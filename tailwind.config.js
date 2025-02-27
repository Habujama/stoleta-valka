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
        overlay: "#A29386",
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Alegreya', 'Georgia', 'serif'],
      },
    }
  },
  plugins: [],
}
