"use client"

import { motion } from "framer-motion"
import { Shield, Users, Zap, Clock, Award, Lock } from 'lucide-react'

interface TrustItem {
  icon: React.ReactNode
  title: string
  description: string
  metric?: string
}

const trustItems: TrustItem[] = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Confianza de Miles de PyMEs",
    description: "Más de 5,000 empresas argentinas ya utilizan Vantyx para gestionar su negocio",
    metric: "5,000+"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "100% Seguro y Encriptado",
    description: "Cumplimiento con normas de seguridad internacionales. Respaldo seguro de tus datos por 10 años",
    metric: "SSL 256-bit"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Soporte Local en Argentina",
    description: "Equipo de soporte 24/7 en español. Capacitación incluida en todos los planes",
    metric: "24/7"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Garantía de Satisfacción",
    description: "Prueba gratis sin tarjeta de crédito. Cancelación sin permanencia en cualquier momento",
    metric: "14 días"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Compatibilidad AFIP",
    description: "Facturación electrónica homologada, generación de CAE + QR automáticos",
    metric: "100%"
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Certificación ISO 27001",
    description: "Seguridad de la información garantizada. Cumplimiento de regulaciones argentinas",
    metric: "ISO 27001"
  }
]

export function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] dark:text-white mb-4">
            Por qué confían en Vantyx
          </h2>
          <p className="text-xl text-[#424242] dark:text-gray-400 max-w-2xl mx-auto">
            Seguridad, soporte local y tecnología pensada para PyMEs argentinas
          </p>
        </motion.div>

        {/* Trust Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-[#1D3557] to-[#0f1d2d] flex items-center justify-center text-[#F4A261] group-hover:shadow-lg transition-shadow"
              >
                {item.icon}
              </motion.div>

              {/* Metric */}
              {item.metric && (
                <div className="mb-3">
                  <span className="text-3xl font-bold text-[#1D3557] dark:text-[#F4A261]">
                    {item.metric}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-lg font-bold text-[#212121] dark:text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#424242] dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#1D3557] to-[#0f1d2d] rounded-2xl p-8 md:p-12 text-center text-white border border-[#F4A261]/30"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Únete a las PyMEs que automatizaron su gestión
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Comienza tu prueba gratis hoy. Sin tarjeta de crédito, sin permanencia. Acceso completo a todos nuestros módulos.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-[#F4A261] text-[#1D3557] rounded-xl font-bold hover:bg-[#f5b17a] transition-all duration-300"
            onClick={() => {
              const contactSection = document.getElementById("contacto")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Comienza tu prueba gratis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
