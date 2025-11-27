import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AuthProvider } from "@/context/AuthContext"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/react"
import { CookieBanner } from "@/components/cookie-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vantyx - Software ERP/CRM para PyMEs Argentinas | Gestión Empresarial",
  description:
    "Automatiza tu gestión con Vantyx: ERP/CRM para pymes argentinas. Facturación electrónica, inventario, CRM y más. Soporte local. Prueba gratis hoy.",
  keywords: "ERP, CRM, software gestión, facturación electrónica, inventario, pymes argentina",
  robots: "index, follow",
  openGraph: {
    title: "Vantyx - Software ERP/CRM para PyMEs",
    description: "La plataforma todo-en-uno para gestionar tu negocio",
    url: "https://vantyx.ar",
    siteName: "Vantyx",
    type: "website",
  },
  generator: "v0.app",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1D3557",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-vantyx.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7545230254860929"
          crossOrigin="anonymous"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <AuthProvider>
            {children}
            <ScrollToTop />
            <Toaster position="top-right" />
            <CookieBanner />
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
