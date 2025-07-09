import type React from "react"
import { SafeImage } from "@/components/safe-image"
import headerUrl from "@/public/header.png"

interface HeroBackgroundProps {
  children: React.ReactNode
  overlay?: boolean
  overlayOpacity?: number
}

export function HeroBackground({ children, overlay = true, overlayOpacity = 50 }: HeroBackgroundProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={headerUrl}
          alt="Vantyx Background"
          fill
          className="object-cover"
          priority
          fallbackSrc="/placeholder.svg?height=800&width=1600"
        />
        {overlay && <div className={`absolute inset-0 bg-blue-900/${overlayOpacity}`}></div>}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
