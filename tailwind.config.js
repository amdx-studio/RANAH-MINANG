/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#6B1D26',
          light: '#8A2C36',
          dark: '#4A1119',
        },
        gold: {
          DEFAULT: '#C89B3C',
          light: '#E0BE6C',
          dark: '#A67C2A',
        },
        cream: '#F3ECDD',
        offwhite: '#FBF9F4',
        charcoal: {
          DEFAULT: '#2A211C',
          light: '#4A3D34',
        },
        green: {
          DEFAULT: '#4B6B4F',
          light: '#6C8C6F',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
      backgroundImage: {
        'gonjong-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 4 L60 40 L52 40 L52 76 L28 76 L28 40 L20 40 Z' fill='%23C89B3C' fill-opacity='0.06'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(42, 33, 28, 0.25)',
        card: '0 4px 24px -6px rgba(42, 33, 28, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
