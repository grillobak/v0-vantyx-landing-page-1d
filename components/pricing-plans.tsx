"use client"

import { motion } from "framer-motion"
import { Check, Star, Zap } from 'lucide-react'
import { AnimatedButton } from "@/components/animations/animated-button"

interface PricingPlan {
  name: string
  price: number
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
  badge?: string
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: 29,
    period: "mes",
    description: "Perfecto para emprendedores y pequeños negocios",
    features: [
      "Hasta 3 usuarios",
      "Contabilidad básica",
      "Facturación (100 comprobantes/mes)",
      "Inventario simple",
      "Reportes básicos",
      "Soporte por email"
    ],
    cta: "Comenzar ahora"
  },
  {
    name: "Professional",
    price: 79,
    period: "mes",
    description: "La opción más elegida para PyMEs en crecimiento",
    features: [
      "Hasta 15 usuarios",
      "Contabilidad completa",
      "Facturación ilimitada + Nota de débito/crédito",
      "Inventario avanzado",
      "CRM integrado",
      "Reportes personalizados",
      "Dashboard de métricas en vivo",
      "Libro IVA para AFIP",
      "Soporte prioritario 24/7"
    ],
    cta: "Solicitar asesoría ya",
    highlighted: true,
    badge: "Más elegido"
  },
  {
    name: "Enterprise",
    price: 199,
    period: "mes",
    description: "Para empresas con requisitos avanzados",
    features: [
      "Usuarios ilimitados",
      "Contabilidad premium",
      "Facturación electrónica con CAE + QR",
      "Inventario por sucursal",
      "CRM con automatización",
      "Nómina y gestión de empleados",
      "APIs personalizadas",
      "Sincronización con sistemas externos",
      "Respaldo seguro por 10 años",
      "Soporte dedicado y capacitación"
    ],
    cta: "Me interesa crecer con Vantyx"
  }
]

export function PricingPlans() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="planes" className="py-20 bg-white dark:bg-gray-900">
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
            Planes pensados para tu PyME
          </h2>
          <p className="text-xl text-[#424242] dark:text-gray-400 max-w-2xl mx-auto">
            Elige el plan que se adapte a tu negocio. Todos incluyen soporte en español y respaldo local.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 bg-gradient-to-br from-[#1D3557] to-[#0f1d2d] text-white shadow-2xl ring-2 ring-[#F4A261]"
                  : "bg-gray-50 dark:bg-gray-800 text-[#212121] dark:text-white border border-gray-200 dark:border-gray-700 hover:shadow-xl"
              }`}
            >
              {/* Badge "Más elegido" */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#F4A261] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-[#212121] dark:text-white"}`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-gray-200" : "text-[#424242] dark:text-gray-400"}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className={plan.highlighted ? "text-gray-200" : "text-[#424242] dark:text-gray-400"}>
                      /{plan.period}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${plan.highlighted ? "text-gray-200" : "text-[#666666] dark:text-gray-500"}`}>
                    Sin permanencia. Podés cancelar cuando quieras.
                  </p>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="mb-8"
                >
                  <AnimatedButton
                    size="lg"
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-[#F4A261] text-[#1D3557] hover:bg-[#f5b17a]"
                        : "bg-[#1D3557] text-white hover:bg-[#16273d]"
                    }`}
                  >
                    {plan.cta}
                  </AnimatedButton>
                </motion.div>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-[#F4A261]" : "text-[#1D3557] dark:text-cyan-400"
                      }`} />
                      <span className={`text-sm ${plan.highlighted ? "text-gray-100" : "text-[#424242] dark:text-gray-300"}`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Highlighted accent */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-2xl border-2 border-[#F4A261] opacity-50 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ / Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl border border-cyan-200 dark:border-cyan-800"
        >
          <div className="flex gap-4 items-start">
            <Zap className="h-6 w-6 text-[#1D3557] dark:text-[#F4A261] flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-[#212121] dark:text-white mb-2">¿Necesitas una solución personalizada?</h4>
              <p className="text-[#424242] dark:text-gray-400">
                Contáctanos para planes empresariales, integraciones especiales y soporte dedicado. Todos nuestros planes incluyen capacitación, soporte en español y respaldo seguro.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
