/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0D0D0D',
          darker: '#070707',
          card: '#141414',
          surface: '#1E1E1E',
          surfaceHover: '#282828',
          gold: '#C5A880',
          goldLight: '#E5CCA8',
          goldDark: '#997D58',
          cream: '#F8F7F4',
          creamMuted: '#E0DDD5',
          gray: '#8E8E93',
          grayDark: '#48484A',
          border: 'rgba(197, 168, 128, 0.18)',
          borderHover: 'rgba(197, 168, 128, 0.45)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        display: ['Cinzel', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFCCA8 0%, #C5A880 50%, #997D58 100%)',
        'gold-text-gradient': 'linear-gradient(135deg, #FFF1DB 0%, #C5A880 50%, #997D58 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(13, 13, 13, 0.4) 0%, rgba(13, 13, 13, 0.95) 100%)',
        'radial-gold': 'radial-gradient(circle at center, rgba(197, 168, 128, 0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(197, 168, 128, 0.22)',
        'gold-glow-lg': '0 0 45px rgba(197, 168, 128, 0.35)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
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
