"use client"

import type React from "react"

import type { ButtonHTMLAttributes } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Button variant={variant} size={size} className={cn(className)} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
