/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030308',
        primary: '#ffffff',
        secondary: '#a1a1aa', // text-zinc-400
        accent: '#6d28d9', // Deep purple
        surface: '#0a0a14',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
