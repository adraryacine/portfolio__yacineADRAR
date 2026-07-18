import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { siteConfig } from '../data/siteConfig'

export default function Navbar() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#work', label: t.nav.work },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-ink/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gold text-ink">
            {siteConfig.name.charAt(0)}
          </span>
          <span className="text-cream">{siteConfig.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-sm text-muted transition-colors hover:text-cream">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggle}
            className="rounded-full border border-stone px-3 py-1.5 text-xs font-semibold text-muted transition-colors hover:border-gold hover:text-gold"
            aria-label="Changer de langue"
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          <a href="#contact" className="btn-gold hidden !px-5 !py-2 text-xs md:inline-flex">
            {t.nav.contact}
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-stone text-cream md:hidden"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-ink/95 backdrop-blur-lg md:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-cream transition-colors hover:bg-charcoal"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
