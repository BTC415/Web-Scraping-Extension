/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/popup/*.{js,ts,jsx,tsx}', './popup.html'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['corporate', 'business'],
  },
}
