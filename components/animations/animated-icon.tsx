"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedIconProps {
  children: ReactNode
  className?: string
}

export function AnimatedIcon({ children, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
