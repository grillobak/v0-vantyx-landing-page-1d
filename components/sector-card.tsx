"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectorCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function SectorCard({ title, description, icon }: SectorCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="text-[#1D3557] dark:text-[#F4A261] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#1D3557] dark:text-[#F4A261] mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}
