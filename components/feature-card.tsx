"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  isOpen: boolean
  onClick: () => void
}

export function FeatureCard({ icon, title, description, isOpen, onClick }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 feature-card cursor-pointer"
      onClick={onClick}
    >
      <div className="text-[#1D3557] dark:text-[#F4A261] mb-3">{icon}</div>
      <h3 className="text-sm font-medium text-[#1D3557] dark:text-gray-100 mb-2">{title}</h3>

      <div className="flex items-center justify-center mt-2">
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#F4A261] dark:text-[#F4A261]"
        >
          <ChevronDown size={16} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 8 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
