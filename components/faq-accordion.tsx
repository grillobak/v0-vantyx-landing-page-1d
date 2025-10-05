"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Search, HelpCircle, Zap, DollarSign, Headphones, Link2, Settings } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

// Tipos para las categorías
export type FaqCategory = "general" | "funcionalidades" | "precios" | "soporte" | "integracion"

export interface FaqItem {
  question: string
  answer: string
  category: FaqCategory
  icon?: React.ReactNode
}

interface FaqItemProps {
  question: string
  answer: string
  icon?: React.ReactNode
  isOpen: boolean
  onToggle: () => void
}

// Configuración de categorías
const CATEGORIES = [
  { id: "all" as const, name: "Todas", icon: <HelpCircle className="h-4 w-4" />, color: "text-gray-600" },
  { id: "general" as const, name: "General", icon: <Settings className="h-4 w-4" />, color: "text-blue-600" },
  {
    id: "funcionalidades" as const,
    name: "Funcionalidades",
    icon: <Zap className="h-4 w-4" />,
    color: "text-purple-600",
  },
  { id: "precios" as const, name: "Precios", icon: <DollarSign className="h-4 w-4" />, color: "text-green-600" },
  { id: "soporte" as const, name: "Soporte", icon: <Headphones className="h-4 w-4" />, color: "text-orange-600" },
  {
    id: "integracion" as const,
    name: "Integración",
    icon: <Link2 className="h-4 w-4" />,
    color: "text-teal-600",
  },
]

export function FaqItem({ question, answer, icon, isOpen, onToggle }: FaqItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4 overflow-hidden"
    >
      <motion.div
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        animate={{
          backgroundColor: isOpen ? "rgba(6, 182, 212, 0.05)" : "rgba(255, 255, 255, 0)",
          borderColor: isOpen ? "#06b6d4" : "rgba(229, 231, 235, 1)",
        }}
        className="border rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <button
          className={cn(
            "flex justify-between items-center w-full p-5 text-left transition-colors",
            "hover:bg-gray-50 dark:hover:bg-gray-800",
          )}
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <div className="flex items-center flex-1">
            {icon && (
              <div className="mr-3 flex-shrink-0 text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 p-2 rounded-lg">
                {icon}
              </div>
            )}
            <h3 className="text-base font-semibold text-gray-900 dark:text-white pr-4">{question}</h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 ml-2"
          >
            <ChevronDown className="h-5 w-5 text-teal-600 dark:text-teal-400" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-5 pb-5 border-t border-gray-100 dark:border-gray-800 pt-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed pl-14">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "all">("all")

  // Filtrar por búsqueda y categoría
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = activeCategory === "all" || item.category === activeCategory

    return matchesSearch && matchesCategory
  })

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Contar items por categoría
  const getCategoryCount = (categoryId: FaqCategory | "all") => {
    if (categoryId === "all") return items.length
    return items.filter((item) => item.category === categoryId).length
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Barra de búsqueda */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 relative">
        <Input
          type="text"
          placeholder="Buscar preguntas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 pr-4 h-14 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 focus:border-teal-500 focus:ring-teal-500 rounded-xl text-base shadow-sm"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <span className="sr-only">Limpiar búsqueda</span>✕
          </button>
        )}
      </motion.div>

      {/* Filtros por categoría */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((category, index) => {
            const isActive = activeCategory === category.id
            const count = getCategoryCount(category.id)

            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 border-2",
                  isActive
                    ? "bg-teal-600 text-white border-teal-600 shadow-lg shadow-teal-500/30 scale-105"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-teal-300 hover:shadow-md",
                )}
              >
                <span className={isActive ? "text-white" : category.color}>{category.icon}</span>
                <span>{category.name}</span>
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-semibold",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400",
                  )}
                >
                  {count}
                </span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Lista de preguntas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800"
      >
        {filteredItems.length > 0 ? (
          <div>
            {/* Indicador de resultados */}
            {(searchTerm || activeCategory !== "all") && (
              <div className="mb-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-800">
                <p className="text-sm text-teal-800 dark:text-teal-300">
                  <span className="font-semibold">{filteredItems.length}</span>{" "}
                  {filteredItems.length === 1 ? "pregunta encontrada" : "preguntas encontradas"}
                  {searchTerm && (
                    <>
                      {" "}
                      para "<span className="font-semibold">{searchTerm}</span>"
                    </>
                  )}
                </p>
              </div>
            )}

            {/* Items */}
            {filteredItems.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                icon={item.icon}
                isOpen={openIndex === index}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No se encontraron resultados</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              No encontramos preguntas que coincidan con tu búsqueda.
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setActiveCategory("all")
              }}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </motion.div>

      {/* CTA de ayuda adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center p-6 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl border border-teal-100 dark:border-teal-800"
      >
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          ¿No encontraste lo que buscabas? Nuestro equipo está listo para ayudarte.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/543794601984"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
          >
            <Headphones className="h-4 w-4 mr-2" />
            Contactar Soporte
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-teal-600 dark:text-teal-400 rounded-lg font-medium transition-colors border border-teal-200 dark:border-teal-800"
          >
            Enviar Mensaje
          </a>
        </div>
      </motion.div>
    </div>
  )
}
