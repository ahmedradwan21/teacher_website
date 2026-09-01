import { useState } from 'react'
import { ArrowLeft, Star, Award, Users, Play, X, ChevronDown } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'

// TODO: replace with real teacher photo
const TEACHER_PHOTO = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=600&fit=crop&crop=face"

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)
  const studentsCount = useCountUp(500, 2000, '+')
  const yearsCount = useCountUp(8, 2000, '+')
  const ratingCount = useCountUp(98, 2000, '%')

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-light via-white to-primary-50/30">
      {/* Floating shapes - lightweight, no 3D tilt on mobile */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-primary-200/20 rounded-full blur-[80px] animate-float" />
      <div className="absolute bottom-20 left-[5%] w-56 h-56 bg-accent-200/20 rounded-full blur-[60px] animate-float-delayed" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-bold text-primary-700">أستاذ [اسمك]</span>
              <span className="text-xs text-primary-400">|</span>
              <span className="text-xs text-primary-500">مدرس رياضيات خصوصي</span>
            </div>

            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-sm border border-primary-100">
                <Star className="w-3.5 h-3.5 text-accent-500 fill-accent-500" />
                <span className="text-xs font-medium text-gray-700">4.9/5 تقييم</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-sm border border-primary-100">
                <Award className="w-3.5 h-3.5 text-primary-500" />
                <span className="text-xs font-medium text-gray-700">8+ سنين خبرة</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 shadow-sm border border-primary-100">
                <Users className="w-3.5 h-3.5 text-accent-500" />
                <span className="text-xs font-medium text-gray-700">500+ طالب</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-dark">الرياضيات مش</span>
              <span className="block text-gradient mt-2">سحر ولا تعقيد</span>
              <span className="block text-xl md:text-2xl mt-3 text-gray-500 font-normal">مع مدرس يفهمك ويصبر عليك</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8 max-w-lg leading-relaxed">
              أكتر من 500 طالب حققوا تحسناً ملحوظاً. جلسات فردية مخصصة، متابعة يومية، وضمان تحسن الدرجات في الرياضيات.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#booking" className="bg-primary-600 text-white px-8 py-4 rounded-2xl inline-flex items-center gap-2 hover:bg-primary-700 transition font-bold shadow-lg shadow-primary-500/25">
                <span>احجز حصتك التجريبية المجانية</span>
                <ArrowLeft className="w-5 h-5" />
              </a>
              <button onClick={() => setShowVideo(true)} className="border-2 border-primary-200 text-primary-700 px-8 py-4 rounded-2xl inline-flex items-center gap-2 hover:bg-primary-50 transition font-bold bg-white">
                <Play className="w-5 h-5 fill-primary-600" />
                <span>شوف شرح نموذجي</span>
              </button>
            </div>

            <div className="flex gap-8">
              <div ref={studentsCount.ref}>
                <div className="text-3xl font-bold text-primary-600">{studentsCount.count}</div>
                <div className="text-sm text-gray-500">طالب نجح</div>
              </div>
              <div ref={yearsCount.ref}>
                <div className="text-3xl font-bold text-primary-600">{yearsCount.count}</div>
                <div className="text-sm text-gray-500">سنين خبرة</div>
              </div>
              <div ref={ratingCount.ref}>
                <div className="text-3xl font-bold text-primary-600">{ratingCount.count}</div>
                <div className="text-sm text-gray-500">نسبة رضا</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-100/50 to-accent-100/30 rounded-[2.5rem] blur-xl" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                {/* TODO: replace with real teacher photo */}
                <img src={TEACHER_PHOTO} alt="أستاذ [اسمك] - مدرس رياضيات" className="w-full max-w-sm mx-auto object-cover" />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-xl px-3 py-2 shadow-lg flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-accent-500" />
                  <span className="text-xs font-bold text-gray-700">رياضيات</span>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl p-3 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary-600 fill-primary-600" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-primary-600">+85%</p>
                      <p className="text-xs text-gray-500">متوسط التحسن</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-primary-600 transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">اكتشف المزيد</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setShowVideo(false)}>
          <div className="relative w-full max-w-3xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowVideo(false)} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors">
              <X className="w-8 h-8" />
            </button>
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl aspect-video flex items-center justify-center">
              <p className="text-white text-lg">🎬 هنا هيتم وضع فيديو شرح نموذجي</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
