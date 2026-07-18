import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Globe, MonitorSmartphone } from 'lucide-react'
import { useLang } from '../context/LangContext'

export default function ProjectCard({ project, index }) {
  const { t, lang } = useLang()
  const { title, tags, description, image, liveUrl, githubUrl, accent, category, featured } = project

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group glass relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 ${
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
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background: `radial-gradient(120% 120% at 30% 20%, ${accent}33 0%, #141418 60%)`,
            }}
          >
            <span className="font-display text-4xl font-bold tracking-tight text-cream/90 sm:text-5xl">{title}</span>
          </div>
        )}

        {/* Badge catégorie */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink/70 px-3 py-1 text-[11px] font-medium text-cream backdrop-blur">
          {category === 'web' ? <Globe size={12} /> : <MonitorSmartphone size={12} />}
          {category === 'web' ? t.work.web : t.work.app}
        </span>
      </div>

      {/* Contenu */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-cream">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description[lang]}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/5 bg-ink/60 px-2.5 py-1 text-[11px] text-muted">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
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
