"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

export function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const productLinks = [
    { name: "Módulos", href: "#modulos" },
    { name: "Sectores", href: "#sectores" },
    { name: "Integraciones", href: "#integraciones" },
  ]

  const companyLinks = [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Blog", href: "#blog" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "navbar-blur shadow-lg py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo width={160} height={50} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Producto Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("producto")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <span className="font-medium">Producto</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === "producto" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-xl shadow-xl py-2 border border-gray-200 dark:border-gray-700"
                  >
                    {productLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Empresa Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("empresa")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <span className="font-medium">Empresa</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {activeDropdown === "empresa" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 glass-effect rounded-xl shadow-xl py-2 border border-gray-200 dark:border-gray-700"
                  >
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="#precios"
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
            >
              Precios
            </Link>
            <Link
              href="#contacto"
              className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
            >
              Contacto
            </Link>
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className="text-gray-700 dark:text-gray-300">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white px-6">
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass-effect rounded-xl p-4 space-y-4"
            >
              <Link href="#modulos" className="block text-gray-700 dark:text-gray-300 py-2">
                Módulos
              </Link>
              <Link href="#sectores" className="block text-gray-700 dark:text-gray-300 py-2">
                Sectores
              </Link>
              <Link href="#precios" className="block text-gray-700 dark:text-gray-300 py-2">
                Precios
              </Link>
              <Link href="#contacto" className="block text-gray-700 dark:text-gray-300 py-2">
                Contacto
              </Link>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <Button variant="ghost" className="w-full">
                  Iniciar Sesión
                </Button>
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">Solicitar Demo</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
