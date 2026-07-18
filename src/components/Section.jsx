import { motion } from 'framer-motion'

// En-tête de section réutilisable (kicker + titre + sous-titre)
export function SectionHeader({ kicker, title, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <span className="kicker">
        <span className="h-px w-6 bg-gold" />
        {kicker}
      </span>
      <h2 className="heading mt-4 text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
    </motion.div>
  )
}

// Animation d'apparition standard
export const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}
