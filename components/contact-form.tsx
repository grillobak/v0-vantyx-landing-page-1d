"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/lib/toast"

// Esquema de validación con Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z
    .string()
    .email({
      message: "Por favor ingrese un email válido.",
    })
    .min(1, { message: "El email es obligatorio." }),
  phone: z
    .string()
    .regex(/^[0-9\s\-+$$$$]+$/, {
      message: "Por favor ingrese un número válido.",
    })
    .min(8, {
      message: "Por favor ingrese un número de teléfono válido.",
    }),
  company: z.string().min(2, {
    message: "Por favor ingrese el nombre de su empresa.",
  }),
  interest: z.string({
    required_error: "Por favor seleccione un área de interés.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

type FormValues = z.infer<typeof formSchema>

// Acción del servidor para manejar el envío del formulario
async function submitContactForm(values: FormValues, token: string) {
  try {
    // Aquí iría la lógica real para verificar el token de reCAPTCHA y enviar el formulario
    // Simulamos un retraso para mostrar el estado de carga
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulamos el envío del formulario a vantyx.ar@gmail.com
    console.log("Formulario enviado a vantyx.ar@gmail.com:", values)
    console.log("Token reCAPTCHA:", token)

    return { success: true }
  } catch (error) {
    console.error("Error al enviar el formulario:", error)
    return { success: false, error: "Error al enviar el formulario" }
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  // Inicializar el formulario con React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: "",
    },
  })

  // Cargar el script de reCAPTCHA
  useEffect(() => {
    // Verificar si el script ya está cargado
    if (window.grecaptcha) {
      setRecaptchaLoaded(true)
      return
    }

    // Función de callback para cuando reCAPTCHA se carga
    window.onRecaptchaLoad = () => {
      setRecaptchaLoaded(true)
    }

    // Cargar el script de reCAPTCHA
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoad"
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Limpiar
      document.head.removeChild(script)
      delete window.onRecaptchaLoad
    }
  }, [])

  // Ejecutar reCAPTCHA y enviar el formulario
  const executeRecaptcha = async (values: FormValues) => {
    if (!window.grecaptcha) {
      toast({
        title: "Error",
        description: "No se pudo cargar reCAPTCHA. Por favor, intente nuevamente.",
        variant: "destructive",
      })
      return
    }

    try {
      // Aquí iría la ejecución real de reCAPTCHA
      // Simulamos un token para este ejemplo
      const token = "simulated-recaptcha-token"

      const result = await submitContactForm(values, token)

      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Formulario enviado",
          description: "Nos pondremos en contacto contigo a la brevedad.",
        })
        form.reset()

        // Resetear el estado de éxito después de 5 segundos
        setTimeout(() => {
          setIsSuccess(false)
        }, 5000)
      } else {
        toast({
          title: "Error al enviar el formulario",
          description: result.error || "Por favor intente nuevamente más tarde.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error al enviar el formulario",
        description: "Por favor intente nuevamente más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Manejar el envío del formulario
  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    await executeRecaptcha(values)
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#1D3557] dark:text-[#F4A261] mb-4">Contáctanos</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Complete el formulario y un asesor se pondrá en contacto con usted a la brevedad. Los campos marcados con * son
        obligatorios.
      </p>

      {isSuccess ? (
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">¡Gracias por contactarnos!</h4>
          <p className="text-green-600 dark:text-green-400">
            Hemos recibido tu mensaje. Un asesor se comunicará contigo en las próximas 24 horas.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo *</FormLabel>
                    <FormControl>
                      <Input placeholder="Juan Pérez" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="ejemplo@empresa.com" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teléfono *</FormLabel>
                    <FormControl>
                      <Input placeholder="+54 379 123-4567" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre de su empresa" {...field} required />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿En qué estás interesado? *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} required>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione una opción" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="erp">Sistema ERP completo</SelectItem>
                      <SelectItem value="crm">Sistema CRM</SelectItem>
                      <SelectItem value="inventory">Gestión de inventario</SelectItem>
                      <SelectItem value="billing">Facturación electrónica</SelectItem>
                      <SelectItem value="reports">Reportes y análisis</SelectItem>
                      <SelectItem value="web">Desarrollo web profesional</SelectItem>
                      <SelectItem value="visual">
                        Asesoramiento sobre Vantyx Visual (uniformes y bolsas personalizadas)
                      </SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntenos sobre su empresa y sus necesidades..."
                      className="min-h-[120px]"
                      {...field}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-[#1D3557] hover:bg-[#152A45] text-white" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar mensaje"
              )}
            </Button>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
              Al enviar este formulario, acepta que sus datos sean procesados para contactarlo según nuestra política de
              privacidad.
            </p>
          </form>
        </Form>
      )}
    </div>
  )
}

// Declaración para TypeScript
declare global {
  interface Window {
    onRecaptchaLoad: () => void
    grecaptcha: any
  }
}
