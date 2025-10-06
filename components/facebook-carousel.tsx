"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Facebook } from "lucide-react"
import dynamic from "next/dynamic"

function FacebookCarouselComponent() {
  useEffect(() => {
    // Cargar el SDK de Facebook
    if (window.FB) {
      window.FB.XFBML.parse()
    } else {
      const script = document.createElement("script")
      script.src = "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v18.0"
      script.async = true
      script.defer = true
      script.crossOrigin = "anonymous"
      document.body.appendChild(script)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-[#1D3557] dark:text-[#F4A261] mb-2 flex items-center gap-2">
          <Facebook className="h-6 w-6" />
          Últimas novedades
        </h3>
        <p className="text-gray-600 dark:text-gray-400">Seguí nuestro perfil para ver los últimos trabajos</p>
      </div>

      <div className="facebook-embed-container">
        <div id="fb-root"></div>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/vantyx.ar"
          data-tabs="timeline"
          data-width="500"
          data-height="600"
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote cite="https://www.facebook.com/vantyx.ar" className="fb-xfbml-parse-ignore">
            <a href="https://www.facebook.com/vantyx.ar">Vantyx</a>
          </blockquote>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://www.facebook.com/vantyx.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-lg font-medium transition-colors"
        >
          <Facebook className="h-5 w-5" />
          Ver más en Facebook
        </a>
      </div>
    </motion.div>
  )
}

// Declaración para TypeScript
declare global {
  interface Window {
    FB: any
  }
}

export const FacebookCarousel = dynamic(() => Promise.resolve(FacebookCarouselComponent), {
  ssr: false,
  loading: () => (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 animate-pulse">
      <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded"></div>
    </div>
  ),
})
