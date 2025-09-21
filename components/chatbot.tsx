"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Botón flotante del chatbot */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-20 z-50 bg-[#1D3557] text-white p-4 rounded-full shadow-lg hover:bg-[#152A45] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Ventana del chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Header del chat */}
            <div className="bg-[#1D3557] text-white p-4 rounded-t-lg flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold">Asistente Vantyx</h3>
                  <p className="text-xs text-gray-300">¿En qué puedo ayudarte?</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={toggleChat} className="text-white hover:bg-white/20 p-1">
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Área de mensajes */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {/* Mensaje de bienvenida */}
                {messages.length === 0 && (
                  <div className="flex items-start space-x-2">
                    <div className="bg-[#F4A261] p-2 rounded-full">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg max-w-xs">
                      <p className="text-sm text-gray-800 dark:text-gray-200">
                        ¡Hola! 👋 Soy el asistente de Vantyx. Puedo ayudarte con información sobre nuestros módulos,
                        planes y cómo podemos optimizar tu negocio. ¿Qué te gustaría saber?
                      </p>
                    </div>
                  </div>
                )}

                {/* Mensajes del chat */}
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-2 ${
                      message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div className={`p-2 rounded-full ${message.role === "user" ? "bg-[#1D3557]" : "bg-[#F4A261]"}`}>
                      {message.role === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg max-w-xs ${
                        message.role === "user"
                          ? "bg-[#1D3557] text-white"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}

                {/* Indicador de carga */}
                {isLoading && (
                  <div className="flex items-start space-x-2">
                    <div className="bg-[#F4A261] p-2 rounded-full">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input del chat */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 text-sm"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={isLoading || !input.trim()}
                  className="bg-[#1D3557] hover:bg-[#152A45] text-white"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">Powered by Vantyx AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
