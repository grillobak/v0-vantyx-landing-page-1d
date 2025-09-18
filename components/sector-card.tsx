"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectorCardProps {
  title: string
  description: string
  detailedDescription: string
  icon: ReactNode
  isFlipped: boolean
  onFlip: () => void
}

export function SectorCard({ title, description, detailedDescription, icon, isFlipped, onFlip }: SectorCardProps) {
  return (
    <div className="perspective-1000 h-80">
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        onClick={onFlip}
      >
        {/* Cara frontal */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col items-center text-center"
          >
            <div className="text-[#1D3557] dark:text-[#F4A261] mb-4 flex items-center justify-center w-16 h-16">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1D3557] dark:text-[#F4A261] mb-3">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
            <div className="mt-4 text-xs text-[#F4A261] dark:text-[#F4A261] font-medium">
              Click para ver más detalles
            </div>
          </motion.div>
        </div>

        {/* Cara trasera */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-[#1D3557] dark:bg-[#F4A261] text-white dark:text-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <div className="text-[#F4A261] dark:text-[#1D3557] w-8 h-8 flex items-center justify-center">{icon}</div>
            </div>
            <div className="flex-1 overflow-y-auto">
              <p className="text-sm leading-relaxed text-gray-100 dark:text-gray-800">{detailedDescription}</p>
            </div>
            <div className="mt-4 text-xs text-[#F4A261] dark:text-[#1D3557] font-medium text-center">
              Click para volver
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
