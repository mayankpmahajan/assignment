/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#7b0ef0',
        'brand-secondary': '#f0ecff',
      },
    },
  },
  plugins: [],
}