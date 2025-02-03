/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/homebanner.webp')",
        'wheat-texture': "url('../src/assets/patterns/wheat-pattern.svg')",
        'leaf-texture': "url('../src/assets/patterns/leaf-texture.svg')",
        'farm-texture': "url('../src/assets/patterns/farm-pattern.svg')",
      },
      colors: {
        earth: {
          100: '#f7f3eb',
          200: '#e3dfd7',
          300: '#8B7355',
          400: '#6B5D4D',
          500: '#4A3F35',
        },
        harvest: {
          50: '#fdf8f6',
          100: '#f7e9d7',
          200: '#e6d5c3',
          300: '#d4c0ae',
          400: '#8B7355',
          500: '#695A38',
        },
        crop: {
          50: '#f1f8e9',
          100: '#dcedc8',
          200: '#c5e1a5',
          300: '#aed581',
          400: '#2F7A3A',
          500: '#1e5728',
        }
      },
      // Add agricultural-themed box shadows
      boxShadow: {
        'grain': '0 4px 6px -1px rgba(139, 115, 85, 0.1)',
        'leaf': '0 4px 6px -1px rgba(47, 122, 58, 0.1)',
      }
    },
  },
  plugins: [],
}
