import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../../data/siteConfig'

// Écran d'intro : compteur 0 -> 100 puis révélation du nom, enfin l'overlay se retire.
export default function Preloader() {
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let current = 0
    const id = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3
      if (current >= 100) {
        current = 100
        clearInterval(id)
        setTimeout(() => setDone(true), 650)
      }
      setCount(current)
    }, 90)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-bold tracking-tight text-cream sm:text-6xl"
          >
            {siteConfig.name}
            <span className="text-gold">.</span>
          </motion.div>

          <div className="mt-6 h-px w-40 overflow-hidden bg-white/10 sm:w-56">
            <motion.div
              className="h-full bg-gold"
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="mt-4 font-grotesk text-sm tabular-nums text-muted">{count}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
