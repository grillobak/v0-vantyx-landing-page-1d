"use client"

import Image from "next/image"

interface SafeImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  fallbackSrc?: string
}

export function SafeImage({ src, alt, width, height, fill, className, priority, fallbackSrc }: SafeImageProps) {
  const imageProps = {
    src: src || fallbackSrc || "/placeholder.svg",
    alt,
    width,
    height,
    fill,
    className,
    priority,
  }

  return <Image {...imageProps} />
}
