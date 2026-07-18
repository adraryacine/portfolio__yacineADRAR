import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { SectionHeader } from './Section'

export default function About() {
  const { t } = useLang()
  const points = [t.about.point1, t.about.point2, t.about.point3]

  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeader kicker={t.about.kicker} title={t.about.title} />
          <div className="mt-6 space-y-4 text-muted">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check size={14} />
                </span>
                <span className="text-cream/90">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Visuel décoratif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="glass aspect-square overflow-hidden p-8">
            <div className="grid h-full grid-cols-2 gap-4">
              {['React', 'Tailwind', 'Vite', 'Python', 'Supabase', 'PyQt5', 'SQLite', 'Figma'].slice(0, 6).map(
                (tech, i) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center rounded-2xl border border-white/5 bg-ink/60 text-sm font-medium text-cream/80 transition-colors hover:border-gold/40 hover:text-gold"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {tech}
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="glow -z-10 left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 bg-gold/10" />
        </motion.div>
      </div>
    </section>
  )
}
