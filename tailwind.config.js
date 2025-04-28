import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ting-burgundy': '#8B1D3D',
        'ting-pink': '#FCCBDD',
        'ting-rose': '#E8A4B8',
        'ting-light': '#FFF9FB',
        'ting-dark': '#4A0F21',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Lato', 'sans-serif'],
        'handwritten': ['Chivo', 'sans-serif'],
      },
      backgroundImage: {
        'thai-pattern': "url('/thai-pattern.png')",
      },
      boxShadow: {
        'warm': '0 4px 14px -2px rgba(139, 30, 63, 0.1)',
      },
    },
  },
  plugins: [
    typography,
  ],
} 