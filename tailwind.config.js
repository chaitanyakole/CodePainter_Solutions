/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f1',
          100: '#ffe1e0',
          200: '#ffc8c6',
          300: '#ffa29e',
          400: '#ff6c66',
          500: '#F5302A', // CodePainter Signature Scarlet Red
          600: '#e01e18',
          700: '#bc140f',
          800: '#9b1410',
          900: '#801714',
          950: '#460705',
        },
        safety: {
          amber: '#f59e0b',
          orange: '#f97316',
          emerald: '#10b981',
          danger: '#ef4444'
        },
        industrial: {
          darkest: '#07070b',
          card: '#0f0f17',
          border: '#242436',
          surface: '#151522',
          lightBg: '#f8f9fa',
          lightCard: '#ffffff',
          lightBorder: '#e5e7eb'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -4px rgba(245, 48, 42, 0.45)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'glow-green': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
