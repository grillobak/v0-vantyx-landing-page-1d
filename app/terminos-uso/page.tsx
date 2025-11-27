import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, FileText, AlertTriangle, Scale, CreditCard, HeadphonesIcon, Ban } from "lucide-react"

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso | Vantyx ERP",
  description:
    "Términos y condiciones de uso de Vantyx ERP. Conocé las condiciones que rigen el uso de nuestra plataforma de gestión empresarial.",
}

export default function TerminosUsoPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold">Términos y Condiciones de Uso</h1>
          <p className="text-gray-300 mt-2">Última actualización: Noviembre 2025</p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#1a2d4a] rounded-2xl shadow-lg p-8 md:p-12">
          {/* Intro */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-[#F4A261]" />
              <h2 className="text-2xl font-bold text-[#1D3557] dark:text-white">Acuerdo de Usuario</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 leading-relaxed">
              Bienvenido a <strong>Vantyx ERP</strong>. Al acceder y utilizar nuestra plataforma, aceptás estos términos
              y condiciones en su totalidad. Te recomendamos leerlos detenidamente antes de continuar.
            </p>
          </section>

          {/* Definiciones */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">1. Definiciones</h2>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>
                <strong>"Plataforma":</strong> el software Vantyx ERP accesible vía web
              </li>
              <li>
                <strong>"Usuario":</strong> toda persona física o jurídica que accede a la Plataforma
              </li>
              <li>
                <strong>"Servicios":</strong> todas las funcionalidades ofrecidas por Vantyx ERP
              </li>
              <li>
                <strong>"Cuenta":</strong> el acceso personalizado del Usuario a la Plataforma
              </li>
              <li>
                <strong>"Contenido":</strong> datos, información y archivos cargados por el Usuario
              </li>
            </ul>
          </section>

          {/* Aceptación */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">2. Aceptación de los Términos</h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Al registrarte o utilizar nuestros servicios, declarás que:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Tenés capacidad legal para celebrar contratos</li>
              <li>Actuás en representación propia o de una empresa debidamente autorizada</li>
              <li>La información proporcionada es veraz y actualizada</li>
              <li>Aceptás cumplir con estos términos y la legislación argentina aplicable</li>
            </ul>
          </section>

          {/* Servicios */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">3. Descripción de los Servicios</h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Vantyx ERP ofrece una plataforma integral de gestión empresarial que incluye:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Facturación electrónica homologada por ARCA/AFIP</li>
              <li>Gestión de inventarios y stock</li>
              <li>Administración de clientes y proveedores (CRM)</li>
              <li>Control de ventas y compras</li>
              <li>Reportes y análisis de datos</li>
              <li>Integración con sistemas externos</li>
            </ul>
          </section>

          {/* Registro */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">4. Registro y Cuenta de Usuario</h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">Para usar la Plataforma:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Debés crear una cuenta con información veraz</li>
              <li>Sos responsable de mantener la confidencialidad de tus credenciales</li>
              <li>Debés notificarnos inmediatamente cualquier uso no autorizado</li>
              <li>No podés compartir tu cuenta con terceros sin autorización</li>
            </ul>
          </section>

          {/* Pagos */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">5. Pagos y Facturación</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Los precios están expresados en pesos argentinos (ARS) e incluyen IVA</li>
              <li>El pago se realiza por adelantado según el plan contratado</li>
              <li>Aceptamos tarjetas de crédito/débito, transferencia bancaria y Mercado Pago</li>
              <li>La falta de pago puede resultar en la suspensión del servicio</li>
              <li>Los reembolsos se evalúan según nuestra garantía de satisfacción</li>
            </ul>
          </section>

          {/* Uso permitido */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">6. Uso Permitido</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Te comprometés a utilizar la Plataforma de manera lícita y conforme a estos términos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Solo para fines comerciales legítimos</li>
              <li>Respetando los derechos de terceros</li>
              <li>Sin intentar vulnerar la seguridad del sistema</li>
              <li>Sin cargar contenido ilegal, difamatorio o que infrinja derechos de propiedad intelectual</li>
            </ul>
          </section>

          {/* Prohibiciones */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">7. Conductas Prohibidas</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300 mb-4">Queda expresamente prohibido:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>Realizar ingeniería inversa o descompilar el software</li>
              <li>Utilizar bots, scrapers o sistemas automatizados no autorizados</li>
              <li>Interferir con el funcionamiento de la Plataforma</li>
              <li>Suplantar identidad de otros usuarios</li>
              <li>Revender o sublicenciar el acceso sin autorización</li>
            </ul>
          </section>

          {/* Propiedad intelectual */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">8. Propiedad Intelectual</h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Todos los derechos de propiedad intelectual sobre la Plataforma, incluyendo software, diseño, logotipos,
              textos y gráficos, pertenecen a Vantyx Soluciones o sus licenciantes.
            </p>
            <p className="text-[#424242] dark:text-gray-300">
              El Usuario conserva la propiedad de su Contenido, otorgando a Vantyx una licencia limitada para procesarlo
              según sea necesario para la prestación del servicio.
            </p>
          </section>

          {/* Disponibilidad */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">9. Disponibilidad del Servicio</h2>
            <p className="text-[#424242] dark:text-gray-300">
              Nos esforzamos por mantener una disponibilidad del 99.9%. Sin embargo, pueden ocurrir interrupciones por
              mantenimiento programado o circunstancias fuera de nuestro control. Notificaremos con anticipación las
              interrupciones planificadas.
            </p>
          </section>

          {/* Limitación de responsabilidad */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">10. Limitación de Responsabilidad</h2>
            </div>
            <div className="bg-[#FFF3E0] dark:bg-[#3d2a1a] rounded-lg p-6">
              <p className="text-[#424242] dark:text-gray-300 mb-4">
                En la máxima medida permitida por la ley argentina:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
                <li>Vantyx no será responsable por daños indirectos, incidentales o consecuentes</li>
                <li>Nuestra responsabilidad máxima se limita al monto pagado por el Usuario en los últimos 12 meses</li>
                <li>No garantizamos que el servicio sea ininterrumpido o libre de errores</li>
              </ul>
            </div>
          </section>

          {/* Soporte */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <HeadphonesIcon className="w-6 h-6 text-[#F4A261]" />
              <h2 className="text-xl font-bold text-[#1D3557] dark:text-white">11. Soporte Técnico</h2>
            </div>
            <p className="text-[#424242] dark:text-gray-300">
              Ofrecemos soporte técnico según el plan contratado. El soporte está disponible por email, chat y teléfono
              en los horarios indicados para cada plan. Nos comprometemos a responder dentro de los tiempos establecidos
              en el Acuerdo de Nivel de Servicio (SLA).
            </p>
          </section>

          {/* Terminación */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">12. Terminación</h2>
            <p className="text-[#424242] dark:text-gray-300 mb-4">
              Cualquiera de las partes puede terminar la relación:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#424242] dark:text-gray-300">
              <li>
                <strong>Usuario:</strong> cancelando su suscripción en cualquier momento
              </li>
              <li>
                <strong>Vantyx:</strong> por incumplimiento de estos términos, con notificación previa de 30 días
              </li>
            </ul>
            <p className="text-[#424242] dark:text-gray-300 mt-4">
              Tras la terminación, el Usuario podrá exportar sus datos durante 30 días.
            </p>
          </section>

          {/* Modificaciones */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">13. Modificaciones</h2>
            <p className="text-[#424242] dark:text-gray-300">
              Nos reservamos el derecho de modificar estos términos. Las modificaciones se notificarán por email con al
              menos 30 días de anticipación. El uso continuado de la Plataforma implica la aceptación de los nuevos
              términos.
            </p>
          </section>

          {/* Ley aplicable */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-[#1D3557] dark:text-white mb-4">14. Ley Aplicable y Jurisdicción</h2>
            <p className="text-[#424242] dark:text-gray-300">
              Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia será sometida a
              los tribunales ordinarios de la Provincia de Corrientes, renunciando las partes a cualquier otro fuero o
              jurisdicción.
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-[#1D3557] text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">15. Contacto</h2>
            <p className="mb-2">Para consultas sobre estos términos:</p>
            <p>
              <strong>Email:</strong> vantyx.arg@gmail.com
            </p>
            <p>
              <strong>Celular:</strong> +54 379 460 1984
            </p>
            <p>
              <strong>Dirección:</strong> Corrientes, Argentina
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
