"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function GoogleForm() {
  const [iframeHeight, setIframeHeight] = useState(800)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIframeHeight(900)
      } else if (window.innerWidth < 768) {
        setIframeHeight(700)
      } else {
        setIframeHeight(800)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md w-full">
      <h3 className="text-lg sm:text-xl font-semibold text-[#1D3557] dark:text-[#F4A261] mb-3 sm:mb-4">Contáctanos</h3>
      <p className="text-sm sm:text-base text-[#424242] dark:text-gray-400 mb-4 sm:mb-6">
        Complete el formulario y un asesor se pondrá en contacto a la brevedad
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
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        Al enviar este formulario aceptás nuestra{" "}
        <Link href="/politica-privacidad" className="text-[#F4A261] hover:underline">
          Política de Privacidad
        </Link>{" "}
        y el uso de tus datos para responder a tu consulta.
      </p>
    </div>
  )
}
