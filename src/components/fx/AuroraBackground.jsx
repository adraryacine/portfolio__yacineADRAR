// Fond aurora : dégradés flous animés, fixés derrière tout le contenu.
export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -left-[15%] top-[-10%] h-[45vmax] w-[45vmax] animate-aurora rounded-full bg-gold/20 blur-[120px]" />
      <div
        className="absolute right-[-10%] top-[20%] h-[40vmax] w-[40vmax] animate-aurora rounded-full bg-goldsoft/10 blur-[120px]"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="absolute bottom-[-15%] left-[25%] h-[38vmax] w-[38vmax] animate-aurora rounded-full bg-[#5b3d1a]/25 blur-[120px]"
        style={{ animationDelay: '-11s' }}
      />
      {/* voile sombre pour garder le contraste du texte */}
      <div className="absolute inset-0 bg-ink/70" />
      {/* grille fine */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />
    </div>
  )
}
