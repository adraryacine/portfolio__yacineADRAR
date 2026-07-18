import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { SectionHeader, reveal } from './Section'

export default function Process() {
  const { t } = useLang()

  return (
    <section className="relative scroll-mt-20 bg-charcoal/40 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader kicker={t.process.kicker} title={t.process.title} center />

        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          {/* ligne de liaison */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent md:block" />

          {t.process.steps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-ink font-display text-lg font-bold text-gold">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-cream">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[220px] text-sm text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
