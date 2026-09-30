'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorCustom() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }
    const enter = () => setVisible(true)
    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseenter', enter)
    window.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseenter', enter)
      window.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60 bg-accent/10 shadow-soft md:block"
      animate={{
        x: position.x,
        y: position.y,
        opacity: visible ? 1 : 0
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.4 }}
    />
  )
}
