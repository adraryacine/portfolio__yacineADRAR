/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0D',        // fond principal (presque noir)
        charcoal: '#141418',   // cartes / sections
        stone: '#1E1E24',      // bordures / surfaces
        cream: '#F4EFE6',      // texte clair
        muted: '#A7A29A',      // texte secondaire
        gold: '#C9A24B',       // accent doré
        goldsoft: '#E7C978',   // doré clair (hover / glow)
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(4%,-6%) scale(1.15)' },
          '66%': { transform: 'translate(-4%,4%) scale(0.95)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
        marquee: 'marquee 28s linear infinite',
        'marquee-rev': 'marquee-rev 28s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        'spin-slow': 'spin-slow 14s linear infinite',
      },
    },
  },
  plugins: [],
}
