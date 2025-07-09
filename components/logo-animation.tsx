"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface LogoAnimationProps {
  width?: number
  height?: number
  className?: string
  variant?: "default" | "white" | "dark"
  withLink?: boolean
}

export function LogoAnimation({
  width = 150,
  height = 60,
  className = "",
  variant = "default",
  withLink = true,
}: LogoAnimationProps) {
  const animatedLogo = (
    <motion.div
      className={`relative ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <Image src="/logo-vantyx.png" alt="Vantyx Soluciones" fill className="object-contain" priority />
    </motion.div>
  )

  if (withLink) {
    return (
      <Link href="/" className="inline-block">
        {animatedLogo}
      </Link>
    )
  }

  return animatedLogo
}
