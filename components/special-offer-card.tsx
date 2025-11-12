"use client"

import { motion } from "framer-motion"

interface SpecialOfferCardProps {
  onClick?: () => void
}

export function SpecialOfferCard({ onClick }: SpecialOfferCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F4A261] via-[#E88C51] to-[#D17C3A] p-8 md:p-12 shadow-2xl">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 border border-white/30">
          <span className="text-sm font-bold text-white tracking-wide">⚡ OFERTA LIMITADA</span>
        </div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda: Título y precio */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Paquete Web
              <br />
              Presencia Básica
            </h3>
            <p className="text-white/90 mb-6 text-base leading-relaxed">
              Tu página web profesional, rápida y lista para crecer.
            </p>

            {/* Precio destacado */}
            <div className="bg-white/95 rounded-xl p-6 mb-6">
              <p className="text-gray-600 text-sm font-medium mb-2">Precio especial</p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-[#1D3557]">$170.000</span>
              </div>
              <p className="text-xs text-gray-500 mt-3">*Sin incluir costo mensual de hosting</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClick}
              className="w-full md:w-auto bg-white text-[#1D3557] font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
            >
              Solicitar ahora
            </motion.button>
          </div>

          {/* Columna derecha: Características */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/20 text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white">1 página principal + 3 secciones</h4>
                <p className="text-white/80 text-sm mt-1">Estructura completa y profesional</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/20 text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white">Formulario de contacto integrado</h4>
                <p className="text-white/80 text-sm mt-1">Conecta directamente con tus clientes</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/20 text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white">Diseño adaptable (responsive)</h4>
                <p className="text-white/80 text-sm mt-1">Perfecto en celulares y tablets</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/20 text-white font-bold">
                  ✓
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white">Entrega rápida + soporte inicial</h4>
                <p className="text-white/80 text-sm mt-1">Estamos para ayudarte en el camino</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shine effect animado */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
        />
      </div>
    </motion.div>
  )
}
