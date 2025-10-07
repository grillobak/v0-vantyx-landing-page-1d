"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

// Base de conocimiento del chatbot
const knowledgeBase: { [key: string]: string } = {
  hola: "¡Hola! 👋 Soy el asistente virtual de Vantyx. Estoy aquí para ayudarte a conocer nuestro sistema ERP/CRM para PyMEs. ¿En qué puedo ayudarte hoy? Puedo contarte sobre nuestros planes, módulos, sectores, facturación o cómo contactarnos.",

  precios: `📊 **Nuestros Planes:**

🥉 **Emprendedor** - $50.000/mes
✓ 3 usuarios incluidos
✓ Gestión de productos
✓ Control de stock básico
✓ CRM básico
✓ Reportes básicos
✓ Soporte por email

🥈 **PyME** - $75.000/mes (Más Popular ⭐)
✓ 10 usuarios incluidos
✓ Todo lo del plan Emprendedor
✓ Facturación Electrónica
✓ CRM Avanzado
✓ Reportes personalizados
✓ Soporte Email + WhatsApp

🥇 **Empresarial** - Consultar precio
✓ Usuarios ilimitados
✓ Todo lo del plan PyME
✓ Múltiples sucursales
✓ Integración bancaria
✓ API personalizada
✓ Soporte 24/7 prioritario

¿Te gustaría saber más sobre algún plan en particular? 😊`,

  planes: `Tenemos 3 planes diseñados para diferentes necesidades:

**Plan Emprendedor ($50.000/mes):**
Ideal para emprendimientos y negocios pequeños que están comenzando. Incluye lo esencial para gestionar tu negocio: productos, stock, CRM básico y reportes.

**Plan PyME ($75.000/mes) - ⭐ MÁS POPULAR:**
Perfecto para empresas en crecimiento. Agrega facturación electrónica AFIP, CRM avanzado, reportes personalizados y soporte prioritario por WhatsApp.

**Plan Empresarial (Precio personalizado):**
Para empresas con necesidades avanzadas. Incluye usuarios ilimitados, múltiples sucursales, integración bancaria, API personalizada y soporte 24/7.

Todos los planes incluyen:
✅ Sin permanencia mínima
✅ Actualizaciones automáticas
✅ Backups diarios
✅ Capacitación inicial

¿Quieres más detalles de algún plan? 🎯`,

  modulos: `🎯 **Módulos Disponibles en Vantyx:**

📊 **Contabilidad**: Control de ingresos, egresos, impuestos y balances
👥 **CRM**: Gestión de clientes y oportunidades de venta
📦 **Inventario**: Stock en tiempo real con alertas
🧾 **Facturación Electrónica**: Facturas A, B, C y E con integración ARCA
📈 **Reportes**: Informes personalizados y análisis
⏱️ **Proyectos**: Seguimiento de tareas y tiempos
💰 **Ventas**: Gestión completa desde presupuestos hasta cobros
👔 **Empleados**: Registro de legajos y horarios
📧 **Email**: Envío y seguimiento de correos
📊 **Estadísticas**: Gráficos y KPIs en tiempo real
📱 **Móvil**: Acceso desde cualquier dispositivo

¿Quieres saber más sobre algún módulo específico? 🚀`,

  facturacion: `🧾 **Facturación Electrónica:**

Vantyx se integra con ARCA (consultar disponibilidad) para emisión de:
✅ Facturas A, B, C y E
✅ Notas de crédito y débito
✅ Envío automático por email
✅ Reportes de facturación detallados
✅ Cumplimiento legal argentino
✅ Generación con un solo clic

**Ventajas:**
🚀 Ahorra tiempo en emisión de facturas
📊 Control fiscal automático
💾 Almacenamiento seguro en la nube
📧 Envío automático a clientes
📱 Acceso desde cualquier dispositivo

La facturación electrónica está disponible desde el plan PyME ($75.000/mes). ¿Te gustaría solicitar una demo? 📞`,

  sectores: `🏢 **Sectores que Atendemos:**

🛒 **Comercio**: Inventario, punto de venta, facturación y fidelización
🌾 **Agropecuario**: Producción, campos, ganado y cosechas
💼 **Servicios**: Proyectos, facturación por horas y tareas
🏭 **Manufactura**: Producción, materias primas y órdenes
🏗️ **Construcción**: Obras, presupuestos y materiales
⚕️ **Salud**: Pacientes, turnos, historias clínicas

Vantyx se adapta a las necesidades específicas de cada sector con módulos configurables y reportes personalizados. ¿Tu empresa pertenece a alguno de estos sectores? 🎯`,

  contacto: `📞 **Información de Contacto:**

📱 **WhatsApp/Teléfono**: +54 379 4601984
📧 **Email**: vantyx.ar@gmail.com

🕐 **Horarios de Atención:**
Lunes a Viernes: 9:00 - 18:00 hs
Sábados: 9:00 - 13:00 hs

🌐 **Redes Sociales:**
Facebook: /vantyx.ar
Instagram: @vantyx.arg
TikTok: @vantyx.net

📍 Ubicación: Corrientes, Argentina (Atención nacional)

¿Prefieres que te contactemos nosotros? Completa el formulario en nuestra sección de contacto y un asesor se comunicará contigo a la brevedad. 😊`,

  demo: `🎬 **Demo Gratuita de Vantyx:**

¡Solicita una demostración personalizada sin compromiso!

**¿Qué incluye?**
✅ Presentación en vivo del sistema
✅ Adaptación a tu sector específico
✅ Respuestas a todas tus preguntas
✅ Asesoramiento personalizado
✅ Duración: 30-45 minutos
✅ 100% Online (por videollamada)

**¿Cómo solicitar?**
1. Llámanos al +54 379 4601984
2. Envía WhatsApp
3. Completa el formulario en nuestra web
4. Escribe a vantyx.ar@gmail.com

Nuestro equipo coordinará una fecha y horario conveniente para ti. ¡Descubre cómo Vantyx puede transformar tu negocio! 🚀`,

  soporte: `🛠️ **Soporte Técnico por Plan:**

**Plan Emprendedor:**
📧 Soporte por email
⏱️ Respuesta en 24-48 horas
📚 Acceso a tutoriales y documentación
🎓 Capacitación inicial incluida

**Plan PyME:**
📧 Soporte por email
💬 Soporte prioritario por WhatsApp
⏱️ Respuesta en 12-24 horas
📚 Webinars mensuales
🎓 Capacitación personalizada

**Plan Empresarial:**
📞 Soporte 24/7 dedicado
💬 WhatsApp prioritario
📧 Email con respuesta inmediata
👨‍💻 Asesor técnico asignado
🎓 Capacitación ilimitada
🔧 Soporte de implementación

Todos los planes incluyen actualizaciones automáticas y mantenimiento del sistema. ¿Necesitas ayuda ahora? ¡Contáctanos! 📞`,

  integracion: `🔗 **Integraciones Disponibles:**

**Facturación:**
✅ ARCA (consultar disponibilidad)
✅ Facturación electrónica AFIP

**Pagos:**
✅ Mercado Pago
✅ Transferencias bancarias
✅ Próximamente: tarjetas de crédito

**Comercio:**
✅ MercadoLibre
✅ Tiendas online

**Comunicación:**
✅ Email marketing
✅ WhatsApp Business

**Contabilidad:**
✅ Exportación a sistemas contables
✅ Reportes personalizados

**Bancos:**
✅ Integración bancaria (Plan Empresarial)
✅ Conciliación automática

¿Necesitas una integración específica? ¡Consultanos! Trabajamos constantemente en nuevas integraciones. 🔌`,

  "cuanto cuesta": `📊 **Precios de Vantyx:**

🥉 Emprendedor: $50.000/mes
🥈 PyME: $75.000/mes ⭐ (Más popular)
🥇 Empresarial: Consultar

Todos los planes:
✅ Sin permanencia mínima
✅ Actualizaciones incluidas
✅ Backups automáticos
✅ Soporte técnico

¿Quieres saber qué incluye cada plan? Pregúntame sobre "planes" 😊`,

  caracteristicas: `✨ **Características Principales de Vantyx:**

🎯 **Gestión Completa:**
• Todo en una sola plataforma
• Interfaz intuitiva y fácil de usar
• Acceso desde cualquier dispositivo

🔒 **Seguridad:**
• Encriptación de datos
• Backups automáticos diarios
• Servidores seguros en Argentina

📊 **Reportes y Análisis:**
• Gráficos en tiempo real
• KPIs personalizables
• Exportación a Excel/PDF

👥 **Multiusuario:**
• Desde 3 hasta usuarios ilimitados
• Permisos configurables
• Trazabilidad de acciones

📱 **Acceso Móvil:**
• App responsive
• Funciona offline
• Sincronización automática

¿Quieres profundizar en alguna característica? 🚀`,

  ayuda: `🤝 **¿Cómo puedo ayudarte?**

Puedo responder sobre:

💰 **Planes y Precios**: Escribe "precios" o "planes"
🎯 **Módulos**: Escribe "modulos"
🧾 **Facturación**: Escribe "facturacion"
🏢 **Sectores**: Escribe "sectores"
📞 **Contacto**: Escribe "contacto"
🎬 **Demo**: Escribe "demo"
🛠️ **Soporte**: Escribe "soporte"

¿Tienes alguna pregunta específica? Estoy aquí para ayudarte 😊`,
}

