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
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 500ms ease-out both',
        fadeInDown: 'fadeInDown 500ms ease-out both',
        slideInLeft: 'slideInLeft 500ms ease-out both',
        'bounce-slow': 'bounce 2s infinite',
      },
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