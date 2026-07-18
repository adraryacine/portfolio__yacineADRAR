import { Star } from 'lucide-react'

// Bandeau défilant infini. `reverse` inverse le sens.
export default function Marquee({ items, reverse = false }) {
  const row = (
    <div
      className={`flex shrink-0 items-center gap-8 pr-8 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="font-display text-3xl italic text-cream/90 sm:text-5xl">{item}</span>
          <Star size={18} className="shrink-0 text-gold" fill="currentColor" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="mask-fade-x flex overflow-hidden py-6">
      {row}
      {/* copie pour la boucle continue */}
      <div className={`flex shrink-0 items-center gap-8 pr-8 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`} aria-hidden>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-3xl italic text-cream/90 sm:text-5xl">{item}</span>
            <Star size={18} className="shrink-0 text-gold" fill="currentColor" />
          </span>
        ))}
      </div>
    </div>
  )
}
