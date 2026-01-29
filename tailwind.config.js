/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Costalina Brand Colors
        'costalina-blue': '#3C41D1',
        'costalina-yellow': '#FFF200',
        'costalina-white': '#FAFAFA',
        
        // Functional colors
        'primary': '#3C41D1',      // Blue
        'secondary': '#FFF200',     // Yellow
        'accent': '#FAFAFA',        // White
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}