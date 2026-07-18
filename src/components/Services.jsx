import { motion } from 'framer-motion'
import { Globe, ShoppingCart, LayoutDashboard, Palette } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { SectionHeader, reveal } from './Section'

const icons = [Globe, ShoppingCart, LayoutDashboard, Palette]

export default function Services() {
  const { t } = useLang()

  return (
    <section id="services" className="relative scroll-mt-20 bg-charcoal/40 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeader kicker={t.services.kicker} title={t.services.title} subtitle={t.services.subtitle} center />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                custom={i}
                className="group glass relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
                <span className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
