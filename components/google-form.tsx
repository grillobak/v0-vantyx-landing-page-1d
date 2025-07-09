"use client"

import { useState, useEffect } from "react"

export function GoogleForm() {
  const [iframeHeight, setIframeHeight] = useState(800)

  // Ajustar la altura del iframe en dispositivos móviles
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIframeHeight(600)
      } else {
        setIframeHeight(800)
      }
    }

    // Ejecutar al montar y cuando cambie el tamaño de la ventana
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md w-full">
      <h3 className="text-xl font-semibold text-[#1D3557] dark:text-[#F4A261] mb-4">Contáctanos</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Complete el formulario y un asesor se pondrá en contacto con usted a la brevedad.
      </p>
      <div className="w-full overflow-hidden rounded-lg">
        <iframe
          src="https://forms.gle/jz7WF83BN5wf9nbq5"
          width="100%"
          height={iframeHeight}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          className="w-full max-w-full"
          title="Formulario de contacto Vantyx"
        >
          Cargando…
        </iframe>
      </div>
    </div>
  )
}
