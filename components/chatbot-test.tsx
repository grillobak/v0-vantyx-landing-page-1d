"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ChatbotTest() {
  const [testResults, setTestResults] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)

  const runTests = async () => {
    setIsRunning(true)
    setTestResults([])
    const results: string[] = []

    // Test 1: Verificar que la API responde
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "Hola" }],
        }),
      })

      if (response.ok) {
        results.push("✅ API responde correctamente")
      } else {
        results.push(`❌ API error: ${response.status}`)
      }
    } catch (error) {
      results.push(`❌ Error de conexión: ${error}`)
    }

    // Test 2: Verificar streaming
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "¿Qué módulos tiene Vantyx?" }],
        }),
      })

      if (response.body) {
        const reader = response.body.getReader()
        const decoder = new TextDecoder()
        let hasContent = false

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = decoder.decode(value)
          if (chunk.includes("text-delta")) {
            hasContent = true
            break
          }
        }

        if (hasContent) {
          results.push("✅ Streaming funciona correctamente")
        } else {
          results.push("❌ Streaming no funciona")
        }
      }
    } catch (error) {
      results.push(`❌ Error en streaming: ${error}`)
    }

    // Test 3: Verificar conocimiento específico
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: "¿Cuánto cuesta el plan profesional?" }],
        }),
      })

      if (response.ok) {
        const reader = response.body?.getReader()
        const decoder = new TextDecoder()
        let content = ""

        if (reader) {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            content += decoder.decode(value)
          }

          if (content.includes("75.000") || content.includes("75000")) {
            results.push("✅ Conocimiento específico correcto")
          } else {
            results.push("❌ Conocimiento específico incorrecto")
          }
        }
      }
    } catch (error) {
      results.push(`❌ Error en test de conocimiento: ${error}`)
    }

    setTestResults(results)
    setIsRunning(false)
  }

  return (
    <div className="fixed top-4 left-4 z-50 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg border max-w-sm">
      <h3 className="font-semibold mb-2">Test del Chatbot</h3>
      <Button onClick={runTests} disabled={isRunning} className="mb-4 w-full">
        {isRunning ? "Ejecutando tests..." : "Ejecutar Tests"}
      </Button>
      <div className="space-y-1">
        {testResults.map((result, index) => (
          <p key={index} className="text-sm">
            {result}
          </p>
        ))}
      </div>
    </div>
  )
}
