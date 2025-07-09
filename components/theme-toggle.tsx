"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { AnimatedIcon } from "@/components/animations/animated-icon"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200">
        <span className="sr-only">Toggle theme</span>
      </div>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <AnimatedIcon>
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-[#F4A261]" />
        ) : (
          <Moon className="h-5 w-5 text-[#1D3557] dark:text-[#F4A261]" />
        )}
      </AnimatedIcon>
    </motion.button>
  )
}
