import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Compteur animé : anime la partie numérique de `value` (ex "8+", "100%", "7j/7").
export default function Counter({ value, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  const match = String(value).match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : String(value)

  useEffect(() => {
    if (!inView) return
    if (!match) {
      setDisplay(String(value))
      return
    }
    let start
    const duration = 1300
    const step = (t) => {
      if (start === undefined) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(String(Math.round(eased * target)))
      if (p < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, value, match])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