export function VantyxChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! 👋 Soy el asistente de Vantyx. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Auto-scroll al final cuando hay nuevos mensajes
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight
      }
    }
  }, [messages, isTyping])

  // Focus en input cuando se abre el chat
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const findResponse = (userMessage: string): string => {
    const messageLower = userMessage.toLowerCase().trim()

    // Búsqueda exacta primero
    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (messageLower === key.toLowerCase()) {
        return response
      }
    }

    // Búsqueda por palabras clave
    for (const [key, response] of Object.entries(knowledgeBase)) {
      if (messageLower.includes(key.toLowerCase())) {
        return response
      }
    }

    // Respuestas alternativas para palabras comunes
    if (
      messageLower.includes("costo") ||
      messageLower.includes("precio") ||
      messageLower.includes("valor") ||
      messageLower.includes("tarifa")
    ) {
      return knowledgeBase["cuanto cuesta"]
    }

    if (
      messageLower.includes("funcionalidad") ||
      messageLower.includes("funcion") ||
      messageLower.includes("que hace") ||
      messageLower.includes("caracteristica")
    ) {
      return knowledgeBase.caracteristicas
    }

    if (messageLower.includes("ayuda") || messageLower.includes("info") || messageLower.includes("informacion")) {
      return knowledgeBase.ayuda
    }

    // Respuesta por defecto
    return `Disculpa, no tengo información específica sobre eso. 🤔

Puedo ayudarte con:
• Planes y precios
• Módulos disponibles
• Facturación electrónica
• Sectores que atendemos
• Información de contacto
• Solicitar una demo

O si prefieres, puedes contactarnos directamente:
📱 WhatsApp: +54 379 4601984
📧 Email: vantyx.ar@gmail.com

¿En qué más puedo ayudarte? 😊`
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simular delay de respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: findResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Botón flotante del chatbot */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-[#1D3557] dark:bg-[#2563eb] text-white p-4 rounded-full shadow-xl hover:bg-[#152A45] dark:hover:bg-[#1e40af] transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.5 }}
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
            className="fixed bottom-40 right-6 z-50 w-96 h-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
          >
            {/* Header del chat */}
            <div className="bg-gradient-to-r from-[#1D3557] to-[#2563eb] text-white p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-[#1D3557]" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h3 className="font-semibold">Vantyx Assistant</h3>
                  <p className="text-xs text-gray-200">En línea • Responde al instante</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Área de mensajes */}
            <ScrollArea className="flex-1 p-4 bg-gray-50 dark:bg-gray-800" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start space-x-2 ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div className={`p-2 rounded-full ${message.sender === "user" ? "bg-[#1D3557]" : "bg-[#F4A261]"}`}>
                      {message.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] p-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-[#1D3557] text-white rounded-br-none"
                          : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-md"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString("es-AR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Indicador de escritura */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start space-x-2"
                  >
                    <div className="p-2 rounded-full bg-[#F4A261]">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl rounded-bl-none shadow-md">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -8, 0] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input del chat */}
            <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 text-sm focus:border-[#2563eb] dark:focus:border-[#2563eb]"
                  disabled={isTyping}
                  maxLength={500}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isTyping || !inputValue.trim()}
                  className="bg-[#1D3557] hover:bg-[#152A45] dark:bg-[#2563eb] dark:hover:bg-[#1e40af] text-white"
                  size="icon"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Vantyx AI</p>
                <p className="text-xs text-gray-400">{inputValue.length}/500</p>
              </div>

              {/* Sugerencias rápidas */}
              <div className="flex flex-wrap gap-2 mt-3">
                {["precios", "modulos", "demo"].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      setInputValue(suggestion)
                      setTimeout(() => handleSendMessage(), 100)
                    }}
                    className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                    disabled={isTyping}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
