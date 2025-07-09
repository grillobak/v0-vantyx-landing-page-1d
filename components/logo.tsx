import Link from "next/link"
import { SafeImage } from "@/components/safe-image"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  variant?: "default" | "white" | "dark"
  withLink?: boolean
}

export function Logo({ width = 150, height = 60, className = "", variant = "default", withLink = true }: LogoProps) {
  const logoContent = (
    <div className={`relative ${className}`} style={{ width, height }}>
      <SafeImage
        src="/logo-vantyx.png"
        alt="Vantyx Soluciones"
        fill
        className="object-contain"
        priority
        fallbackSrc="/placeholder.svg?height=60&width=150"
      />
    </div>
  )

  if (withLink) {
    return (
      <Link href="/" className="inline-block">
        {logoContent}
      </Link>
    )
  }

  return logoContent
}
