"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hola! Soy Vantyx. ¿En qué puedo ayudarte?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [unreadCount, setUnreadCount] = useState(0)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    setTimeout(() => {
      const responses = [
        "Gracias por tu pregunta. Puedo ayudarte con información sobre nuestros planes.",
        "¿Te gustaría conocer más sobre facturación electrónica? Es nuestro módulo más popular.",
        "Tenemos soporte 24/7. ¿Hay algo específico que necesites?",
        "Podés ver una demostración en vivo. ¿Te interesa?",
        "Nuestros clientes reportan un 40% de aumento en productividad. ¿Querés saber cómo?",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setUnreadCount(messages.length - 1)
    }
  }, [messages, isOpen])

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) setUnreadCount(0)
        }}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-[#1D3557] text-white shadow-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 ring-4 ring-white dark:ring-gray-800"
      >
        <div className="relative">
          <MessageCircle className="h-7 w-7" />
          {unreadCount > 0 && !isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </motion.span>
          )}
        </div>
      </motion.button>

      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/5491112345678?text=Hola%20Vantyx%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-6 z-40 w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:shadow-xl hover:bg-green-600 transition-all duration-300"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371 0-.57 0-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.719.738 5.38 2.137 7.797l-2.262 6.257 6.541-2.236c2.261 1.226 4.812 1.829 7.316 1.829 9.79 0 17.439-7.65 17.439-17.439 0-4.68-1.814-9.08-5.112-12.379-3.297-3.297-7.713-5.112-12.377-5.112" />
        </svg>
      </motion.a>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className={`fixed z-40 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col ${
              isMinimized 
                ? "bottom-28 right-4 sm:right-6 w-80 h-16" 
                : "bottom-28 right-4 sm:right-6 w-full max-w-sm h-96 sm:max-w-md"
            } transition-all duration-300`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1D3557] to-[#16273d] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base truncate">Vantyx Chat</h3>
                  <p className="text-xs text-gray-200">Respuesta inmediata</p>
                </div>
              </div>
              <div className="flex gap-1 flex-shrink-0">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-white/20 p-1.5 sm:p-2 rounded-lg transition-all"
                >
                  {isMinimized ? (
                    <Maximize2 className="h-4 w-4" />
                  ) : (
                    <Minimize2 className="h-4 w-4" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1.5 sm:p-2 rounded-lg transition-all"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs rounded-2xl px-3 sm:px-4 py-2 text-sm ${
                          message.sender === "user"
                            ? "bg-[#1D3557] text-white rounded-br-none"
                            : "bg-gray-100 dark:bg-gray-700 text-[#212121] dark:text-white rounded-bl-none"
                        }`}
                      >
                        <p>{message.text}</p>
                        <p className="text-xs mt-1 opacity-60">
                          {message.timestamp.toLocaleTimeString("es-AR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-3 sm:p-4 flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Escribe tu pregunta..."
                    className="flex-1 rounded-full px-3 sm:px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-[#212121] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-[#1D3557] hover:bg-[#16273d] text-white rounded-full p-2 transition-all"
                  >
                    <Send className="h-5 w-5" />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
