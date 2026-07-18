import { siteConfig } from '../data/siteConfig'

export function whatsappUrl(lang = 'fr') {
  const msg = siteConfig.whatsappMessage[lang] || siteConfig.whatsappMessage.fr
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`
}

export function telUrl() {
  return `tel:+${siteConfig.phoneLink}`
}

export function emailUrl() {
  return `mailto:${siteConfig.email}`
}
