import { useState } from 'react'
import { motion } from 'framer-motion'

// Grille bento moderne : vrais logos colorés, tailles variées, aucune animation
// kitsch. Style net (Vercel / Linear). Fallback propre si un logo ne charge pas.

const icon = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`

const SKILLS = [
  { name: 'React', slug: 'react', color: '#61DAFB', span: 'sm:col-span-2 sm:row-span-2', big: true },
  { name: 'Python', slug: 'python', color: '#FFD43B', span: 'sm:row-span-2', big: true },
  { name: 'Tailwind', slug: 'tailwindcss', color: '#38BDF8' },
  { name: 'Vite', slug: 'vitejs', color: '#A259FF' },
  { name: 'Supabase', slug: 'supabase', color: '#3ECF8E' },
  { name: 'JavaScript', slug: 'javascript', color: '#F7DF1E' },
  { name: 'Git', slug: 'git', color: '#F05032' },
  { name: 'Figma', slug: 'figma', color: '#F24E1E' },
]

function Logo({ slug, name, color, big }) {
  const [error, setError] = useState(false)
  const size = big ? 'h-11 w-11' : 'h-8 w-8'
  if (error) {
    return (
      <span
        className={`grid ${size} place-items-center rounded-xl font-grotesk font-bold`}
        style={{ backgroundColor: `${color}22`, color }}
      >
        {name.charAt(0)}
      </span>
    )
  }
  return (
    <img
      src={icon(slug)}
      alt={name}
      loading="lazy"
      onError={() => setError(true)}
      className={`${size} object-contain`}
    />
  )
}

export default function SkillsBento() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-flow-dense auto-rows-[96px] grid-cols-2 gap-3 sm:auto-rows-[104px] sm:grid-cols-3"
    >
      {SKILLS.map((s) => (
        <div
          key={s.name}
          className={`spotlight group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/25 ${
            s.span || ''
          }`}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect()
            e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
            e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
          }}
        >
          {/* filet coloré de la marque, en haut */}
          <span className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }} />

          <Logo slug={s.slug} name={s.name} color={s.color} big={s.big} />
          <span className={`relative z-[2] font-grotesk font-medium text-cream ${s.big ? 'text-lg' : 'text-sm'}`}>
            {s.name}
          </span>
        </div>
      ))}
    </motion.div>
  )
}
