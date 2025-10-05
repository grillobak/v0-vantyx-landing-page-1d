// Tipos para el sistema de membresía

export type MembershipLevel = "bronce" | "plata" | "oro"

export type BusinessType = "comercio" | "agropecuario" | "servicios" | "manufactura" | "construccion" | "salud"

export interface User {
  id: string
  name: string
  email: string
  phone: string
  businessType: BusinessType
  level: MembershipLevel
  avatar?: string
  referralCode: string
  referredCount: number
  registeredAt: Date
}

export interface Coupon {
  id: string
  code: string
  description: string
  discount: number
  expiresAt: Date
  isActive: boolean
}

export interface MembershipBenefit {
  id: string
  icon: any // Cambiar de React.ReactNode a any
  title: string
  description: string
}

export interface LevelInfo {
  name: MembershipLevel
  displayName: string
  color: string
  discount: number
  requiredReferrals: number
  benefits: string[]
}

export const MEMBERSHIP_LEVELS: Record<MembershipLevel, LevelInfo> = {
  bronce: {
    name: "bronce",
    displayName: "Bronce",
    color: "from-amber-600 to-amber-700",
    discount: 10,
    requiredReferrals: 0,
    benefits: [
      "10% de descuento en todos los planes",
      "Acceso a recursos exclusivos",
      "Soporte prioritario por email",
      "Actualizaciones tempranas",
    ],
  },
  plata: {
    name: "plata",
    displayName: "Plata",
    color: "from-gray-400 to-gray-500",
    discount: 15,
    requiredReferrals: 3,
    benefits: [
      "15% de descuento en todos los planes",
      "Cupones mensuales exclusivos",
      "Webinars y capacitaciones",
      "Soporte prioritario por WhatsApp",
      "Asesoría de implementación",
    ],
  },
  oro: {
    name: "oro",
    displayName: "Oro",
    color: "from-yellow-400 to-yellow-600",
    discount: 20,
    requiredReferrals: 10,
    benefits: [
      "20% de descuento en todos los planes",
      "Cupones premium mensuales",
      "Acceso anticipado a nuevas funciones",
      "Soporte 24/7 dedicado",
      "Consultoría personalizada",
      "Invitaciones a eventos exclusivos",
    ],
  },
}
