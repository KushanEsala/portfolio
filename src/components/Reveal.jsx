import React from 'react'
import { motion as Motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0 }) {
  const reducedMotion = useReducedMotion()
  return <Motion.div
    className={className}
    initial={reducedMotion ? false : { opacity: 0, y: 22 }}
    whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.12 }}
    transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</Motion.div>
}
