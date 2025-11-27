"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Cookie, X, Settings, Check } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  essential: boolean
  analytics: boolean
  functional: boolean
  advertising: boolean
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    functional: false,
    advertising: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = { essential: true, analytics: true, functional: true, advertising: true }
    localStorage.setItem("cookie_consent", JSON.stringify(allAccepted))
    localStorage.setItem("cookie_consent_date", new Date().toISOString())
    setIsVisible(false)
  }

  const acceptSelected = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(preferences))
    localStorage.setItem("cookie_consent_date", new Date().toISOString())
    setIsVisible(false)
  }

  const rejectOptional = () => {
    const essentialOnly = { essential: true, analytics: false, functional: false, advertising: false }
    localStorage.setItem("cookie_consent", JSON.stringify(essentialOnly))
    localStorage.setItem("cookie_consent_date", new Date().toISOString())
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a2d4a] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Main Banner */}
            {!showSettings ? (
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F4A261]/20 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-[#F4A261]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1D3557] dark:text-white mb-2">Utilizamos cookies</h3>
                    <p className="text-[#424242] dark:text-gray-300 text-sm mb-4">
                      Utilizamos cookies propias y de terceros (incluyendo Google Analytics y Google AdSense) para
                      mejorar tu experiencia y mostrar anuncios personalizados.{" "}
                      <Link href="/politica-cookies" className="text-[#F4A261] hover:underline">
                        Más información
                      </Link>
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={acceptAll}
                        className="px-5 py-2.5 bg-[#1D3557] hover:bg-[#2a4a6e] text-white rounded-lg font-medium transition-colors text-sm"
                      >
                        Aceptar todas
                      </button>
                      <button
                        onClick={rejectOptional}
                        className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-[#1D3557] dark:text-white rounded-lg font-medium transition-colors text-sm"
                      >
                        Solo esenciales
                      </button>
                      <Link
                        href="/politica-cookies"
                        className="px-5 py-2.5 border border-[#1D3557] dark:border-gray-500 text-[#1D3557] dark:text-white rounded-lg font-medium hover:bg-[#1D3557]/10 transition-colors text-sm inline-flex items-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Configurar
                      </Link>
                    </div>
                  </div>
                  <button
                    onClick={rejectOptional}
                    className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              /* Settings Panel */
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#1D3557] dark:text-white">Configuración de Cookies</h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Essential */}
                  <div className="flex items-center justify-between p-4 bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg">
                    <div>
                      <h4 className="font-medium text-[#1D3557] dark:text-white">Cookies Esenciales</h4>
                      <p className="text-sm text-[#666666] dark:text-gray-400">
                        Necesarias para el funcionamiento del sitio
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-5 h-5" />
                      <span className="text-sm font-medium">Siempre activas</span>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between p-4 bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg">
                    <div>
                      <h4 className="font-medium text-[#1D3557] dark:text-white">Cookies Analíticas</h4>
                      <p className="text-sm text-[#666666] dark:text-gray-400">
                        Google Analytics - Nos ayudan a mejorar el sitio
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F4A261]"></div>
                    </label>
                  </div>

                  {/* Functional */}
                  <div className="flex items-center justify-between p-4 bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg">
                    <div>
                      <h4 className="font-medium text-[#1D3557] dark:text-white">Cookies Funcionales</h4>
                      <p className="text-sm text-[#666666] dark:text-gray-400">Recuerdan tus preferencias</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F4A261]"></div>
                    </label>
                  </div>

                  {/* Advertising */}
                  <div className="flex items-center justify-between p-4 bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg">
                    <div>
                      <h4 className="font-medium text-[#1D3557] dark:text-white">Cookies Publicitarias</h4>
                      <p className="text-sm text-[#666666] dark:text-gray-400">
                        Google AdSense - Anuncios personalizados
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.advertising}
                        onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F4A261]"></div>
                    </label>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={acceptSelected}
                    className="flex-1 px-5 py-2.5 bg-[#1D3557] hover:bg-[#2a4a6e] text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    Guardar preferencias
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 bg-[#F4A261] hover:bg-[#e89550] text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
