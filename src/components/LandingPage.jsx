import { useState, useEffect } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'

// TODO: replace with real teacher photo
const TEACHER_PHOTO = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face"

export default function LandingPage({ onComplete }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-[200] bg-gradient-to-br from-dark via-primary-900 to-dark flex items-center justify-center overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-float"
            style={{
              width: `${20 + i * 15}px`,
              height: `${20 + i * 15}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className={`relative text-center max-w-lg mx-auto px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Photo */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 animate-pulse-slow" />
          <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-white/20">
            <img src={TEACHER_PHOTO} alt="أستاذ [اسمك]" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          أستاذ <span className="text-accent-400">[اسمك]</span>
        </h1>
        <p className="text-primary-200 text-lg mb-2">مدرس رياضيات خصوصي</p>
        <p className="text-gray-400 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
          أكتر من 8 سنين في مساعدة الطلاب يتخطوا حاجز الخوف من الرياضيات
        </p>

        {/* Stats row */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-xs text-gray-400">طالب</div>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">8+</div>
            <div className="text-xs text-gray-400">سنين</div>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-xs text-gray-400">رضا</div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onComplete}
          className="bg-accent-500 text-white px-10 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:bg-accent-600 transition shadow-xl shadow-accent-500/25 animate-bounce"
          style={{ animationDuration: '2s' }}
        >
          <span>اكتشف المزيد</span>
          <ArrowLeft className="w-5 h-5" />
        </button>

        <p className="text-gray-500 text-xs mt-6">اضغط للدخول للموقع</p>
      </div>
    </div>
  )
}
