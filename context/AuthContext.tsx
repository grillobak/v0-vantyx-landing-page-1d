"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { User } from "@/types/membership"

interface AuthContextType {
  user: User | null
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: Partial<User>) => Promise<void>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Cargar usuario desde localStorage al montar
  useEffect(() => {
    const storedUser = localStorage.getItem("vantyx_user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        setIsLoggedIn(true)
      } catch (error) {
        console.error("Error parsing stored user:", error)
        localStorage.removeItem("vantyx_user")
      }
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Simular llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock user - en producción, esto vendría del backend
    const mockUser: User = {
      id: "1",
      name: "Juan Pérez",
      email,
      phone: "+54 379 123-4567",
      businessType: "comercio",
      level: "bronce",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=" + email,
      referralCode: "JUAN2024",
      referredCount: 0,
      registeredAt: new Date(),
    }

    setUser(mockUser)
    setIsLoggedIn(true)
    localStorage.setItem("vantyx_user", JSON.stringify(mockUser))
  }

  const register = async (userData: Partial<User>) => {
    // Simular llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name || "",
      email: userData.email || "",
      phone: userData.phone || "",
      businessType: userData.businessType || "comercio",
      level: "bronce",
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`,
      referralCode: generateReferralCode(),
      referredCount: 0,
      registeredAt: new Date(),
    }

    setUser(newUser)
    setIsLoggedIn(true)
    localStorage.setItem("vantyx_user", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    setIsLoggedIn(false)
    localStorage.removeItem("vantyx_user")
  }

  const updateUser = (userData: Partial<User>) => {
    if (!user) return

    const updatedUser = { ...user, ...userData }
    setUser(updatedUser)
    localStorage.setItem("vantyx_user", JSON.stringify(updatedUser))
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Función auxiliar para generar código de referido
function generateReferralCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let code = ""
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}
