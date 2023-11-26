/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans'],
        'oswald': ["Oswald", 'Arial'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'fedroka': ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    "prettier-plugin-tailwindcss"
  ],
}

