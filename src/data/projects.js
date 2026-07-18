// =============================================================
//  🗂️  TES PROJETS — ajoute / modifie tes réalisations ici.
//
//  Pour chaque projet :
//   - title       : nom du projet
//   - category    : 'web' (site web) ou 'app' (application desktop)
//   - tags        : technologies utilisées
//   - description : { fr, en } — 1 à 2 phrases
//   - image       : nom du fichier dans /public/projects/  (ex '/projects/combo.jpg')
//                   → laisse '' pour afficher un joli dégradé automatique
//   - liveUrl     : lien démo Vercel/en ligne  ('' si aucun)
//   - githubUrl   : lien GitHub                ('' si privé)
//   - accent      : couleur d'accent de la carte (hex)
//   - featured    : true pour le mettre en avant (grande carte)
// =============================================================

export const projects = [
  {
    id: 'combo',
    title: 'Combo',
    category: 'web',
    tags: ['React', 'Vite', 'Tailwind', 'WhatsApp'],
    description: {
      fr: "Site vitrine one-page pour un fast-food à Béjaïa. Menu interactif, panier et commande directe via WhatsApp.",
      en: 'One-page showcase site for a fast-food in Béjaïa. Interactive menu, cart and direct ordering via WhatsApp.',
    },
    image: '/projects/combo.jpg',
    liveUrl: 'https://combo-eight-flame.vercel.app/',
    githubUrl: '',
    accent: '#E1611F',
    featured: true,
  },
  {
    id: 'crosta',
    title: 'Crosta',
    category: 'web',
    tags: ['React', 'Vite', 'Tailwind'],
    description: {
      fr: "Site élégant pour un café & restaurant : pizzas au feu de bois, formules Solo/Trio, galerie et commande WhatsApp.",
      en: 'Elegant site for a café & restaurant: wood-fired pizzas, Solo/Trio combos, gallery and WhatsApp ordering.',
    },
    image: '/projects/crosta.jpg',
    liveUrl: 'https://crosta-mocha.vercel.app/',
    githubUrl: '',
    accent: '#B8895A',
    featured: true,
  },
  {
    id: 'newhaven',
    title: 'New Haven Burger',
    category: 'web',
    tags: ['React', 'Supabase', 'Tailwind'],
    description: {
      fr: "Site pour un resto de burgers américains avec back-office : commandes enregistrées en base et tableau de bord staff en temps réel.",
      en: 'American burger restaurant site with back-office: orders saved in database and real-time staff dashboard.',
    },
    image: '/projects/newhaven.jpg',
    liveUrl: 'https://newheavenburger.vercel.app/',
    githubUrl: '',
    accent: '#FFC71F',
    featured: false,
  },
  {
    id: 'sushi-time',
    title: 'Sushi Time',
    category: 'web',
    tags: ['React', 'Vite', 'Tailwind', 'WhatsApp'],
    description: {
      fr: "Site vitrine pour un restaurant de sushis : carte complète, plateaux, panier et commande via WhatsApp.",
      en: 'Showcase site for a sushi restaurant: full menu, platters, cart and WhatsApp ordering.',
    },
    image: '/projects/sushi-time.jpg',
    liveUrl: 'https://sushi-time-rose.vercel.app/',
    githubUrl: '',
    accent: '#E4547C',
    featured: false,
  },
  {
    id: 'sushi-dine',
    title: 'Sushi Dine',
    category: 'web',
    tags: ['React', 'Vite', 'Tailwind', 'WhatsApp'],
    description: {
      fr: "Site vitrine pour un restaurant de sushis & cuisine asiatique : menu, galerie et commande directe par WhatsApp.",
      en: 'Showcase site for a sushi & Asian food restaurant: menu, gallery and direct WhatsApp ordering.',
    },
    image: '/projects/sushi-dine.jpg',
    liveUrl: 'https://sushi-dine.vercel.app/',
    githubUrl: '',
    accent: '#C0392B',
    featured: false,
  },
  {
    id: 'ramzi',
    title: 'Ramzi Cosmétique',
    category: 'app',
    tags: ['Python', 'PyQt5', 'SQLite'],
    description: {
      fr: "Logiciel de caisse et gestion de stock pour boutique : scan code-barres, alertes de stock, rapports et export Excel.",
      en: 'POS and stock management software for a shop: barcode scanning, stock alerts, reports and Excel export.',
    },
    image: '',
    liveUrl: '',      // pas de démo en ligne (app desktop)
    githubUrl: '',
    accent: '#C9A24B',
    featured: false,
  },
  {
    id: 'khali',
    title: 'Khali Gestion Caisse',
    category: 'app',
    tags: ['Python', 'PyQt5', 'SQLite'],
    description: {
      fr: "Application de caisse pour une maison de cadeaux & cosmétique : ventes en attente, retours, étiquettes et tickets.",
      en: 'POS application for a gift & cosmetics shop: held sales, returns, labels and receipts.',
    },
    image: '',
    liveUrl: '',      // pas de démo en ligne (app desktop)
    githubUrl: '',
    accent: '#0E7C66',
    featured: false,
  },
]
