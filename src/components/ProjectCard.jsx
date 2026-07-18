import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Github, Globe, MonitorSmartphone } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function ProjectCard({ project, index }) {
  const { t, lang } = useLang()
  const { title, tags, description, image, liveUrl, githubUrl, accent, category, featured } = project

  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    mx.set(px)
    my.set(py)
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
  }
  const handleLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`spotlight group glass relative flex flex-col overflow-hidden transition-colors duration-300 hover:border-gold/30 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Aperçu (image ou dégradé auto) */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/8]' : 'aspect-[16/10]'}`}>
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full scale-[1.02] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: `radial-gradient(120% 120% at 30% 20%, ${accent}40 0%, #101014 60%)` }}
          >
            <span className="font-display text-4xl font-bold tracking-tight text-cream/90 sm:text-5xl">{title}</span>
          </div>
        )}

        {/* dégradé bas pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

        {/* Badge catégorie */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/60 px-3 py-1 font-grotesk text-[11px] font-medium text-cream backdrop-blur-md">
          {category === 'web' ? <Globe size={12} /> : <MonitorSmartphone size={12} />}
          {category === 'web' ? t.work.web : t.work.app}
        </span>

        {/* Flèche live au survol */}
        {liveUrl && (
          <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-gold text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>

      {/* Contenu */}
      <div className="relative z-[2] flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description[lang]}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 font-grotesk text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-goldsoft"
            >
              {t.work.live}
              <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="text-sm text-muted/60">{t.work.soon}</span>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cream"
            >
              <Github size={15} />
              {t.work.code}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
