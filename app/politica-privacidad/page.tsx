import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad | Vantyx ERP",
  description:
    "Política de privacidad de Vantyx ERP. Conocé cómo protegemos y tratamos tus datos personales según la Ley 25.326 de Protección de Datos Personales de Argentina.",
}

export default function PoliticaPrivacidadPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidad</h1>
          <p className="text-gray-300 mt-2">Última actualización: Noviembre 2025</p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a2d4a] rounded-2xl shadow-lg p-8 md:p-12">
          {/* Intro */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-[#F4A261]" />
              <h2 className="text-2xl font-bold text-[#1D3557] dark:text-white">Compromiso con tu Privacidad</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 leading-relaxed">
              En <strong>Vantyx ERP</strong>, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta
              política describe cómo recopilamos, usamos, almacenamos y protegemos tu información personal, en
              cumplimiento con la <strong>Ley 25.326 de Protección de Datos Personales de Argentina</strong> y
              normativas internacionales aplicables.
            </p>
          </section>

          {/* Responsable del tratamiento */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">1. Responsable del Tratamiento</h2>
            </div>
            <div className="bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg p-6">
              <ul className="space-y-2 text-[#424242] dark:text-gray-300">
                <li>
                  <strong>Razón Social:</strong> Vantyx Soluciones
                </li>
                <li>
                  <strong>Domicilio:</strong> Corrientes, Argentina
                </li>
                <li>
                  <strong>Email de contacto:</strong> vantyx.arg@gmail.com
                </li>
                <li>
                  <strong>Celular:</strong> +54 379 460 1984
                </li>
              </ul>
            </div>
          </section>

          {/* Datos que recopilamos */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">2. Datos que Recopilamos</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Recopilamos información que nos proporcionás voluntariamente:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>
                <strong>Datos de identificación:</strong> nombre completo, razón social, CUIT/CUIL
              </li>
              <li>
                <strong>Datos de contacto:</strong> email, teléfono, dirección
              </li>
              <li>
                <strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de
                permanencia
              </li>
              <li>
                <strong>Datos de uso del servicio:</strong> configuraciones, preferencias, historial de actividad dentro
                de la plataforma
              </li>
              <li>
                <strong>Datos de facturación:</strong> información fiscal necesaria para la emisión de comprobantes
              </li>
            </ul>
          </section>

          {/* Finalidad */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">3. Finalidad del Tratamiento</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 mb-4">Utilizamos tus datos para:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Prestación del servicio de ERP y facturación electrónica</li>
              <li>Comunicaciones sobre actualizaciones, nuevas funcionalidades y soporte técnico</li>
              <li>Cumplimiento de obligaciones legales y fiscales (ARCA/AFIP)</li>
              <li>Mejora continua de nuestros productos y servicios</li>
              <li>Envío de información comercial (solo con tu consentimiento expreso)</li>
              <li>Análisis estadísticos y de rendimiento del sitio web</li>
            </ul>
          </section>

          {/* Base legal */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">4. Base Legal del Tratamiento</h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">El tratamiento de tus datos se fundamenta en:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>
                <strong>Consentimiento:</strong> al completar formularios o contratar servicios
              </li>
              <li>
                <strong>Ejecución contractual:</strong> para la prestación de servicios contratados
              </li>
              <li>
                <strong>Obligación legal:</strong> cumplimiento de normativas fiscales argentinas
              </li>
              <li>
                <strong>Interés legítimo:</strong> mejora de servicios y prevención de fraudes
              </li>
            </ul>
          </section>

          {/* Seguridad */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">5. Seguridad de los Datos</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Implementamos medidas de seguridad técnicas y organizativas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Encriptación SSL/TLS para todas las comunicaciones</li>
              <li>Almacenamiento en servidores seguros con respaldo diario</li>
              <li>Control de acceso basado en roles</li>
              <li>Auditorías de seguridad periódicas</li>
              <li>Capacitación continua del personal en protección de datos</li>
            </ul>
          </section>

          {/* Derechos */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">6. Tus Derechos</h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">Según la Ley 25.326, tenés derecho a:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Acceso", desc: "Conocer qué datos tenemos sobre vos" },
                { title: "Rectificación", desc: "Corregir datos inexactos o incompletos" },
                { title: "Supresión", desc: "Solicitar la eliminación de tus datos" },
                { title: "Oposición", desc: "Oponerte al tratamiento de tus datos" },
                { title: "Portabilidad", desc: "Recibir tus datos en formato estructurado" },
                { title: "Revocación", desc: "Retirar tu consentimiento en cualquier momento" },
              ].map((derecho, index) => (
                <div key={index} className="bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg p-4">
                  <h3 className="font-semibold text-[#1D3557] dark:text-[#F4A261]">{derecho.title}</h3>
                  <p className="text-sm text-[#666666] dark:text-gray-400">{derecho.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[#424242] dark:text-gray-300 mt-4">
              Para ejercer estos derechos, contactanos a <strong>vantyx.arg@gmail.com</strong>
            </p>
          </section>

          {/* Cookies - Updated section 7 to include Google AdSense information */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">
              7. Cookies y Tecnologías Similares
            </h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Utilizamos cookies para mejorar tu experiencia. Además, utilizamos servicios de publicidad de terceros
              como Google AdSense, que pueden recopilar información sobre tu navegación para mostrar anuncios
              relevantes.
            </p>
            <p className="text-[#424242] dark:text-gray-300">
              Consultá nuestra{" "}
              <Link href="/politica-cookies" className="text-[#F4A261] hover:underline">
                Política de Cookies
              </Link>{" "}
              para más información sobre cómo gestionamos las cookies y cómo podés configurar tus preferencias.
            </p>
          </section>

          {/* Transferencias */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">8. Transferencias Internacionales</h2>
            <p className="text-[#424242] dark:text-gray-300">
              Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de Argentina. En estos casos,
              garantizamos que cumplan con estándares de protección equivalentes mediante cláusulas contractuales tipo o
              certificaciones reconocidas.
            </p>
          </section>

          {/* Retención */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">9. Período de Retención</h2>
            <p className="text-[#424242] dark:text-gray-300">
              Conservamos tus datos durante el tiempo necesario para cumplir con las finalidades descritas y las
              obligaciones legales aplicables. Los datos fiscales se conservan por 10 años según la normativa argentina.
            </p>
          </section>

          {/* Contacto */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">10. Contacto</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300">
              Para consultas sobre esta política o el tratamiento de tus datos:
            </p>
            <div className="bg-[#1D3557] text-white rounded-lg p-6 mt-4">
              <p>
                <strong>Email:</strong> vantyx.arg@gmail.com
              </p>
              <p>
                <strong>Celular:</strong> +54 379 460 1984
              </p>
              <p>
                <strong>Dirección:</strong> Corrientes, Argentina
              </p>
            </div>
          </section>

          {/* AAIP */}
          <section className="bg-[#F8F9FA] dark:bg-[#0a1628] rounded-lg p-6">
            <p className="text-sm text-[#666666] dark:text-gray-400">
              <strong>Nota:</strong> La Agencia de Acceso a la Información Pública (AAIP), en su carácter de Órgano de
              Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan
              con relación al incumplimiento de las normas sobre protección de datos personales.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
