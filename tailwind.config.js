/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#2b3743', // Dark Blue (Dark Mode Elements)
        'dark-blue-bg': '#202d36', // Very Dark Blue (Dark Mode Background)
        'dark-blue-text': '#111517', // Very Dark Blue (Light Mode Text)
        'dark-gray-input': '#858585', // Dark Gray (Light Mode Input)
        'light-gray-bg': '#fafafa', // Very Light Gray (Light Mode Background)
        white: '#ffffff', // White (Dark Mode Text & Light Mode Elements)
      },
    },
  },
  plugins: [],
}
