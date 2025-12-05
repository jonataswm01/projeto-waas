"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type DocumentType = "cpf" | "cnpj"

interface DocumentInputProps {
  value: string
  onChange: (value: string, type: DocumentType) => void
  defaultType?: DocumentType
  error?: string
  className?: string
}

// Função para validar CPF (exportada para uso externo)
export function validateCPF(cpf: string): boolean {
  const cleanCPF = cpf.replace(/\D/g, "")
  
  if (cleanCPF.length !== 11) return false
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false // Todos os dígitos iguais

  let sum = 0
  let remainder

  // Valida primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleanCPF.substring(9, 10))) return false

  // Valida segundo dígito verificador
  sum = 0
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cleanCPF.substring(10, 11))) return false

  return true
}

// Função para validar CNPJ (exportada para uso externo)
export function validateCNPJ(cnpj: string): boolean {
  const cleanCNPJ = cnpj.replace(/\D/g, "")
  
  if (cleanCNPJ.length !== 14) return false
  if (/^(\d)\1{13}$/.test(cleanCNPJ)) return false // Todos os dígitos iguais

  let length = cleanCNPJ.length - 2
  let numbers = cleanCNPJ.substring(0, length)
  const digits = cleanCNPJ.substring(length)
  let sum = 0
  let pos = length - 7

  // Valida primeiro dígito verificador
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--
    if (pos < 2) pos = 9
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== parseInt(digits.charAt(0))) return false

  // Valida segundo dígito verificador
  length = length + 1
  numbers = cleanCNPJ.substring(0, length)
  sum = 0
  pos = length - 7
  for (let i = length; i >= 1; i--) {
    sum += parseInt(numbers.charAt(length - i)) * pos--
    if (pos < 2) pos = 9
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== parseInt(digits.charAt(1))) return false

  return true
}

// Função para aplicar máscara de CPF
function maskCPF(value: string): string {
  const cleanValue = value.replace(/\D/g, "")
  if (cleanValue.length <= 3) return cleanValue
  if (cleanValue.length <= 6) return `${cleanValue.slice(0, 3)}.${cleanValue.slice(3)}`
  if (cleanValue.length <= 9) return `${cleanValue.slice(0, 3)}.${cleanValue.slice(3, 6)}.${cleanValue.slice(6)}`
  return `${cleanValue.slice(0, 3)}.${cleanValue.slice(3, 6)}.${cleanValue.slice(6, 9)}-${cleanValue.slice(9, 11)}`
}

// Função para aplicar máscara de CNPJ
function maskCNPJ(value: string): string {
  const cleanValue = value.replace(/\D/g, "")
  if (cleanValue.length <= 2) return cleanValue
  if (cleanValue.length <= 5) return `${cleanValue.slice(0, 2)}.${cleanValue.slice(2)}`
  if (cleanValue.length <= 8) return `${cleanValue.slice(0, 2)}.${cleanValue.slice(2, 5)}.${cleanValue.slice(5)}`
  if (cleanValue.length <= 12) return `${cleanValue.slice(0, 2)}.${cleanValue.slice(2, 5)}.${cleanValue.slice(5, 8)}/${cleanValue.slice(8)}`
  return `${cleanValue.slice(0, 2)}.${cleanValue.slice(2, 5)}.${cleanValue.slice(5, 8)}/${cleanValue.slice(8, 12)}-${cleanValue.slice(12, 14)}`
}

export function DocumentInput({
  value,
  onChange,
  defaultType = "cnpj",
  error,
  className,
}: DocumentInputProps) {
  const [documentType, setDocumentType] = useState<DocumentType>(defaultType)
  const [localError, setLocalError] = useState<string>("")
  const [isTouched, setIsTouched] = useState(false)

  // Valida quando o valor muda
  useEffect(() => {
    if (!value) {
      if (isTouched) {
        setLocalError("Este campo é obrigatório.")
      } else {
        setLocalError("")
      }
      return
    }

    const cleanValue = value.replace(/\D/g, "")
    const expectedLength = documentType === "cpf" ? 11 : 14

    if (cleanValue.length < expectedLength) {
      if (isTouched) {
        setLocalError(
          documentType === "cpf"
            ? "CPF incompleto. Digite todos os 11 dígitos."
            : "CNPJ incompleto. Digite todos os 14 dígitos."
        )
      } else {
        setLocalError("")
      }
      return
    }

    const isValid = documentType === "cpf" 
      ? validateCPF(value) 
      : validateCNPJ(value)

    if (!isValid) {
      setLocalError(
        documentType === "cpf"
          ? "CPF inválido. Verifique os dígitos."
          : "CNPJ inválido. Verifique os dígitos."
      )
    } else {
      setLocalError("")
    }
  }, [value, documentType, isTouched])

  const handleTypeChange = (type: DocumentType) => {
    setDocumentType(type)
    setLocalError("")
    setIsTouched(false)
    onChange("", type)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    const maskedValue = documentType === "cpf" 
      ? maskCPF(inputValue) 
      : maskCNPJ(inputValue)
    
    setIsTouched(true)
    onChange(maskedValue, documentType)
  }

  // Prioriza erro externo, mas também mostra erro local se houver
  const displayError = error || localError

  return (
    <div className={cn("space-y-3", className)}>
      <Label className="text-slate-700">
        Identificação Fiscal *
      </Label>

      {/* Container: Toggle e Input lado a lado no desktop, empilhados no mobile */}
      <div className="flex flex-col md:flex-row gap-3 md:items-end">
        {/* Input com Máscara - Primeiro no mobile, segundo no desktop */}
        <div className="space-y-1 flex-1 order-2 md:order-1">
          <Input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder={
              documentType === "cpf"
                ? "000.000.000-00"
                : "00.000.000/0000-00"
            }
            className={cn(
              "w-full h-12 text-base border-slate-200 bg-white",
              "focus:ring-purple-500 focus:border-purple-500",
              displayError && "border-red-300 focus:ring-red-500 focus:border-red-500"
            )}
            maxLength={documentType === "cpf" ? 14 : 18}
          />
          {displayError && (
            <p className="text-sm text-red-600 mt-1">{displayError}</p>
          )}
        </div>

        {/* Seletor de Tipo - Toggle Estilo Aurora Light - Segundo no mobile, primeiro no desktop */}
        <div className="flex gap-2 p-1 bg-slate-100 rounded-lg w-fit order-1 md:order-2 md:flex-shrink-0">
          <button
            type="button"
            onClick={() => handleTypeChange("cpf")}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              documentType === "cpf"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            CPF
          </button>
          <button
            type="button"
            onClick={() => handleTypeChange("cnpj")}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              documentType === "cnpj"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            CNPJ
          </button>
        </div>
      </div>
    </div>
  )
}

