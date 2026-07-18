import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// Compteur animé : anime la partie numérique de `value` (ex "8+", "100%", "7j/7").
export default function Counter({ value, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  // Calculé une seule fois par valeur (références stables -> pas de boucle).
  const { target, suffix, isNumeric } = useMemo(() => {
    const m = String(value).match(/^(\d+)(.*)$/)
    return {
      target: m ? parseInt(m[1], 10) : 0,
      suffix: m ? m[2] : String(value),
      isNumeric: !!m,
    }
  }, [value])

  const [display, setDisplay] = useState(isNumeric ? 0 : value)

  useEffect(() => {
    if (!inView || !isNumeric) return
    let start
    let raf
    const duration = 1300
    const step = (t) => {
      if (start === undefined) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, isNumeric, target])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
      {isNumeric ? suffix : ''}
    </span>
  )
}
