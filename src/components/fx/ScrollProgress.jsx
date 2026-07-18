import { motion, useScroll, useSpring } from 'framer-motion'

// Fine barre de progression en haut de page.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[80] h-0.5 origin-left bg-gradient-to-r from-gold via-goldsoft to-gold"
    />
  )
}
