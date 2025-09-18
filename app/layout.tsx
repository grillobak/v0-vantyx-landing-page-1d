import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vantyx - Sistemas de Gestión ERP/CRM para Pymes",
  description:
    "Desarrollamos sistemas de gestión ERP/CRM para pymes, con foco en el sector agropecuario, comercial y servicios.",
    generator: 'v0.app'
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
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
