import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Curseur personnalisé : point net + anneau qui suit avec inertie.
// S'agrandit au survol des éléments interactifs. Desktop uniquement.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHidden(false)
      const t = e.target
      setHovering(!!(t.closest && t.closest('a, button, [data-cursor]')))
    }
    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block" style={{ opacity: hidden ? 0 : 1 }}>
      {/* Point central */}
      <motion.div
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-gold"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      {/* Anneau */}
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-gold/70"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          borderColor: hovering ? 'rgba(231,201,120,0.9)' : 'rgba(201,162,75,0.6)',
          backgroundColor: hovering ? 'rgba(201,162,75,0.12)' : 'rgba(201,162,75,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </div>
  )
}
