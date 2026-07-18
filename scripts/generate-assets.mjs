// Génère les images à partir des dessins vectoriels :
//  - public/og-image.jpg  (aperçu quand on partage le lien : Insta, WhatsApp…)
//  - public/logo.png       (logo carré réutilisable — ex. photo de profil)
//  - public/apple-touch-icon.png
// Lancer avec : npm run assets
import sharp from 'sharp'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public')

// --- Image d'aperçu social (og-image) ---
const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E7C978"/>
      <stop offset="0.5" stop-color="#C9A24B"/>
      <stop offset="1" stop-color="#E7C978"/>
    </linearGradient>
    <linearGradient id="ugold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#F0DDA0"/>
      <stop offset="1" stop-color="#B8892F"/>
    </linearGradient>
    <linearGradient id="ured" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F24A4A"/>
      <stop offset="1" stop-color="#A50606"/>
    </linearGradient>
    <linearGradient id="ucream" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FBF5E9"/>
      <stop offset="1" stop-color="#E4D8BC"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.18" cy="-0.1" r="0.9">
      <stop offset="0" stop-color="#C9A24B" stop-opacity="0.24"/>
      <stop offset="0.45" stop-color="#C9A24B" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#C9A24B" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="ufan"><circle cx="52" cy="43" r="28"/></clipPath>
    <clipPath id="ufanBig"><circle cx="1010" cy="300" r="235"/></clipPath>
  </defs>

  <rect width="1200" height="630" fill="#0B0B0D"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- grand blason uchiwa estompé à droite -->
  <g opacity="0.08">
    <path d="M 981 430 L 968 632 Q 967 646 981 646 L 1039 646 Q 1053 646 1052 632 L 1039 430 Z"
          fill="#F4EFE6" stroke="#C9A24B" stroke-width="10" stroke-linejoin="round"/>
    <g clip-path="url(#ufanBig)">
      <rect x="775" y="65" width="470" height="470" fill="#F4EFE6"/>
      <rect x="775" y="65" width="470" height="200" fill="#E20909"/>
    </g>
    <circle cx="1010" cy="300" r="235" fill="none" stroke="#C9A24B" stroke-width="14"/>
  </g>

  <!-- badge blason uchiwa -->
  <g transform="translate(96,116)">
    <rect width="104" height="104" rx="28" fill="#111114" stroke="url(#ugold)" stroke-width="3"/>
    <path d="M 47 60 L 44 84 Q 43.5 88 47.5 88 L 56.5 88 Q 60.5 88 60 84 L 57 60 Z"
          fill="url(#ucream)" stroke="url(#ugold)" stroke-width="2.6" stroke-linejoin="round"/>
    <g clip-path="url(#ufan)">
      <rect width="104" height="104" fill="url(#ucream)"/>
      <rect width="104" height="42" fill="url(#ured)"/>
    </g>
    <circle cx="52" cy="43" r="28" fill="none" stroke="url(#ugold)" stroke-width="2.8"/>
  </g>

  <!-- nom -->
  <text x="98" y="378" font-family="Georgia, serif" font-size="140" font-weight="700" fill="url(#gold)">Yacine<tspan fill="#C9A24B">.</tspan></text>

  <!-- sous-titre -->
  <text x="104" y="446" font-family="Arial, sans-serif" font-size="33" letter-spacing="7" fill="#A7A29A">DÉVELOPPEUR WEB &amp; APPLICATIONS</text>

  <!-- séparateur -->
  <rect x="104" y="486" width="560" height="1.5" fill="#F4EFE6" opacity="0.16"/>

  <!-- tags -->
  <text x="104" y="534" font-family="Arial, sans-serif" font-size="27" fill="#F4EFE6">Sites web&#160;&#160;·&#160;&#160;Applications&#160;&#160;·&#160;&#160;Design</text>

  <!-- domaine -->
  <text x="104" y="586" font-family="Arial, sans-serif" font-size="24" fill="#A7A29A">portfolio-yacine-adrar.vercel.app</text>
</svg>`

// --- Logo carré (fond doré, YA sombre) ---
const logo = readFileSync(join(pub, 'logo.svg'))

await sharp(Buffer.from(og)).jpeg({ quality: 90 }).toFile(join(pub, 'og-image.jpg'))
await sharp(logo).resize(512, 512).png().toFile(join(pub, 'logo.png'))
await sharp(logo).resize(180, 180).png().toFile(join(pub, 'apple-touch-icon.png'))

console.log('✅ og-image.jpg, logo.png, apple-touch-icon.png générés dans /public')
