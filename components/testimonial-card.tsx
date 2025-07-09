"use client"

import { motion } from "framer-motion"
import { SafeImage } from "@/components/safe-image"

interface TestimonialCardProps {
  imageSrc: string
  altText: string
}

export function TestimonialCard({ imageSrc, altText }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 testimonial-card h-full"
    >
      <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
        <SafeImage
          src={imageSrc}
          alt={altText}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fallbackSrc="/placeholder.svg?height=400&width=300"
        />
      </div>
    </motion.div>
  )
}
