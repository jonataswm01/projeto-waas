"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
  title: string
  content: string
}

export function LegalModal({
  isOpen,
  onClose,
  onAccept,
  title,
  content,
}: LegalModalProps) {
  const handleAccept = () => {
    onAccept()
    onClose()
  }

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        {/* Overlay customizado com backdrop blur */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        
        {/* Content */}
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-3xl max-h-[90vh] translate-x-[-50%] translate-y-[-50%] flex flex-col bg-white rounded-2xl shadow-2xl border-0 overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {/* Header Fixo */}
          <div className="px-6 py-4 border-b border-slate-200 flex-shrink-0">
            <div className="flex items-center justify-between">
              <DialogPrimitive.Title className="text-xl font-bold text-slate-900">
                {title}
              </DialogPrimitive.Title>
              <DialogPrimitive.Close
                className="rounded-sm opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 p-1"
                aria-label="Fechar"
              >
                <X className="h-5 w-5 text-slate-600" />
              </DialogPrimitive.Close>
            </div>
          </div>

          {/* Body com Scroll */}
          <div className="px-6 py-4 flex-1 overflow-y-auto max-h-[60vh]">
            <div
              className="text-slate-700 leading-relaxed prose prose-slate max-w-none text-sm"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Footer Fixo */}
          <div className="px-6 py-4 border-t border-slate-200 flex-shrink-0 flex items-center justify-end gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="px-6"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleAccept}
              className="px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white"
            >
              Li e Concordo
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

