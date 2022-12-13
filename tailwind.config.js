/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '24rem',
        '96': '34rem',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}


