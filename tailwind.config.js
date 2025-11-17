/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2942',
          light: '#1E88E5',
        },
        accent: {
          orange: '#FF8A3C',
        },
        bg: {
          main: '#F3F5F9',
          card: '#FFFFFF',
        },
        text: {
          main: '#101828',
          muted: '#6B7280',
        },
      },
    },
  },
  plugins: [],
};
