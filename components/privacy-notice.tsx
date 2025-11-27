"use client"

import Link from "next/link"
import { Shield } from "lucide-react"

interface PrivacyNoticeProps {
  variant?: "form" | "inline" | "checkbox"
  className?: string
}

export function PrivacyNotice({ variant = "form", className = "" }: PrivacyNoticeProps) {
  if (variant === "checkbox") {
    return (
      <label className={`flex items-start gap-3 cursor-pointer ${className}`}>
        <input
          type="checkbox"
          required
          className="mt-1 w-4 h-4 text-[#F4A261] bg-gray-100 border-gray-300 rounded focus:ring-[#F4A261] dark:focus:ring-[#F4A261] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <span className="text-sm text-[#424242] dark:text-gray-300">
          Acepto la{" "}
          <Link href="/politica-privacidad" className="text-[#F4A261] hover:underline">
            Política de Privacidad
          </Link>{" "}
          y los{" "}
          <Link href="/terminos-uso" className="text-[#F4A261] hover:underline">
            Términos de Uso
          </Link>
          . Entiendo que mis datos serán tratados según lo descrito en dichas políticas.
        </span>
      </label>
    )
  }

  if (variant === "inline") {
    return (
      <p className={`text-xs text-[#666666] dark:text-gray-400 ${className}`}>
        Al enviar este formulario, aceptás nuestra{" "}
        <Link href="/politica-privacidad" className="text-[#F4A261] hover:underline">
          Política de Privacidad
        </Link>
        .
      </p>
    )
  }

  return (
    <div className={`flex items-start gap-3 p-4 bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg ${className}`}>
      <Shield className="w-5 h-5 text-[#F4A261] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-sm text-[#424242] dark:text-gray-300">
          <strong>Protección de datos:</strong> Tus datos serán tratados de forma confidencial según nuestra{" "}
          <Link href="/politica-privacidad" className="text-[#F4A261] hover:underline">
            Política de Privacidad
          </Link>
          . No compartimos tu información con terceros sin tu consentimiento.
        </p>
      </div>
    </div>
  )
}
