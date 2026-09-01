import { Calculator, BookOpen, TrendingUp, GraduationCap, Target } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Levels() {
  const { ref, isInView } = useInView(0.1)

  const levels = [
    { stage: 'ابتدائي', desc: 'أساسيات الجمع والطرح والضرب، بنبني ثقة الطفل في الأرقام', icon: Calculator, color: 'bg-primary-100 text-primary-600' },
    { stage: 'إعدادي', desc: 'كسور، نسب مئوية، معادلات بسيطة، تحضير للامتحانات', icon: BookOpen, color: 'bg-accent-100 text-accent-600' },
    { stage: 'ثانوي', desc: 'جبر، هندسة، تفاضل، تكامل، وتحضير للثانوية العامة', icon: TrendingUp, color: 'bg-primary-100 text-primary-600' },
    { stage: 'جامعي', desc: 'تحليل رياضي، جبر خطي، احتمالات، ورياضيات هندسية', icon: GraduationCap, color: 'bg-accent-100 text-accent-600' },
    { stage: 'تحضير SAT', desc: 'استراتيجيات حل مسائل SAT math، محاكاة حقيقية للاختبار', icon: Target, color: 'bg-primary-100 text-primary-600' },
  ]

  return (
    <section id="levels" ref={ref} className="py-24 bg-light relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">مستويات ومناهج</h2>
          <p className="text-gray-500">مش مهم إنت فين، المهم إنك عايز تتحرك</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200" />

          <div className="space-y-12 md:space-y-0">
            {levels.map((level, idx) => (
              <div key={idx} className={`relative md:flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 ${idx > 0 ? 'md:mt-16' : ''}`}>
                {/* Content */}
                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                    <div className={`w-12 h-12 rounded-xl ${level.color} flex items-center justify-center mb-4 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <level.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">{level.stage}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{level.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary-400 shadow-lg z-10 items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary-600" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
