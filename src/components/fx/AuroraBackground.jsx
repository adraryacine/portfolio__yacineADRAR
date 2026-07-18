// Fond moderne et net : noir profond + un très léger halo statique en haut.
// Pas de flou bombé, pas d'animation — propre, style Linear / Vercel.
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      {/* halo doré discret et statique, en haut */}
      <div
        className="absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            'radial-gradient(60% 100% at 50% 0%, rgba(201,162,75,0.10) 0%, rgba(201,162,75,0.04) 35%, transparent 70%)',
        }}
      />
      {/* grille fine très discrète */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
    </div>
  )
}
