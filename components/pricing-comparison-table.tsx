"use client"

import { motion } from "framer-motion"
import { Check, X, Star } from "lucide-react"
import { AnimatedButton } from "@/components/animations/animated-button"

interface PlanFeature {
  name: string
  emprendedor: boolean | string
  pyme: boolean | string
  empresarial: boolean | string
}

const features: PlanFeature[] = [
  {
    name: "Usuarios incluidos",
    emprendedor: "3 usuarios",
    pyme: "10 usuarios",
    empresarial: "Ilimitados",
  },
  {
    name: "Gestión de Productos",
    emprendedor: true,
    pyme: true,
    empresarial: true,
  },
  {
    name: "Control de Stock",
    emprendedor: true,
    pyme: true,
    empresarial: true,
  },
  {
    name: "Facturación Electrónica",
    emprendedor: false,
    pyme: true,
    empresarial: true,
  },
  {
    name: "CRM Básico",
    emprendedor: true,
    pyme: true,
    empresarial: true,
  },
  {
    name: "CRM Avanzado",
    emprendedor: false,
    pyme: true,
    empresarial: true,
  },
  {
    name: "Reportes Básicos",
    emprendedor: true,
    pyme: true,
    empresarial: true,
  },
  {
    name: "Reportes Personalizados",
    emprendedor: false,
    pyme: true,
    empresarial: true,
  },
  {
    name: "Múltiples Sucursales",
    emprendedor: false,
    pyme: false,
    empresarial: true,
  },
  {
    name: "Integración Bancaria",
    emprendedor: false,
    pyme: false,
    empresarial: true,
  },
  {
    name: "Soporte",
    emprendedor: "Email",
    pyme: "Email + WhatsApp",
    empresarial: "24/7 Prioritario",
  },
  {
    name: "API Personalizada",
    emprendedor: false,
    pyme: false,
    empresarial: true,
  },
]

