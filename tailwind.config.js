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
        display: ['"Clash Display"', '"Playfair Display"', 'serif'],
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
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 6s linear infinite',
      },
    },
  },
  plugins: [],
}
