"use client"

import { Mail, Phone, ArrowRight, Check, FileText, Package, Users, DollarSign, Building2, Facebook, Instagram, Zap, Headphones, Link2, Settings, CreditCard, Database, Shield, RefreshCw, HelpCircle, ChevronDown } from 'lucide-react'
import Link from "next/link"
import { Logo } from "@/components/logo"
import { GoogleForm } from "@/components/google-form"
import {
  FadeIn,
  SlideInLeft,
  SlideInRight,
  SlideUp,
  Scale,
  Stagger,
  StaggerItem,
} from "@/components/animations/motion-container"
import { AnimatedIcon } from "@/components/animations/animated-icon"
import { AnimatedButton } from "@/components/animations/animated-button"
import { FeatureCard } from "@/components/feature-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { FaqAccordion } from "@/components/faq-accordion"
import type { FaqItem } from "@/components/faq-accordion"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SectorCard } from "@/components/sector-card"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // Añadido AnimatePresence

// Nuevos imports
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { PricingComparisonTable } from "@/components/pricing-comparison-table"
import { FacebookCarousel } from "@/components/facebook-carousel"
import { VantyxChatbot } from "@/components/vantyx-chatbot"
import { SpecialOfferCard } from "@/components/special-offer-card"
import { WebServiceCard } from "@/components/web-service-card" // Importado WebServiceCard

