/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#00b8cc',
        'cyan-light': '#00d4e8',
        'cyan-dark': '#19ceea',
        'text-main': '#0a3540',
        'text-muted': '#2e7080',
        'text-dim': '#6ab0be',
      },
      fontFamily: {
        display: ['Roca Two', 'Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideTrack: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-reverse': 'float 9s ease-in-out infinite reverse',
        'spin-slow': 'spin-slow 30s linear infinite',
        ticker: 'ticker 30s linear infinite',
        'slide-track': 'slideTrack 28s linear infinite',
      },
    },
  },
  plugins: [],
}
