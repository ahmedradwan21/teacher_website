import { useEffect } from 'react'
import { X, User, Clock } from 'lucide-react'

export default function NotificationToast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(onClose, 4000)
    return () => clearTimeout(timer)
  }, [toast, onClose])

  if (!toast) return null

  return (
    <div className="fixed top-24 left-4 z-50 max-w-xs animate-in slide-in-from-left fade-in duration-300">
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-primary-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-dark">{toast.name}</p>
          <p className="text-xs text-gray-500">{toast.action}</p>
          <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-1">
            <Clock className="w-3 h-3" />
            {toast.time}
          </p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