export default function Home() {
  // Módulos con sus descripciones
  const modules = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Contabilidad",
      description: "Control total de ingresos, egresos, impuestos y balances contables.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "CRM",
      description: "Gestión de clientes y oportunidades de venta, con seguimiento de interacciones.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      title: "Inventario",
      description: "Administración de stock en tiempo real con alertas por niveles mínimos.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
      title: "Facturación",
      description: "Emisión de facturas electrónicas AFIP tipo A, B y C con control fiscal.",
      isSpecial: true, // Nuevo campo
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 110 9H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
      title: "Reportes",
      description: "Informes personalizados de ventas, compras, finanzas y desempeño.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Proyectos",
      description: "Seguimiento de tareas, tiempos y responsables para cada proyecto.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      title: "Ventas",
      description: "Gestión integral del proceso de venta, desde presupuestos hasta cobros.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Empleados",
      description: "Registro de legajos, horarios, permisos y tareas del personal.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "Email",
      description: "Envío y seguimiento de correos desde el sistema, integrando plantillas.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Estadísticas",
      description: "Gráficos y KPIs en tiempo real para tomar mejores decisiones.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Móvil",
      description: "Acceso desde celulares para operar el sistema desde cualquier lugar.",
    },
  ]

  // FAQ items con categorías e iconos
  const faqItems: FaqItem[] = [
    {
      question: "¿Qué tipo de empresas pueden usar Vantyx?",
      answer:
        "Vantyx está diseñado especialmente para pymes y emprendimientos de distintos rubros: comercio, servicios, agro, talleres, entre otros. Nuestro sistema es flexible y se adapta a las necesidades específicas de cada sector.",
      category: "general",
      icon: <Building2 className="h-5 w-5" />,
    },
    {
      question: "¿Necesito conocimientos técnicos para usar el sistema?",
      answer:
        "No. Vantyx es intuitivo, fácil de usar y con una curva de aprendizaje rápida. Además, ofrecemos capacitación inicial y soporte continuo para que puedas aprovechar al máximo todas las funcionalidades.",
      category: "general",
      icon: <HelpCircle className="h-5 w-5" />,
    },
    {
      question: "¿Puedo emitir facturas electrónicas con Vantyx?",
      answer:
        "Sí. Vantyx puede integrarse con ARCA (consultar disponibilidad) y permite emitir facturas electrónicas tipo A, B, C y E desde el sistema. Toda la facturación cumple con los requisitos legales argentinos.",
      category: "funcionalidades",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      question: "¿Cómo funciona el sistema de inventario?",
      answer:
        "El módulo de inventario permite administrar stock en tiempo real con alertas por niveles mínimos, control de entradas y salidas, múltiples ubicaciones, códigos de barras y reportes detallados de movimientos.",
      category: "funcionalidades",
      icon: <Package className="h-5 w-5" />,
    },
    {
      question: "¿Qué incluye el módulo CRM?",
      answer:
        "El CRM incluye gestión completa de clientes, seguimiento de oportunidades de venta, historial de interacciones, segmentación, campañas de marketing y reportes de performance comercial.",
      category: "funcionalidades",
      icon: <Users className="h-5 w-5" />,
    },
    {
      question: "¿Puedo acceder desde mi celular?",
      answer:
        "Sí, Vantyx es completamente responsive y cuenta con una app móvil que te permite operar el sistema desde cualquier lugar y dispositivo con conexión a internet.",
      category: "funcionalidades",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      question: "¿Cuánto cuesta Vantyx?",
      answer:
        "Tenemos planes desde $87.000/mes. El plan Emprendedor cuesta $87.000/mes, el plan PyME cuesta $112.000/mes, y el plan Empresarial es personalizado según tus necesidades. Todos los planes incluyen soporte. Además, ofrecemos el Paquete Web Presencia Básica a $170.000 (sin incluir hosting mensual) para quienes necesitan presencia online profesional.",
      category: "precios",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      question: "¿Hay contrato de permanencia?",
      answer:
        "No, nuestros planes son mensuales sin permanencia mínima. Puedes cancelar cuando quieras sin penalizaciones. Queremos que te quedes con nosotros porque estás satisfecho, no por obligación.",
      category: "precios",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Aceptamos transferencia bancaria, Mercado Pago, efectivo y próximamente tarjetas de crédito/débito. La facturación es mensual y puedes gestionar tu suscripción desde el panel de usuario.",
      category: "precios",
      icon: <CreditCard className="h-5 w-5" />,
    },
    {
      question: "¿Qué pasa si tengo un problema o duda usando el sistema?",
      answer:
        "Contamos con soporte técnico por WhatsApp, email y teléfono. Los planes Profesional y Empresarial incluyen soporte prioritario. Te ayudamos a resolver cualquier inconveniente lo antes posible.",
      category: "soporte",
      icon: <Headphones className="h-5 w-5" />,
    },
    {
      question: "¿Ofrecen capacitación?",
      answer:
        "Sí, todos nuestros planes incluyen capacitación inicial. Además, tenemos tutoriales en video, webinars mensuales y documentación completa. Los planes superiores incluyen capacitación personalizada.",
      category: "soporte",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      question: "¿Cómo se actualiza el sistema? ¿Tengo que hacer algo?",
      answer:
        "Las actualizaciones se realizan automáticamente sin que tengas que hacer nada. Siempre vas a tener la última versión disponible con todas las mejoras y nuevas funcionalidades.",
      category: "soporte",
      icon: <RefreshCw className="h-5 w-5" />,
    },
    {
      question: "¿Puedo migrar mis datos desde otro sistema?",
      answer:
        "Sí. Podemos ayudarte a importar productos, clientes, proveedores y otros datos desde tu sistema anterior (Excel, otro ERP, etc.). El equipo técnico te asiste en todo el proceso de migración.",
      category: "integracion",
      icon: <Database className="h-5 w-5" />,
    },
    {
      question: "¿Se integra con otras herramientas?",
      answer:
        "Vantyx se integra con múltiples servicios: ARCA para facturación electrónica, MercadoPago/MercadoLibre, email marketing, contabilidad, y muchos más. Consultá por integraciones específicas.",
      category: "integracion",
      icon: <Link2 className="h-5 w-5" />,
    },
    {
      question: "¿Los datos están seguros?",
      answer:
        "Absolutamente. Usamos encriptación de última generación, backups automáticos diarios, servidores seguros y cumplimos con todas las normativas de protección de datos. Tu información está totalmente protegida.",
      category: "integracion",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      question: "¿Qué ofrece Vantyx en desarrollo web?",
      answer:
        "Creamos sitios web profesionales para pymes, emprendedores y profesionales. Ofrecemos: Sitios Institucionales para mostrar tu empresa, Tiendas Online (E-commerce) con pasarelas de pago integradas, Landing Pages para campañas específicas, y Mantenimiento y Soporte continuo. Todo diseñado con foco en resultados, velocidad, SEO y adaptabilidad a todos los dispositivos.",
      category: "funcionalidades",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      question: "¿Cuál es el Paquete Web Presencia Básica y cuánto cuesta?",
      answer:
        "Es una oferta especial de $170.000 (sin incluir el costo mensual de hosting) que incluye: 1 página principal + 3 secciones, formulario de contacto funcional, diseño adaptable a celulares y tablets, entrega rápida y soporte inicial incluido. Es perfecto para pequeños negocios que necesitan presencia profesional online.",
      category: "precios",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      question: "¿Cuál es la diferencia entre un Sitio Institucional, una Tienda Online y una Landing Page?",
      answer:
        "Un Sitio Institucional presenta tu empresa con información completa, galerías y formularios de contacto. Una Tienda Online (E-commerce) permite vender productos online con catálogo, carrito de compras y cobros integrados. Una Landing Page es una página única optimizada para convertir visitantes en clientes para una campaña específica. Cada una tiene objetivos diferentes según tus necesidades.",
      category: "funcionalidades",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      question: "¿Mi sitio web estará optimizado para buscadores (SEO)?",
      answer:
        "Sí. Todos nuestros sitios web se desarrollan con mejores prácticas de SEO: estructura HTML semántica, velocidad de carga optimizada, URLs amigables, meta tags, sitemaps y optimización de imágenes. Esto ayuda a que tu sitio aparezca mejor posicionado en Google y reciba más visitantes.",
      category: "funcionalidades",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      question: "¿Puedo editar el contenido de mi sitio web después de que se entregue?",
      answer:
        "Sí. Todos nuestros sitios incluyen panel de administración intuitivo donde podés editar contenidos, imágenes, precios y más sin necesidad de conocimientos técnicos. También ofrecemos servicio de mantenimiento donde nos encargamos de los cambios por ti.",
      category: "soporte",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      question: "¿Cuánto tiempo tarda la entrega de un sitio web?",
      answer:
        "El Paquete Web Presencia Básica se entrega en 2-3 semanas. Sitios más complejos pueden tomar 4-8 semanas dependiendo de los requisitos y funcionalidades. Mantenemos comunicación constante durante todo el proceso de desarrollo.",
      category: "soporte",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      question: "¿Incluyen hosting en los servicios web?",
      answer:
        "El desarrollo web no incluye hosting mensual. El Paquete Web Presencia Básica tiene un costo único de $170.000. El hosting se contrata por separado según tus necesidades. Te recomendamos opciones confiables y manejamos la instalación del sitio por ti.",
      category: "precios",
      icon: <DollarSign className="h-5 w-5" />,
    },
  ]

  // Sectores
  const sectores = [
    {
      title: "Comercio",
      description: "Gestión de inventario, punto de venta, facturación electrónica y fidelización de clientes.",
      detailedDescription:
        "Vantyx integra módulos de ventas, punto de venta y stock con facturación electrónica y control de pagos. Permite seguimiento de clientes, ofertas, reportes de rendimiento y gestión de productos/servicios para que los comercios controlen todos sus procesos desde una misma plataforma.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: "Agropecuario",
      description: "Control de producción, gestión de campos, seguimiento de ganado y cosechas, facturación.",
      detailedDescription:
        "Vantyx permite planificar producción, controlar compras de insumos, seguimiento de stock y facturación. Incluye módulos para reportes de cosecha, control de inventarios, gestión de productos y servicios, ideal para productores que necesitan trazabilidad y visibilidad completa.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Servicios",
      description: "Gestión de proyectos, facturación por horas, seguimiento de tareas y control de gastos.",
      detailedDescription:
        "En Vantyx los servicios se gestionan con módulos de proyectos, tareas, presupuestos, facturación, pagos y reportes. Se pueden registrar tiempos de intervención, seguimiento de clientes, control de gastos y generar informes para medir rentabilidad.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Manufactura",
      description: "Control de producción, gestión de materias primas, seguimiento de órdenes y costos.",
      detailedDescription:
        "Con Vantyx podés administrar órdenes de producción, gestionar inventario de materias primas, controlar stock, compras y envíos. Incluye también módulos contables y reportes para tener visibilidad sobre costos operativos y eficiencia de manufactura.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Construcción",
      description: "Gestión de obras, presupuestos, control de materiales, seguimiento de avances y facturación.",
      detailedDescription:
        "Vantyx ofrece gestión de presupuestos, control de materiales, seguimiento de avance de obra, control de stock, manejo de pagos y facturación por hitos. Todo acompañado con reportes financieros y seguimiento de proyectos para una obra organizada.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Salud",
      description: "Gestión de pacientes, turnos, historias clínicas, facturación a obras sociales y reportes.",
      detailedDescription:
        "Vantyx gestiona pacientes, turnos, intervenciones, historiales clínicos y facturación a obras sociales. Incluye administración de empleados, reportes de atención, control de pagos y módulos de cuentas por cobrar para mantener claridad en lo administrativo.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ]

  // FAQ items con categorías e iconos
  // Keep only the first declaration at line 269

  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null)

  const toggleModule = (index: number) => {
    if (openModuleIndex === index) {
      setOpenModuleIndex(null)
    } else {
      setOpenModuleIndex(index)
    }
  }

  const [flippedSectorIndex, setFlippedSectorIndex] = useState<number | null>(null)

  const [flippedWebServiceIndex, setFlippedWebServiceIndex] = useState<number | null>(null)

  const handleSectorFlip = (index: number) => {
    if (flippedSectorIndex === index) {
      setFlippedSectorIndex(null)
    } else {
      setFlippedSectorIndex(index)
    }
  }

  const handleWebServiceFlip = (index: number) => {
    if (flippedWebServiceIndex === index) {
      setFlippedWebServiceIndex(null)
    } else {
      setFlippedWebServiceIndex(index)
    }
  }

  const webServices = [
    {
      title: "Sitios Institucionales",
      description: "Mostrá tu empresa con una imagen profesional.",
      detailedDescription:
        "Creamos sitios web profesionales que reflejan la identidad de tu empresa. Con diseño moderno, funcionalidades robustas y optimización para buscadores, tu sitio institucional será la cara digital de tu negocio. Incluye formularios de contacto, galerías de proyectos, testimonios y más.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
    },
    {
      title: "Tiendas Online (E-commerce)",
      description: "Vendé tus productos con gestión fácil y cobros integrados.",
      detailedDescription:
        "Plataformas de e-commerce completas con catálogo de productos, carrito de compras, pasarela de pagos integrada y panel de administración intuitivo. Gestiona inventario, seguimiento de pedidos, reportes de ventas y notificaciones automáticas. Todo diseñado para convertir visitas en ventas.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
    {
      title: "Landing Pages",
      description: "Promocioná servicios o campañas con páginas rápidas y efectivas.",
      detailedDescription:
        "Landing pages de alta conversión optimizadas para campañas específicas. Diseño enfocado en el usuario, copywriting persuasivo, formularios inteligentes y llamadas a la acción claras. Análisis de comportamiento, A/B testing e integración con tus herramientas de marketing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Mantenimiento y Soporte",
      description: "Nos encargamos de que tu sitio funcione 24/7.",
      detailedDescription:
        "Soporte técnico continuo para tu sitio web. Actualizaciones de seguridad, backups automáticos, monitoreo de rendimiento y corrección rápida de errores. Incluye optimización de velocidad, gestión de dominios, certificados SSL y consultoría en mejoras. Tu sitio siempre operativo y seguro.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.066z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navegación simple estilo Odoo */}
      <nav className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 relative z-50 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center">
            <Logo width={180} height={60} />
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#modulos"
              className="text-[#1D3557] dark:text-gray-300 hover:text-[#F4A261] dark:hover:text-[#F4A261] transition-colors"
            >
              Módulos
            </Link>
            <Link
              href="#web-dev"
              className="text-[#1D3557] dark:text-gray-300 hover:text-[#F4A261] dark:hover:text-[#F4A261] transition-colors"
            >
              Desarrollo Web
            </Link>
            <Link
              href="#sectores"
              className="text-[#1D3557] dark:text-gray-300 hover:text-[#F4A261] dark:hover:text-[#F4A261] transition-colors"
            >
              Sectores
            </Link>
            <Link
              href="#precios"
              className="text-[#1D3557] dark:text-gray-300 hover:text-[#F4A261] dark:hover:text-[#F4A261] transition-colors"
            >
              Precios
            </Link>
            <Link
              href="#contacto"
              className="text-[#1D3557] dark:text-gray-300 hover:text-[#F4A261] dark:hover:text-[#F4A261] transition-colors"
            >
              Contacto
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://wa.me/543794601984"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 vantyx-btn-primary rounded-md"
            >
              Solicitar Demo
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section Mejorado */}
        <EnhancedHeroSection />

        {/* Dashboard Preview */}
        <section className="py-12 bg-[#F7F7F7] dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/dashboard-vantyx.png"
                  alt="Dashboard Vantyx - Panel principal del sistema de gestión ERP/CRM"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Módulos Grid estilo Odoo */}
        <section id="modulos" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-4">
                Todos los Módulos que necesitas
              </h2>
              <p className="text-[#424242] dark:text-gray-400 max-w-2xl mx-auto">
                Nuestro sistema de gestión está diseñado para adaptarse a las necesidades específicas de las PyMEs
                argentinas.
              </p>
            </FadeIn>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {modules.map((module, index) => (
                module.isSpecial ? (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-start text-left p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 feature-card cursor-pointer"
                    onClick={() => toggleModule(index)}
                  >
                    <div className="text-[#1D3557] dark:text-[#F4A261] mb-3">{module.icon}</div>
                    <h3 className="text-sm font-medium text-[#212121] dark:text-gray-100 mb-2">{module.title}</h3>

                    <div className="flex items-center justify-center mt-2 w-full">
                      <motion.div
                        animate={{ rotate: openModuleIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#F4A261] dark:text-[#F4A261]"
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openModuleIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden w-full"
                        >
                          <p className="text-xs text-[#424242] dark:text-gray-400 mb-4 leading-relaxed">
                            Automatizá la emisión de comprobantes ARCA en un mismo panel. Generá facturas A/B/C, notas de crédito y débito, remitos y comprobantes fiscales con CAE y QR instantáneos, validaciones según tipo de cliente y respaldo seguro por 10 años.
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-xs text-[#424242] dark:text-gray-400">
                              <Check className="h-4 w-4 text-[#F4A261] dark:text-[#F4A261] flex-shrink-0 mt-0.5" />
                              <span>CAE + QR al instante para todos los comprobantes homologados</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-[#424242] dark:text-gray-400">
                              <Check className="h-4 w-4 text-[#F4A261] dark:text-[#F4A261] flex-shrink-0 mt-0.5" />
                              <span>Dashboard con métricas en vivo y Libro IVA listo para AFIP</span>
                            </li>
                            <li className="flex items-start gap-2 text-xs text-[#424242] dark:text-gray-400">
                              <Check className="h-4 w-4 text-[#F4A261] dark:text-[#F4A261] flex-shrink-0 mt-0.5" />
                              <span>Suscripciones automáticas, remitos electrónicos y soporte online/offline</span>
                            </li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <FeatureCard
                    key={index}
                    icon={module.icon}
                    title={module.title}
                    description={module.description}
                    isOpen={openModuleIndex === index}
                    onClick={() => toggleModule(index)}
                  />
                )
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Después de Módulos */}
        <section className="py-8 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-2xl font-bold text-[#212121] dark:text-white mb-4">¿Viste algo que te interesó?</h3>
            <Link href="#contacto" className="inline-block vantyx-btn-primary px-8 py-3 rounded-lg font-semibold">
              Solicitar una demostración
            </Link>
          </div>
        </section>

        {/* Características principales */}
        <section className="py-16 bg-[#F7F7F7] dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <SlideInLeft>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/fc-electronica.jpeg"
                    alt="Facturación Electrónica - Sistema de gestión de facturas en Vantyx"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </SlideInLeft>
              <SlideInRight>
                <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-6">Facturación Electrónica</h2>
                <p className="text-[#424242] dark:text-gray-400 mb-6">
                  Automatizá la emisión de comprobantes ARCA en un mismo panel. Generá facturas A/B/C, notas de crédito y débito, remitos y comprobantes fiscales con CAE y QR instantáneos, validaciones según tipo de cliente y respaldo seguro por 10 años.
                </p>
                <ul className="space-y-3">
                  {[
                    "CAE + QR al instante para todos los comprobantes homologados",
                    "Dashboard con métricas en vivo y Libro IVA listo para AFIP",
                    "Suscripciones automáticas, remitos electrónicos y soporte online/offline",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#F4A261] dark:text-[#F4A261] mr-2 mt-0.5" />
                      <span className="text-[#212121] dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center text-[#1D3557] dark:text-[#F4A261] font-medium hover:text-[#2A4A73] dark:hover:text-[#E08C4C]"
                  >
                    Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* Gestión de Clientes (CRM) */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center">
              <SlideInLeft className="w-full max-w-4xl">
                <div className="mb-8 flex justify-center">
                  <Image
                    src="/modulo-clientes.png"
                    alt="Módulo de Gestión de Clientes CRM - Seguimiento de oportunidades de venta"
                    width={800}
                    height={500}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-6">
                  Gestión de Clientes (CRM)
                </h2>
                <p className="text-[#424242] dark:text-gray-400 mb-6">
                  Centraliza toda la información de tus clientes y potenciales. Realiza un seguimiento efectivo de tus
                  oportunidades de venta y mejora la relación con tus clientes.
                </p>
                <ul className="space-y-3">
                  {[
                    "Seguimiento de oportunidades",
                    "Historial completo de interacciones",
                    "Gestión de campañas de marketing",
                    "Segmentación de clientes",
                    "Reportes y análisis de ventas",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-[#F4A261] dark:text-[#F4A261] mr-2 mt-0.5" />
                      <span className="text-[#212121] dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center text-[#1D3557] dark:text-[#F4A261] font-medium hover:text-[#2A4A73] dark:hover:text-[#E08C4C]"
                  >
                    Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </SlideInLeft>
            </div>
          </div>
        </section>

        {/* Sectores */}
        <section id="sectores" className="py-16 bg-[#F7F7F7] dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-4">
                Soluciones para todos los sectores
              </h2>
              <p className="text-[#424242] dark:text-gray-400 max-w-2xl mx-auto">
                Nuestro sistema se adapta a las necesidades específicas de diferentes industrias.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectores.map((sector, index) => (
                <SectorCard
                  key={index}
                  title={sector.title}
                  description={sector.description}
                  detailedDescription={sector.detailedDescription}
                  icon={sector.icon}
                  isFlipped={flippedSectorIndex === index}
                  onFlip={() => handleSectorFlip(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Después de Sectores */}
        <section className="py-8 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-2xl font-bold text-[#212121] dark:text-white mb-4">
              ¿Es tu sector? Conoce cómo podemos ayudarte
            </h3>
            <Link href="#contacto" className="inline-block vantyx-btn-primary px-8 py-3 rounded-lg font-semibold">
              Habla con un asesor
            </Link>
          </div>
        </section>

        {/* Web Dev Section - Restructured */}
        <section
          id="web-dev"
          className="py-16 bg-white dark:bg-gray-900 relative"
          style={{
            backgroundImage: 'url("/web-development-workspace-with-laptop-and-digital-.jpg")',
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/90" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-4">Desarrollo Web Profesional</h2>
              <h3 className="text-xl text-[#212121] dark:text-gray-300 mb-4">
                Impulsá tu negocio con una página web moderna y funcional
              </h3>
              <p className="text-[#424242] dark:text-gray-400 max-w-3xl mx-auto mb-6">
                En Vantyx creamos sitios web pensados para pymes, profesionales y emprendedores que buscan presencia
                online real. Diseñamos y desarrollamos páginas web a medida con enfoque en resultados: velocidad,
                posicionamiento, diseño atractivo y adaptado a todos los dispositivos.
              </p>
            </FadeIn>

            {/* Tarjetas de servicios en grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {webServices.map((service, index) => (
                <WebServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  detailedDescription={service.detailedDescription}
                  icon={service.icon}
                  isFlipped={flippedWebServiceIndex === index}
                  onFlip={() => handleWebServiceFlip(index)}
                />
              ))}
            </div>

            <div className="mb-16">
              <SpecialOfferCard
                onClick={() => {
                  const contactSection = document.getElementById("contacto")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              />
            </div>

            {/* CTA final */}
            <div className="text-center">
              <FadeIn>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contacto")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="vantyx-btn-primary px-8 py-3 text-lg font-semibold"
                >
                  Quiero más información
                </button>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Vantyx Visual con Carrusel de Facebook */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-12">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/vantyx-visual-logo.png"
                  alt="Logo Vantyx Visual - Uniformes y bolsas personalizadas"
                  width={200}
                  height={120}
                  className="h-auto"
                />
              </div>
              <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-4">Vantyx Visual</h2>
              <h3 className="text-xl text-[#212121] dark:text-gray-300 mb-6">Impulsá tu marca con identidad propia</h3>
              <p className="text-[#424242] dark:text-gray-400 max-w-3xl mx-auto mb-8">
                En Vantyx no solo te damos el sistema para gestionar tu negocio, también te ayudamos a mostrarlo al
                mundo. Con Vantyx Visual accedés a uniformes personalizados con tu logo (estampados o bordados) y bolsas
                de friselina diseñadas a medida para tu emprendimiento. Ideal para fortalecer tu imagen comercial desde
                el primer día.
              </p>
              <AnimatedButton
                className="vantyx-btn-primary px-6 py-3"
                onClick={() => {
                  const contactSection = document.getElementById("contacto")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Quiero mi identidad visual
              </AnimatedButton>
            </FadeIn>

            <div className="mt-12 max-w-2xl mx-auto">
              <FacebookCarousel />
            </div>
          </div>
        </section>

        {/* Tabla Comparativa de Precios */}
        <section id="precios" className="py-20 bg-[#F7F7F7] dark:bg-gray-800 min-h-screen flex flex-col justify-center">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-4">Compará nuestros planes</h2>
              <p className="text-[#424242] dark:text-gray-400 max-w-2xl mx-auto">
                Elegí el plan que mejor se adapte a las necesidades de tu empresa. Todos incluyen soporte y
                actualizaciones.
              </p>
            </FadeIn>

            <div className="pb-12">
              <PricingComparisonTable />
            </div>
          </div>
        </section>

        {/* CTA - Después de Precios */}
        <section className="py-8 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h3 className="text-2xl font-bold text-[#212121] dark:text-white mb-4">
              Elige el plan perfecto para tu negocio
            </h3>
            <Link href="#contacto" className="inline-block vantyx-btn-primary px-8 py-3 rounded-lg font-semibold">
              Solicitar ahora
            </Link>
          </div>
        </section>

        {/* Testimonios Section Renovada */}
        <section id="testimonios" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-4">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-[#424242] dark:text-gray-400 max-w-2xl mx-auto">
                Empresas líderes en diferentes industrias han transformado sus operaciones con Vantyx
              </p>
            </FadeIn>
            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image src="/maria-elena-rodriguez.png" alt="María Elena Rodríguez" fill className="object-cover" />
                  </div>
                  <p className="text-[#424242] dark:text-gray-400 mb-6 flex-1 italic">
                    "Vantyx revolucionó nuestra gestión. En solo 3 meses aumentamos nuestra eficiencia operativa en un
                    40% y redujimos los errores administrativos a cero."
                  </p>
                  <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-[#212121] dark:text-white">María Elena Rodríguez</h4>
                    <span className="text-sm text-[#666666] dark:text-gray-400">Directora General - InnovateCorp</span>
                  </div>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image src="/carlos-mendoza.png" alt="Carlos Mendoza" fill className="object-cover" />
                  </div>
                  <p className="text-[#424242] dark:text-gray-400 mb-6 flex-1 italic">
                    "La integración de todos nuestros procesos en una sola plataforma fue un cambio total. Ahora tenemos
                    control total sobre inventario, facturación y clientes."
                  </p>
                  <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-[#212121] dark:text-white">Carlos Mendoza</h4>
                    <span className="text-sm text-[#666666] dark:text-gray-400">CEO - TechSolutions Argentina</span>
                  </div>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image src="/ana-lucia-fernandez.png" alt="Ana Lucía Fernández" fill className="object-cover" />
                  </div>
                  <p className="text-[#424242] dark:text-gray-400 mb-6 flex-1 italic">
                    "Como emprendedora, Vantyx me permitió profesionalizar mi negocio desde el día uno. El soporte
                    personalizado hizo toda la diferencia en nuestro crecimiento."
                  </p>
                  <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-bold text-[#212121] dark:text-white">Ana Lucía Fernández</h4>
                    <span className="text-sm text-[#666666] dark:text-gray-400">Fundadora - EcoEmprendimientos</span>
                  </div>
                </motion.div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-[#F7F7F7] dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-4">Preguntas Frecuentes</h2>
              <p className="text-[#424242] dark:text-gray-400 max-w-2xl mx-auto">
                Resolvemos tus dudas sobre Vantyx para que puedas tomar la mejor decisión para tu negocio.
              </p>
            </FadeIn>
            <FaqAccordion items={faqItems} />
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#212121] dark:text-[#F4A261] mb-4">Contáctanos</h2>
              <p className="text-[#424242] dark:text-gray-400 max-w-2xl mx-auto">
                Estamos listos para ayudarte a optimizar tus procesos y aumentar tu rentabilidad.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <SlideInLeft>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-[#212121] dark:text-[#F4A261] mb-4">
                    Información de contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-[#1D3557] dark:text-[#F4A261] mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-[#212121] dark:text-gray-200">Teléfono</h4>
                        <p className="text-[#424242] dark:text-gray-400">+54 379 4601984</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-[#1D3557] dark:text-[#F4A261] mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium text-[#212121] dark:text-gray-200">Email</h4>
                        <p className="text-[#424242] dark:text-gray-400">vantyx.ar@gmail.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    {{/* Darker heading text */}}
                    <h4 className="font-medium text-[#212121] dark:text-gray-200 mb-3">Horario de atención</h4>
                    <p className="text-[#424242] dark:text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-[#424242] dark:text-gray-400">Sábados: 9:00 - 13:00</p>
                  </div>

                  <div className="mt-8">
                    {{/* Darker heading text */}}
                    <h4 className="font-medium text-[#212121] dark:text-gray-200 mb-3">Síguenos en redes sociales</h4>
                    <div className="flex space-x-4">
                      <AnimatedIcon>
                        <a
                          href="https://www.facebook.com/vantyx.ar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1D3557] dark:text-[#F4A261] hover:text-[#2A4A73] dark:hover:text-[#E08C4C]"
                          aria-label="Síguenos en Facebook"
                        >
                          <Facebook className="h-6 w-6" />
                        </a>
                      </AnimatedIcon>
                      <AnimatedIcon>
                        <a
                          href="https://www.instagram.com/vantyx.arg/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1D3557] dark:text-[#F4A261] hover:text-[#2A4A73] dark:hover:text-[#E08C4C]"
                          aria-label="Síguenos en Instagram"
                        >
                          <Instagram className="h-6 w-6" />
                        </a>
                      </AnimatedIcon>
                      <AnimatedIcon>
                        <a
                          href="https://www.tiktok.com/@vantyx.net"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1D3557] dark:text-[#F4A261] hover:text-[#2A4A73] dark:hover:text-[#E08C4C]"
                          aria-label="Síguenos en TikTok"
                        >
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                          </svg>
                        </a>
                      </AnimatedIcon>
                    </div>
                  </div>
                </div>
              </SlideInLeft>

              <SlideInRight>
                <GoogleForm />
              </SlideInRight>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 vantyx-gradient">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <Scale>
              {{/* Improved text color for better contrast on gradient */}}
              <h2 className="text-3xl font-bold mb-6 text-white">¿Listo para potenciar tu empresa?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-gray-100">
                Solicita una demostración gratuita y descubre cómo Vantyx puede ayudarte a optimizar tus procesos y
                aumentar tu rentabilidad.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <AnimatedButton
                  className="bg-[#F4A261] text-gray-800 hover:bg-[#E08C4C] px-8 py-3 text-lg"
                  onClick={() => {
                    const contactSection = document.getElementById("contacto")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Comienza ahora
                </AnimatedButton>
                <AnimatedButton
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 px-8 py-3 text-lg"
                  onClick={() => window.open("https://wa.me/543794601984", "_blank")}
                >
                  Contactar a un Asesor
                </AnimatedButton>
              </div>
            </Scale>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1D3557] text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <SlideUp>
                <div className="flex justify-center md:justify-start mb-6">
                  <Logo width={200} height={80} variant="default" />
                </div>
                {{/* Darker text for better contrast */}}
                <p className="mb-4 max-w-md text-center md:text-left text-[#E0E0E0]">
                  Desarrollamos sistemas de gestión ERP/CRM para pymes, con foco en el sector agropecuario, comercial y
                  servicios.
                </p>
                <p className="text-sm text-center md:text-left text-[#E0E0E0]">Desarrollado en Corrientes, con visión nacional.</p>
              </SlideUp>
            </div>
            <div>
              <SlideUp delay={0.2}>
                {{/* Brighter heading text */}}
                <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#modulos" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                      Módulos
                    </Link>
                  </li>
                  <li>
                    <Link href="#web-dev" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                      Desarrollo Web
                    </Link>
                  </li>
                  <li>
                    <Link href="#sectores" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                      Sectores
                    </Link>
                  </li>
                  <li>
                    <Link href="#precios" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                      Precios
                    </Link>
                  </li>
                  <li>
                    <Link href="#testimonios" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                      Testimonios
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#contacto" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </SlideUp>
            </div>
            <div>
              <SlideUp delay={0.4}>
                {{/* Brighter heading text */}}
                <h3 className="text-white font-semibold mb-4">Contacto</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#E0E0E0]">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+54 379 4601984</span>
                  </li>
                  <li className="flex items-center text-[#E0E0E0]">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>vantyx.ar@gmail.com</span>
                  </li>
                </ul>
                <div className="mt-4 flex space-x-4">
                  <a
                    href="https://www.facebook.com/vantyx.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F4A261] transition-colors"
                    aria-label="Síguenos en Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/vantyx.arg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F4A261] transition-colors"
                    aria-label="Síguenos en Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@vantyx.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F4A261] transition-colors"
                    aria-label="Síguenos en TikTok"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-[#E0E0E0]">
            <p>© {new Date().getFullYear()} Vantyx. Todos los derechos reservados.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <a href="#" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                Política de Privacidad
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                Términos de Uso
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-[#E0E0E0] hover:text-[#F4A261] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <WhatsAppButton />

      {/* Chatbot de Vantyx */}
      <VantyxChatbot />
    </div>
  )
}
