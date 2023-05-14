/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: '#020617',
      text1: '#f5f5f5',
      text2: '#aeb4c8 ',
      text3: '#8892b0',
      primary: '#b52626',
      secondary: '#00df9a', // maybe use turqouise instead?
      card: '#0B0F21',
    },
    extend: {},
  },
  plugins: [],
}