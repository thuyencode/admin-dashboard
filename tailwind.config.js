const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Flex', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#1992D4',
        secondary: '#FACC15'
      },
      height: { screen: '100dvh' },
      gridTemplateColumns: {
        ram: 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')]
}
