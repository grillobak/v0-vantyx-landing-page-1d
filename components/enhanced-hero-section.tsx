"use client"

import { motion } from "framer-motion"
import { Star, Shield } from "lucide-react"
import { AnimatedButton } from "@/components/animations/animated-button"
import Image from "next/image"

export function EnhancedHeroSection() {
  const badges = [
    { icon: <Shield className="h-4 w-4" />, text: "Sin permanencia" },
    { icon: <Star className="h-4 w-4" />, text: "5/5 en satisfacción" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-cyan-950 pt-24 pb-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md border border-gray-100 dark:border-gray-700"
                >
                  <span className="text-cyan-600 dark:text-cyan-400">{badge.icon}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900 dark:text-white">La plataforma</span>
              <br />
              <span className="vantyx-gradient-text">todo-en-uno</span>
              <br />
              <span className="text-gray-900 dark:text-white">para tu PyME</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
              Gestiona contabilidad, inventario, facturación y CRM desde una única plataforma intuitiva. Diseñada
              específicamente para empresas argentinas.
            </p>

            {/* Prominent Subtitle with Differential */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 rounded-lg p-4 mb-8 border border-cyan-200 dark:border-cyan-800">
              <p className="text-lg font-semibold text-[#1D3557] dark:text-[#F4A261] text-center">
                🎯 Automatiza tu gestión con un solo sistema y soporte local en Argentina
              </p>
            </div>

            {/* CTA - Solo Ver Módulos */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <AnimatedButton
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg rounded-xl border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:hover:bg-cyan-950 transition-all duration-300 bg-transparent"
                onClick={() => {
                  const modulesSection = document.getElementById("modulos")
                  if (modulesSection) {
                    modulesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Ver Módulos
              </AnimatedButton>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br from-cyan-400 to-blue-500"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">4.9/5</span>
                </div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Confianza de nuestros clientes</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 hover-lift">
              <Image
                src="/dashboard-vantyx.png"
                alt="Vantyx Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">100%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Seguro</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">4.9/5</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Satisfacción</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-[#1D3557] dark:border-[#F4A261] rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-1.5 h-1.5 bg-[#1D3557] dark:bg-[#F4A261] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
