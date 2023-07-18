/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    
  ],

  theme: {
    extend: {
      content: {
        'dk': 'url("/icons/dk.svg")',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

