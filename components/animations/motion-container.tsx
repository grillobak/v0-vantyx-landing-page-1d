"use client"

import type { ReactNode } from "react"
import { motion, type MotionProps } from "framer-motion"

interface MotionContainerProps extends MotionProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = "", ...props }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideUp({ children, delay = 0, className = "", ...props }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideInLeft({ children, delay = 0, className = "", ...props }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideInRight({ children, delay = 0, className = "", ...props }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Scale({ children, delay = 0, className = "", ...props }: MotionContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({ children, delay = 0, className = "", ...props }: MotionContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: delay,
          },
        },
        hidden: {
          opacity: 0,
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
