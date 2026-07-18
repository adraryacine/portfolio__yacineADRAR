import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { SectionHeader } from './Section'
import SkillsOrbit from './fx/SkillsOrbit'

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

        {/* Compétences en orbite */}
        <SkillsOrbit />
      </div>
    </section>
  )
}
