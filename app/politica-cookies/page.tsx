import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, ToggleRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Cookies | Vantyx ERP",
  description:
    "Política de cookies de Vantyx ERP. Conocé cómo utilizamos cookies y tecnologías similares en nuestra plataforma.",
}

export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] dark:bg-[#0a1628]">
      {/* Header */}
      <header className="bg-[#1D3557] text-white py-6">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#F4A261] hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Política de Cookies</h1>
          <p className="text-gray-300 mt-2">Última actualización: Noviembre 2025</p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a2d4a] rounded-2xl shadow-lg p-8 md:p-12">
          {/* Intro */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-8 h-8 text-[#F4A261]" />
              <h2 className="text-2xl font-bold text-[#1D3557] dark:text-white">¿Qué son las Cookies?</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitás un sitio web.
              Nos permiten recordar tus preferencias, mejorar tu experiencia de navegación y analizar cómo utilizás
              nuestra plataforma.
            </p>
          </section>

          {/* Por qué usamos cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">¿Por qué usamos Cookies?</h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">En Vantyx utilizamos cookies para:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Garantizar el funcionamiento técnico de la plataforma</li>
              <li>Recordar tus preferencias y configuraciones</li>
              <li>Mantener tu sesión activa de forma segura</li>
              <li>Analizar el uso del sitio para mejorar nuestros servicios</li>
              <li>Personalizar tu experiencia de usuario</li>
            </ul>
          </section>

          {/* Tipos de cookies */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-6">Tipos de Cookies que Utilizamos</h2>

            <div className="space-y-6">
              {/* Esenciales */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-[#F4A261]" />
                  <h3 className="text-lg font-semibold text-[#1D3557] dark:text-white">Cookies Esenciales</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Siempre activas</span>
                </div>
                <p className="text-[#424242] dark:text-gray-300 mb-3">
                  Son necesarias para el funcionamiento básico del sitio. Sin ellas, la plataforma no funcionaría
                  correctamente.
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b dark:border-gray-700">
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Cookie</th>
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Propósito</th>
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#424242] dark:text-gray-300">
                    <tr className="border-b dark:border-gray-700">
                      <td className="py-2">session_id</td>
                      <td className="py-2">Mantener sesión activa</td>
                      <td className="py-2">Sesión</td>
                    </tr>
                    <tr className="border-b dark:border-gray-700">
                      <td className="py-2">csrf_token</td>
                      <td className="py-2">Seguridad del formulario</td>
                      <td className="py-2">Sesión</td>
                    </tr>
                    <tr>
                      <td className="py-2">cookie_consent</td>
                      <td className="py-2">Preferencias de cookies</td>
                      <td className="py-2">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Analíticas */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-6 h-6 text-[#F4A261]" />
                  <h3 className="text-lg font-semibold text-[#1D3557] dark:text-white">Cookies Analíticas</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Opcionales</span>
                </div>
                <p className="text-[#424242] dark:text-gray-300 mb-3">
                  Nos ayudan a entender cómo los usuarios interactúan con nuestro sitio, permitiéndonos mejorar
                  continuamente.
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b dark:border-gray-700">
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Cookie</th>
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Propósito</th>
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#424242] dark:text-gray-300">
                    <tr className="border-b dark:border-gray-700">
                      <td className="py-2">_ga</td>
                      <td className="py-2">Google Analytics - Identificación</td>
                      <td className="py-2">2 años</td>
                    </tr>
                    <tr className="border-b dark:border-gray-700">
                      <td className="py-2">_gid</td>
                      <td className="py-2">Google Analytics - Sesión</td>
                      <td className="py-2">24 horas</td>
                    </tr>
                    <tr>
                      <td className="py-2">_gat</td>
                      <td className="py-2">Google Analytics - Limitación</td>
                      <td className="py-2">1 minuto</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Funcionales */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <ToggleRight className="w-6 h-6 text-[#F4A261]" />
                  <h3 className="text-lg font-semibold text-[#1D3557] dark:text-white">Cookies Funcionales</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Opcionales</span>
                </div>
                <p className="text-[#424242] dark:text-gray-300 mb-3">
                  Permiten funcionalidades adicionales como recordar preferencias de idioma o tema visual.
                </p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b dark:border-gray-700">
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Cookie</th>
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Propósito</th>
                      <th className="text-left py-2 text-[#1D3557] dark:text-white">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#424242] dark:text-gray-300">
                    <tr className="border-b dark:border-gray-700">
                      <td className="py-2">theme</td>
                      <td className="py-2">Preferencia modo claro/oscuro</td>
                      <td className="py-2">1 año</td>
                    </tr>
                    <tr>
                      <td className="py-2">lang</td>
                      <td className="py-2">Preferencia de idioma</td>
                      <td className="py-2">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Gestionar cookies */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">Cómo Gestionar tus Cookies</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Podés controlar y eliminar las cookies de varias maneras:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300 mb-6">
              <li>
                <strong>Banner de cookies:</strong> Al visitar nuestro sitio, podés aceptar o rechazar cookies
                opcionales
              </li>
              <li>
                <strong>Configuración del navegador:</strong> Podés configurar tu navegador para bloquear o eliminar
                cookies
              </li>
              <li>
                <strong>Herramientas de terceros:</strong> Podés usar extensiones de navegador para gestionar cookies
              </li>
            </ul>

            <div className="bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg p-6">
              <h3 className="font-semibold text-[#1D3557] dark:text-white mb-3">Configuración por navegador:</h3>
              <ul className="space-y-2 text-[#424242] dark:text-gray-300">
                <li>
                  <strong>Chrome:</strong>{" "}
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4A261] hover:underline"
                  >
                    Gestionar cookies en Chrome
                  </a>
                </li>
                <li>
                  <strong>Firefox:</strong>{" "}
                  <a
                    href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4A261] hover:underline"
                  >
                    Gestionar cookies en Firefox
                  </a>
                </li>
                <li>
                  <strong>Safari:</strong>{" "}
                  <a
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4A261] hover:underline"
                  >
                    Gestionar cookies en Safari
                  </a>
                </li>
                <li>
                  <strong>Edge:</strong>{" "}
                  <a
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F4A261] hover:underline"
                  >
                    Gestionar cookies en Edge
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Consecuencias */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">
              Consecuencias de Desactivar Cookies
            </h2>
            <p className="text-[#424242] dark:text-gray-300">
              Si desactivás las cookies esenciales, algunas funcionalidades del sitio podrían no funcionar
              correctamente. Si desactivás cookies analíticas o funcionales, tu experiencia podría ser menos
              personalizada, pero el sitio seguirá funcionando normalmente.
            </p>
          </section>

          {/* Actualizaciones */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">Actualizaciones de esta Política</h2>
            <p className="text-[#424242] dark:text-gray-300">
              Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios significativos mediante un
              aviso en nuestro sitio web. Te recomendamos revisar esta página regularmente.
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-[#1D3557] text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Contacto</h2>
            <p className="mb-2">Para consultas sobre nuestra política de cookies:</p>
            <p>
              <strong>Email:</strong> privacidad@vantyx.com.ar
            </p>
            <p>
              <strong>Teléfono:</strong> +54 11 XXXX-XXXX
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
