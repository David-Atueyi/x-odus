/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/context/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#184b8c',
        white: '#FFFFFF',
      },
      boxShadow: {
        glow: '0 0 25px rgba(24, 75, 140, 0.25)',
        'glow-lg': '0 0 40px rgba(24, 75, 140, 0.3)',
        'glow-white': '0 0 25px rgba(255, 255, 255, 0.25)',
        'glow-white-lg': '0 0 40px rgba(255, 255, 255, 0.3)',
      },
      keyframes: {},
      animation: {},
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
};