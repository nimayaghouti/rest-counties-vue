/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        sm: '375px',
        lg: '1440px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#1A2631', // Dark Blue (Dark Mode Elements)
        'dark-blue-bg': '#161E24', // Very Dark Blue (Dark Mode Background)
        'dark-blue-text': '#1A1A1A', // Very Dark Blue (Light Mode Text)
        'dark-gray-input': '#7F7F7F', // Dark Gray (Light Mode Input)
        'light-gray-bg': '#F7F7F7', // Very Light Gray (Light Mode Background)
        white: '#FFFFFF', // White (Dark Mode Text & Light Mode Elements)
      },
    },
  },
  plugins: [],
}
