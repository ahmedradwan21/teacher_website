import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/201xxxxxxxxx"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-xl shadow-green-500/30 hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        تواصل واتساب
      </span>
    </a>
  )
}
