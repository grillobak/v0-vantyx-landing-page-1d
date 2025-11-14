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
            d="M12
