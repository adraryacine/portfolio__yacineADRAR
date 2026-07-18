import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { siteConfig } from '../data/siteConfig'
import Magnetic from './fx/Magnetic'
import Counter from './fx/Counter'

// Révélation mot par mot
function Words({ text, className = '', delay = 0 }) {
  return (
    <span className={className}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const { t, lang } = useLang()

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <div className="container-x relative z-10 w-full py-12">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 font-grotesk text-xs font-medium tracking-wide text-goldsoft"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          {t.hero.badge}
        </motion.span>

        {/* Titre cinétique géant */}
        <h1 className="heading mt-7 text-[13vw] leading-[0.92] sm:text-[10vw] lg:text-[8.5rem]">
          <Words text={lang === 'fr' ? 'Je donne vie' : 'I bring your'} delay={0.25} />
          <br />
          <span className="relative">
            <Words
              text={lang === 'fr' ? 'à vos' : 'ideas'}
              delay={0.45}
            />
            <span className="overflow-hidden align-bottom inline-block">
              <motion.span
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block italic text-gold-shine"
              >
                {lang === 'fr' ? 'idées.' : 'to life.'}
              </motion.span>
            </span>
          </span>
        </h1>

        {/* Bas : tagline + visuel */}
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <p className="max-w-md text-base text-muted sm:text-lg">{siteConfig.tagline[lang]}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a href="#work" className="btn-gold">
                  {t.hero.ctaWork}
                  <ArrowUpRight size={18} />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href="#contact" className="btn-ghost">
                  {t.hero.ctaContact}
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Stats + mini carte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex items-end gap-8 lg:gap-10"
          >
            {siteConfig.stats.map((s) => (
              <div key={s.value} className="text-left">
                <Counter value={s.value} className="block font-display text-4xl font-bold text-cream sm:text-5xl" />
                <div className="mt-1 font-grotesk text-[11px] uppercase tracking-widest text-muted">
                  {s.label[lang]}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Emblème décoratif qui tourne */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="pointer-events-none absolute right-6 top-28 hidden lg:block"
      >
        <div className="relative grid h-28 w-28 place-items-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
            <defs>
              <path id="circlePath" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-muted font-grotesk text-[8.5px] uppercase tracking-[0.35em]">
              <textPath href="#circlePath">
                {lang === 'fr' ? '· Disponible · Portfolio · Freelance ' : '· Available · Portfolio · Freelance '}
              </textPath>
            </text>
          </svg>
          <Sparkles size={22} className="text-gold" />
        </div>
      </motion.div>

      {/* Indicateur scroll */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-gold md:flex"
      >
        <span className="font-grotesk text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
