import { motion } from 'framer-motion'
import { siteConfig } from '../../data/siteConfig'

// Anneaux de compétences en orbite. Chaque anneau tourne ; le contenu des
// badges est contre-tourné pour rester parfaitement lisible.

const OUTER = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Tailwind', color: '#38BDF8' },
  { name: 'Supabase', color: '#3ECF8E' },
  { name: 'Python', color: '#FFD43B' },
]
const INNER = [
  { name: 'Vite', color: '#A259FF' },
  { name: 'PyQt5', color: '#41CD52' },
]

function Badge({ name, color }) {
  return (
    <div
      data-cursor
      className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-charcoal/90 px-3.5 py-2 shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-white/25"
      style={{ boxShadow: `0 0 22px -8px ${color}` }}
    >
      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }} />
      <span className="font-grotesk text-sm font-medium text-cream">{name}</span>
    </div>
  )
}

function Ring({ items, radius, duration, direction = 'cw' }) {
  const spin = direction === 'cw' ? 'orbit-cw' : 'orbit-ccw'
  const counter = direction === 'cw' ? 'orbit-ccw' : 'orbit-cw'
  return (
    <div
      className="absolute left-1/2 top-1/2 h-0 w-0"
      style={{ animation: `${spin} ${duration}s linear infinite` }}
    >
      {items.map((it, i) => {
        const angle = (360 / items.length) * i
        return (
          <div
            key={it.name}
            className="absolute left-0 top-0"
            style={{ transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)` }}
          >
            {/* remet le badge droit (offset statique) */}
            <div style={{ transform: `rotate(${-angle}deg)` }}>
              {/* annule la rotation continue de l'anneau */}
              <div style={{ animation: `${counter} ${duration}s linear infinite` }}>
                <Badge name={it.name} color={it.color} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function SkillsOrbit() {
  const initials = siteConfig.fullName
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto flex aspect-square w-full max-w-[420px] scale-[0.82] items-center justify-center sm:scale-100"
    >
      {/* cercles décoratifs */}
      <div className="absolute h-[300px] w-[300px] rounded-full border border-dashed border-white/10" />
      <div className="absolute h-[164px] w-[164px] rounded-full border border-white/10" />
      <div className="glow absolute h-52 w-52 bg-gold/15" />

      {/* Anneaux */}
      <Ring items={OUTER} radius={150} duration={30} direction="cw" />
      <Ring items={INNER} radius={82} duration={22} direction="ccw" />

      {/* Noyau central */}
      <div className="relative z-[2] grid h-24 w-24 place-items-center rounded-full border border-gold/30 bg-ink">
        <div className="absolute inset-0 animate-pulse rounded-full bg-gold/10 blur-md" />
        <span className="relative font-display text-3xl font-bold text-gold">{initials}</span>
      </div>
    </motion.div>
  )
}
