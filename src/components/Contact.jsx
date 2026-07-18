import { motion } from 'framer-motion'
import { MessageCircle, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { siteConfig } from '../data/siteConfig'
import { whatsappUrl, telUrl, emailUrl } from '../lib/links'

export default function Contact() {
  const { t, lang } = useLang()

  const cards = [
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      value: siteConfig.phone,
      href: whatsappUrl(lang),
      primary: true,
    },
    { icon: Phone, label: t.contact.call, value: siteConfig.phone, href: telUrl() },
    { icon: Mail, label: t.contact.email, value: siteConfig.email, href: emailUrl() },
  ]

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="glow left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 bg-gold/10" />
      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass mx-auto max-w-4xl overflow-hidden p-8 text-center sm:p-14"
        >
          <span className="kicker justify-center">
            <span className="h-px w-6 bg-gold" />
            {t.contact.kicker}
          </span>
          <h2 className="heading mx-auto mt-4 max-w-2xl text-3xl sm:text-4xl lg:text-5xl">{t.contact.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{t.contact.subtitle}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {cards.map((c) => {
              const Icon = c.icon
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.primary ? '_blank' : undefined}
                  rel="noreferrer"
                  className={`group flex flex-col items-center gap-3 rounded-2xl border p-6 transition-all duration-300 ${
                    c.primary
                      ? 'border-gold/40 bg-gold/10 hover:bg-gold/20'
                      : 'border-white/5 bg-ink/50 hover:border-gold/30'
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-full ${
                      c.primary ? 'bg-gold text-ink' : 'bg-gold/10 text-gold'
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-semibold text-cream">{c.label}</span>
                  <span className="text-xs text-muted">{c.value}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                  />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
