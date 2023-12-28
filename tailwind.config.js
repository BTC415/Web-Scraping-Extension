/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/popup/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
