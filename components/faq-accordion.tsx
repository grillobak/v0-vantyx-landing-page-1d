"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
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
          backgroundColor: isOpen ? "rgba(244, 162, 97, 0.05)" : "rgba(255, 255, 255, 0)",
          borderColor: isOpen ? "#F4A261" : "rgba(229, 231, 235, 1)",
        }}
        className="border rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <button
          className={cn(
            "flex justify-between items-center w-full p-5 text-left transition-colors",
            "hover:bg-gray-50 dark:hover:bg-gray-800",
          )}
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <div className="flex items-center">
            <HelpCircle className="h-5 w-5 text-[#F4A261] dark:text-[#F4A261] mr-3 flex-shrink-0" />
            <h3 className="text-lg font-bold text-[#1D3557] dark:text-white">{question}</h3>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 ml-2"
          >
            <ChevronDown className="h-5 w-5 text-[#1D3557] dark:text-[#F4A261]" />
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
              <div className="p-5 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-300 pl-8">{answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function FaqAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = items.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-6 relative">
        <Input
          type="text"
          placeholder="Buscar preguntas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-[#F4A261] focus:ring-[#F4A261]"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              No se encontraron preguntas que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
