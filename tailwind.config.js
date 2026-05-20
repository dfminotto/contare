/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        indigo: {
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 8s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 6s ease infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%':  { transform: 'translate(25px, -35px) scale(1.06)' },
          '50%':  { transform: 'translate(-20px, 25px) scale(0.94)' },
          '75%':  { transform: 'translate(35px, 12px) scale(1.03)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'glow-blue':   '0 0 40px rgba(37,99,235,0.35)',
        'glow-indigo': '0 0 40px rgba(99,102,241,0.35)',
        'deep':        '0 25px 60px -12px rgba(0,0,0,0.25)',
        'card':        '0 8px 32px rgba(30,58,138,0.10)',
        'card-hover':  '0 20px 60px rgba(30,58,138,0.20)',
      },
    },
  },
  plugins: [],
};
