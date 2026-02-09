"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const phoneNumber = "5511978361818"
  const message = encodeURIComponent(
    "Olá, gostaria de saber mais sobre o Agente VEP"
  )

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-70 animate-ping"></span>

        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition">
          <MessageCircle size={26} />
        </div>
      </div>
    </a>
  )
}
