import { Instagram, Facebook, Linkedin, Github } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { siteConfig } from '../data/siteConfig'

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  github: Github,
}

export default function Footer() {
  const { t, lang } = useLang()
  const year = new Date().getFullYear()

  const socials = Object.entries(siteConfig.socials).filter(([, url]) => url)

  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="container-x flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-ink">
            {siteConfig.name.charAt(0)}
          </span>
          <span className="text-cream">{siteConfig.fullName}</span>
        </div>

        {/* Réseaux sociaux */}
        {socials.length > 0 && (
          <div className="flex items-center gap-3">
            {socials.map(([key, url]) => {
              const Icon = socialIcons[key]
              if (!Icon) return null
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={key}
                  className="grid h-10 w-10 place-items-center rounded-full border border-stone text-muted transition-all duration-300 hover:border-gold hover:text-gold"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        )}

        <p className="text-center text-xs text-muted sm:text-right">
          © {year} {siteConfig.fullName}. {t.footer.rights}
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> · </span>
          {t.footer.made} {siteConfig.name}.
        </p>
      </div>
    </footer>
  )
}
