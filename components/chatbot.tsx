"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    // Crear mensaje del asistente vacío
    const assistantMessageId = (Date.now() + 1).toString()
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: "assistant",
      content: "",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, assistantMessage])

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const reader = response.body?.getReader()
      if (!reader) {
        throw new Error("No se pudo leer la respuesta")
      }

      const decoder = new TextDecoder()
      let assistantContent = ""

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })

        // Procesar cada línea del chunk
        const lines = chunk.split("\n")

        for (const line of lines) {
          if (!line.trim()) continue

          // Buscar solo líneas que contengan text-delta
          if (line.includes('"type":"text-delta"') && line.includes('"textDelta"')) {
            try {
              // Extraer el JSON de la línea
              let jsonStr = line
              if (line.startsWith("0:")) {
                jsonStr = line.slice(2)
              } else if (line.startsWith("data: ")) {
                jsonStr = line.slice(6)
              }

              const data = JSON.parse(jsonStr)

              if (data.type === "text-delta" && data.textDelta) {
                assistantContent += data.textDelta
                setMessages((prev) =>
                  prev.map((msg) => (msg.id === assistantMessageId ? { ...msg, content: assistantContent } : msg)),
                )
              }
            } catch (parseError) {
              // Ignorar errores de parsing
              continue
            }
          }
        }
      }

      // Verificar que se recibió contenido
      if (!assistantContent.trim()) {
        throw new Error("No se recibió respuesta del asistente")
      }
    } catch (error) {
      console.error("Error en el chat:", error)
      setError("Hubo un problema con la conexión. Por favor, intenta nuevamente.")

      // Remover el mensaje del asistente vacío
      setMessages((prev) => prev.filter((msg) => msg.id !== assistantMessageId))

      // Agregar mensaje de error
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content:
          "Lo siento, hubo un problema técnico. Por favor, intenta nuevamente o contáctanos directamente por WhatsApp al +54 379 4601984 📱",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([])
    setError(null)
  }

  const retryLastMessage = () => {
    if (messages.length >= 2) {
      const lastUserMessage = messages[messages.length - 2]
      if (lastUserMessage.role === "user") {
        setInput(lastUserMessage.content)
        // Remover los últimos dos mensajes (usuario y asistente con error)
        setMessages((prev) => prev.slice(0, -2))
        setError(null)
      }
    }
  }

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
        aria-label="Abrir chat de asistencia"
      >
        <MessageCircle className="w-6 h-6" />
        <motion.div
          className="absolute -top-1 -right-1 w-3 h-3 bg-[#F4A261] rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
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
                <div className="relative">
                  <Bot className="w-5 h-5" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Asistente Vantyx</h3>
                  <p className="text-xs text-gray-300">En línea • Responde al instante</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {messages.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearChat}
                    className="text-white hover:bg-white/20 p-1"
                    title="Limpiar conversación"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={toggleChat} className="text-white hover:bg-white/20 p-1">
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Error banner */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-3 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <div className="flex-1">
                  <p className="text-sm text-red-700 dark:text-red-300">Hubo un problema con la conexión.</p>
                  <button
                    onClick={retryLastMessage}
                    className="text-sm text-red-600 dark:text-red-400 underline hover:no-underline mt-1"
                  >
                    Reintentar último mensaje
                  </button>
                </div>
              </div>
            )}

            {/* Área de mensajes */}
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
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
                        planes y cómo podemos optimizar tu negocio.
                      </p>
                      <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">
                        ¿Qué te gustaría saber? Puedes preguntarme sobre:
                      </p>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                        <li>• Módulos disponibles</li>
                        <li>• Planes y precios</li>
                        <li>• Sectores que atendemos</li>
                        <li>• Cómo solicitar una demo</li>
                      </ul>
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
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString("es-AR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
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
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 text-sm"
                  disabled={isLoading}
                  maxLength={500}
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
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Vantyx AI</p>
                <p className="text-xs text-gray-400">{input.length}/500</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
