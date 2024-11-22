/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'camping': "url('./assets/camping.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

