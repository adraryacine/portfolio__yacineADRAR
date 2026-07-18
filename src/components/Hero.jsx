import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { siteConfig } from '../data/siteConfig'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Halos décoratifs */}
      <div className="glow left-[-10%] top-[10%] h-80 w-80 bg-gold/20" />
      <div className="glow bottom-[-10%] right-[-5%] h-96 w-96 bg-goldsoft/10" />
      {/* Grille subtile */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-x relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Texte */}
        <div>
          <motion.span
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-goldsoft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            {t.hero.badge}
          </motion.span>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="heading mt-6 text-4xl sm:text-6xl lg:text-7xl"
          >
            {lang === 'fr' ? (
              <>
                Je donne vie à vos <span className="text-gold-shine">idées</span> sur le web.
              </>
            ) : (
              <>
                I bring your <span className="text-gold-shine">ideas</span> to life on the web.
              </>
            )}
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            {siteConfig.tagline[lang]}
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#work" className="btn-gold">
              {t.hero.ctaWork}
              <ArrowUpRight size={18} />
            </a>
            <a href="#contact" className="btn-ghost">
              {t.hero.ctaContact}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex gap-8 border-t border-white/5 pt-8"
          >
            {siteConfig.stats.map((s) => (
              <div key={s.value}>
                <div className="font-display text-3xl font-bold text-cream">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-muted">{s.label[lang]}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carte visuelle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="animate-float glass relative overflow-hidden p-1">
            <div className="rounded-[22px] bg-gradient-to-br from-charcoal to-ink p-8">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>
              <div className="mt-8 space-y-3 font-mono text-sm">
                <p className="text-muted">
                  <span className="text-gold">const</span> yacine = {'{'}
                </p>
                <p className="pl-5 text-cream">
                  role: <span className="text-goldsoft">"{siteConfig.role[lang]}"</span>,
                </p>
                <p className="pl-5 text-cream">
                  stack: <span className="text-goldsoft">["React", "Tailwind", "Python"]</span>,
                </p>
                <p className="pl-5 text-cream">
                  passion: <span className="text-goldsoft">"{lang === 'fr' ? 'le détail' : 'the details'}"</span>,
                </p>
                <p className="pl-5 text-cream">
                  available: <span className="text-green-400">true</span>,
                </p>
                <p className="text-muted">{'}'}</p>
              </div>
            </div>
          </div>
          {/* petit badge flottant */}
          <div className="absolute -bottom-4 -left-4 rounded-2xl border border-gold/30 bg-ink px-4 py-3 shadow-xl">
            <p className="text-xs text-muted">{siteConfig.location[lang]}</p>
          </div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-gold md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
