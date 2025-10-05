"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useAuth } from "@/context/AuthContext"
import { toast } from "sonner"

/**
 * Props para LoginModal
 * @param isOpen - Controla la visibilidad del modal
 * @param onClose - Callback cuando se cierra el modal
 * @param onSwitchToRegister - Callback para cambiar al modal de registro
 */
interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToRegister: () => void
}

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  rememberMe: z.boolean().optional(),
})

type LoginFormData = z.infer<typeof loginSchema>

/**
 * Modal de Login
 * Permite a los usuarios iniciar sesión en Vantyx
 *
 * @example
 * ```tsx
 * <LoginModal
 *   isOpen={showLogin}
 *   onClose={() => setShowLogin(false)}
 *   onSwitchToRegister={() => {
 *     setShowLogin(false)
 *     setShowRegister(true)
 *   }}
 * />
 * ```
 */
export function LoginModal({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true)
    try {
      await login(data.email, data.password)

      toast.success("¡Bienvenido de nuevo!", {
        description: "Has iniciado sesión correctamente.",
      })

      onClose()
    } catch (error) {
      toast.error("Error al iniciar sesión", {
        description: "Email o contraseña incorrectos.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleForgotPassword = () => {
    toast.info("Recuperación de contraseña", {
      description: "Esta función estará disponible próximamente.",
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[420px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Bienvenido de nuevo</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              type="email"
              {...register("email")}
              placeholder="tu@email.com"
              className={errors.email ? "border-red-500" : "focus:border-teal-500"}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Contraseña */}
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              placeholder="••••••••"
              className={errors.password ? "border-red-500" : "focus:border-teal-500"}
            />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>

          {/* Recordarme y Olvidé contraseña */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="rememberMe" onCheckedChange={(checked) => setValue("rememberMe", checked as boolean)} />
              <Label htmlFor="rememberMe" className="text-sm font-normal cursor-pointer">
                Recordarme
              </Label>
            </div>
            <button type="button" onClick={handleForgotPassword} className="text-sm text-teal-600 hover:text-teal-700">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Botón submit */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Iniciando sesión...
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar Sesión
              </>
            )}
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            ¿No tienes cuenta?{" "}
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Regístrate
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
