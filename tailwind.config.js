/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D28D9',
          light: '#8B5CF6',
          dark: '#5B21B6',
        },
        accent: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
        },
        surface: {
          DEFAULT: '#0a0a1a',
          light: '#111128',
          card: 'rgba(109, 40, 217, 0.06)',
        },
      },
      fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
          'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
          'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
          'glow-pulse': {
              '0%, 100%': { boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)' },
              '50%': { boxShadow: '0 0 40px rgba(109, 40, 217, 0.6)' },
          },
          'float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
          },
      },
    },
  },
  plugins: [],
}
