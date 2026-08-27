/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary dark accent (was maroon) — now Black
        maroon: {
          DEFAULT: '#111111',
          light: '#2E2E2E',
          dark: '#000000',
        },
        // Highlight / CTA accent (was gold) — now Yellow
        gold: {
          DEFAULT: '#F5C518',
          light: '#FFDE59',
          dark: '#CC9F00',
        },
        // Soft alt-section background — near white
        cream: '#FAFAFA',
        // Main background — pure white
        offwhite: '#FFFFFF',
        // Body text / dark surfaces — Black
        charcoal: {
          DEFAULT: '#111111',
          light: '#3D3D3D',
        },
        // Supportive tag color (was green) — kept in Black/Yellow family
        green: {
          DEFAULT: '#111111',
          light: '#3D3D3D',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
      backgroundImage: {
        'gonjong-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 4 L60 40 L52 40 L52 76 L28 76 L28 40 L20 40 Z' fill='%23F5C518' fill-opacity='0.08'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(17, 17, 17, 0.25)',
        card: '0 4px 24px -6px rgba(17, 17, 17, 0.12)',
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