export function PricingComparisonTable() {
  const renderCell = (value: boolean | string) => {
    if (typeof value === "string") {
      return <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}</span>
    }
    return value ? (
      <Check className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto" />
    ) : (
      <X className="h-5 w-5 text-gray-300 dark:text-gray-600 mx-auto" />
    )
  }

  return (
    <div className="w-full h-auto">
      {/* Mobile View - Cards */}
      <div className="md:hidden space-y-6 pb-8">
        {/* Emprendedor Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 h-auto"
        >
          <h3 className="text-2xl font-bold text-[#1D3557] dark:text-white mb-2">Emprendedor</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-[#1D3557] dark:text-[#F4A261]">$87.000</span>
            <span className="text-gray-500 dark:text-gray-400">/mes</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Ideal para emprendimientos y negocios pequeños
          </p>
          <AnimatedButton
            className="w-full bg-[#1D3557] hover:bg-[#152A45] text-white mb-6"
            onClick={() => {
              const contactSection = document.getElementById("contacto")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Solicitar
          </AnimatedButton>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center justify-between text-sm py-2">
                <span className="text-gray-700 dark:text-gray-300">{feature.name}</span>
                {renderCell(feature.emprendedor)}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* PyME Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-[#1D3557] dark:border-[#F4A261] relative h-auto"
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#1D3557] dark:bg-[#F4A261] text-white dark:text-gray-800 px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 z-10">
            <Star className="h-3 w-3 fill-current" />
            Más Popular
          </div>
          <h3 className="text-2xl font-bold text-[#1D3557] dark:text-white mb-2 mt-2">PyME</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-[#1D3557] dark:text-[#F4A261]">$112.000</span>
            <span className="text-gray-500 dark:text-gray-400">/mes</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Perfecto para empresas en crecimiento</p>
          <AnimatedButton
            className="w-full bg-[#1D3557] hover:bg-[#152A45] text-white mb-6"
            onClick={() => {
              const contactSection = document.getElementById("contacto")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Solicitar
          </AnimatedButton>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center justify-between text-sm py-2">
                <span className="text-gray-700 dark:text-gray-300">{feature.name}</span>
                {renderCell(feature.pyme)}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Empresarial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border-2 border-gray-200 dark:border-gray-700 h-auto"
        >
          <h3 className="text-2xl font-bold text-[#1D3557] dark:text-white mb-2">Empresarial</h3>
          <div className="mb-4">
            <span className="text-4xl font-bold text-[#1D3557] dark:text-[#F4A261]">Consultar</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Para empresas con necesidades avanzadas</p>
          <AnimatedButton
            className="w-full bg-[#1D3557] hover:bg-[#152A45] text-white mb-6"
            onClick={() => {
              const contactSection = document.getElementById("contacto")
              contactSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Solicitar
          </AnimatedButton>
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center justify-between text-sm py-2">
                <span className="text-gray-700 dark:text-gray-300">{feature.name}</span>
                {renderCell(feature.empresarial)}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Desktop View - Table */}
      <div className="hidden md:block w-full pb-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl">
            <div className="w-full">
              <table className="w-full">
                {/* Table Header */}
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-8 text-left align-top w-1/4">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Características
                      </span>
                    </th>
                    <th scope="col" className="px-6 py-8 text-center align-top w-1/4">
                      <div className="space-y-3 flex flex-col items-center">
                        <div className="text-xl font-bold text-[#1D3557] dark:text-white">Emprendedor</div>
                        <div>
                          <span className="text-3xl font-bold text-[#1D3557] dark:text-[#F4A261]">$87.000</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">/mes</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 px-2">Para emprendimientos</p>
                        <AnimatedButton
                          size="sm"
                          className="bg-[#1D3557] hover:bg-[#152A45] text-white mt-2"
                          onClick={() => {
                            const contactSection = document.getElementById("contacto")
                            contactSection?.scrollIntoView({ behavior: "smooth" })
                          }}
                        >
                          Solicitar
                        </AnimatedButton>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-8 text-center align-top bg-blue-50 dark:bg-blue-900/20 relative w-1/4"
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1D3557] dark:bg-[#F4A261] text-white dark:text-gray-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-10 shadow-lg">
                        <Star className="h-3 w-3 fill-current" />
                        Más Popular
                      </div>
                      <div className="space-y-3 flex flex-col items-center pt-2">
                        <div className="text-xl font-bold text-[#1D3557] dark:text-white">PyME</div>
                        <div>
                          <span className="text-3xl font-bold text-[#1D3557] dark:text-[#F4A261]">$112.000</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">/mes</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 px-2">Para empresas en crecimiento</p>
                        <AnimatedButton
                          size="sm"
                          className="bg-[#1D3557] hover:bg-[#152A45] text-white mt-2"
                          onClick={() => {
                            const contactSection = document.getElementById("contacto")
                            contactSection?.scrollIntoView({ behavior: "smooth" })
                          }}
                        >
                          Solicitar
                        </AnimatedButton>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-8 text-center align-top w-1/4">
                      <div className="space-y-3 flex flex-col items-center">
                        <div className="text-xl font-bold text-[#1D3557] dark:text-white">Empresarial</div>
                        <div>
                          <span className="text-3xl font-bold text-[#1D3557] dark:text-[#F4A261]">Consultar</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 px-2">Soluciones avanzadas</p>
                        <AnimatedButton
                          size="sm"
                          className="bg-[#1D3557] hover:bg-[#152A45] text-white mt-2"
                          onClick={() => {
                            const contactSection = document.getElementById("contacto")
                            contactSection?.scrollIntoView({ behavior: "smooth" })
                          }}
                        >
                          Solicitar
                        </AnimatedButton>
                      </div>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {features.map((feature, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03 }}
                      className={idx % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-800/50"}
                    >
                      <td className="px-6 py-5 text-sm font-medium text-gray-900 dark:text-white align-middle">
                        {feature.name}
                      </td>
                      <td className="px-6 py-5 text-center align-middle">{renderCell(feature.emprendedor)}</td>
                      <td className="px-6 py-5 text-center bg-blue-50/50 dark:bg-blue-900/10 align-middle">
                        {renderCell(feature.pyme)}
                      </td>
                      <td className="px-6 py-5 text-center align-middle">{renderCell(feature.empresarial)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center px-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Todos los planes incluyen soporte técnico y actualizaciones automáticas. Sin permanencia mínima.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
