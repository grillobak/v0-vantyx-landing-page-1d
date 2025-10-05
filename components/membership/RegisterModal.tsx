"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useAuth } from "@/context/AuthContext"
import { toast } from "sonner"

/**
 * Props para RegisterModal
 * @param isOpen - Controla la visibilidad del modal
 * @param onClose - Callback cuando se cierra el modal
 * @param onSwitchToLogin - Callback para cambiar al modal de login
 */
interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin: () => void
}

const registerSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Teléfono inválido"),
  businessType: z.enum(["comercio", "agropecuario", "servicios", "manufactura", "construccion", "salud"]),
  interests: z
    .object({
      soluciones: z.boolean(),
      visual: z.boolean(),
    })
    .refine((data) => data.soluciones || data.visual, {
      message: "Debes seleccionar al menos un interés",
    }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar los términos y condiciones",
  }),
})

type RegisterFormData = z.infer<typeof registerSchema>

/**
 * Modal de Registro
 * Permite a los usuarios crear una cuenta en Vantyx
 *
 * @example
 * ```tsx
 * <RegisterModal
 *   isOpen={showRegister}
 *   onClose={() => setShowRegister(false)}
 *   onSwitchToLogin={() => {
 *     setShowRegister(false)
 *     setShowLogin(true)
 *   }}
 * />
 * ```
 */
export function RegisterModal({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register: registerUser } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      interests: {
        soluciones: false,
        visual: false,
      },
      acceptTerms: false,
    },
  })

  const interests = watch("interests")

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true)
    try {
      await registerUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
        businessType: data.businessType,
      })

      toast.success("¡Cuenta creada exitosamente!", {
        description: "Bienvenido a Vantyx. Disfruta de tus beneficios exclusivos.",
      })

      reset()
      onClose()
    } catch (error) {
      toast.error("Error al crear cuenta", {
        description: "Por favor, intenta nuevamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Únete a Vantyx y obtén beneficios exclusivos
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          {/* Nombre completo */}
          <div className="space-y-2">
            <Label htmlFor="name">Nombre completo *</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Juan Pérez"
              className={errors.name ? "border-red-500" : "focus:border-teal-500"}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="juan@ejemplo.com"
              className={errors.email ? "border-red-500" : "focus:border-teal-500"}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              {...register("phone")}
              placeholder="+54 379 123-4567"
              className={errors.phone ? "border-red-500" : "focus:border-teal-500"}
            />
            {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
          </div>

          {/* Tipo de negocio */}
          <div className="space-y-2">
            <Label htmlFor="businessType">Tipo de negocio *</Label>
            <Select onValueChange={(value) => setValue("businessType", value as any)}>
              <SelectTrigger className={errors.businessType ? "border-red-500" : "focus:border-teal-500"}>
                <SelectValue placeholder="Selecciona tu sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="comercio">Comercio</SelectItem>
                <SelectItem value="agropecuario">Agropecuario</SelectItem>
                <SelectItem value="servicios">Servicios</SelectItem>
                <SelectItem value="manufactura">Manufactura</SelectItem>
                <SelectItem value="construccion">Construcción</SelectItem>
                <SelectItem value="salud">Salud</SelectItem>
              </SelectContent>
            </Select>
            {errors.businessType && <p className="text-sm text-red-500">{errors.businessType.message}</p>}
          </div>

          {/* Intereses */}
          <div className="space-y-2">
            <Label>Interés en *</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="soluciones"
                  checked={interests.soluciones}
                  onCheckedChange={(checked) => setValue("interests.soluciones", checked as boolean)}
                />
                <Label htmlFor="soluciones" className="font-normal cursor-pointer">
                  Vantyx Soluciones (ERP/CRM)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="visual"
                  checked={interests.visual}
                  onCheckedChange={(checked) => setValue("interests.visual", checked as boolean)}
                />
                <Label htmlFor="visual" className="font-normal cursor-pointer">
                  Vantyx Visual (Uniformes y bolsas)
                </Label>
              </div>
            </div>
            {errors.interests && <p className="text-sm text-red-500">{errors.interests.message as string}</p>}
          </div>

          {/* Términos */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="terms"
              {...register("acceptTerms")}
              onCheckedChange={(checked) => setValue("acceptTerms", checked as boolean)}
            />
            <Label htmlFor="terms" className="font-normal text-sm cursor-pointer">
              Acepto los términos y condiciones y la política de privacidad
            </Label>
          </div>
          {errors.acceptTerms && <p className="text-sm text-red-500">{errors.acceptTerms.message}</p>}

          {/* Botón submit */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creando cuenta...
              </>
            ) : (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Crear cuenta gratis
              </>
            )}
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            ¿Ya tienes cuenta?{" "}
            <button type="button" onClick={onSwitchToLogin} className="text-teal-600 hover:text-teal-700 font-medium">
              Inicia sesión
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
