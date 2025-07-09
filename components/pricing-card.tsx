"use client"

import type React from "react"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/animations/animated-button"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: {
    icon: React.ReactNode
    text: string
  }[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
  onClickAction?: string
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
  onClickAction,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "p-6 rounded-lg pricing-card h-full flex flex-col",
        highlighted
          ? "bg-[#F7F7F7] dark:bg-[#1D3557]/20 border-2 border-[#1D3557] dark:border-[#F4A261] shadow-lg relative"
          : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md",
      )}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1D3557] dark:bg-[#F4A261] text-white dark:text-gray-800 px-4 py-1 rounded-full text-sm font-medium">
          Recomendado
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-[#1D3557] dark:text-[#F4A261] mb-2">{title}</h3>
        <div className="text-3xl font-bold text-[#1D3557] dark:text-gray-100 mb-2">{price}</div>
        <p className="text-sm text-gray-500 dark:text-gray-400">por mes</p>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{description}</p>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#1D3557] dark:text-[#F4A261] mr-2 mt-0.5 flex-shrink-0">{feature.icon}</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">{feature.text}</span>
          </li>
        ))}
      </ul>
      <div className="text-center mt-auto">
        <AnimatedButton
          variant={buttonVariant}
          className={cn(
            "w-full",
            buttonVariant === "default"
              ? "bg-[#1D3557] dark:bg-[#1D3557] hover:bg-[#152A45] dark:hover:bg-[#152A45] text-white"
              : "border-[#1D3557] dark:border-[#F4A261] text-[#1D3557] dark:text-[#F4A261] hover:bg-[#F7F7F7] dark:hover:bg-[#1D3557]/20",
          )}
          onClick={() => {
            const contactSection = document.getElementById("contacto")
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" })

              // Si hay una acción específica, intentar preseleccionar el campo de interés
              if (onClickAction && typeof window !== "undefined") {
                // Dar tiempo para que el formulario se cargue
                setTimeout(() => {
                  const selectElement = document.querySelector('select[name="interest"]') as HTMLSelectElement
                  if (selectElement) {
                    selectElement.value = onClickAction
                    // Disparar evento de cambio para que React Hook Form actualice su estado
                    const event = new Event("change", { bubbles: true })
                    selectElement.dispatchEvent(event)
                  }
                }, 500)
              }
            }
          }}
        >
          {buttonText}
        </AnimatedButton>
      </div>
    </motion.div>
  )
}
