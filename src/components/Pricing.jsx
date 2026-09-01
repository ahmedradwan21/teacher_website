import { Check, X, Zap, Star, Crown } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Pricing() {
  const { ref, isInView } = useInView(0.1)

  const plans = [
    {
      name: 'الحصة الفردية',
      desc: '60 دقيقة وجه لوجه',
      price: '200',
      period: 'الحصة',
      features: [
        { text: 'مناقشة مباشرة لأخطائك', included: true },
        { text: 'خطة مخصصة ليك لوحدك', included: true },
        { text: 'تسجيل الحصة متاح', included: true },
        { text: 'متابعة واتساب بعد الحصة', included: true },
        { text: 'واجبات محلولة + مراجعة', included: false },
        { text: 'تقرير أسبوعي', included: false },
      ],
      popular: false,
      icon: Zap,
    },
    {
      name: 'الباقة الشهرية',
      desc: '8 حصص + متابعة كاملة',
      price: '1,200',
      period: 'الشهر',
      features: [
        { text: '8 حصص شهرياً', included: true },
        { text: 'متابعة يومية عبر واتساب', included: true },
        { text: 'واجبات محلولة + مراجعة', included: true },
        { text: 'اختبارات أسبوعية', included: true },
        { text: 'تقرير أسبوعي لولي الأمر', included: true },
        { text: 'جلسة طوارئ مجانية', included: false },
      ],
      popular: true,
      icon: Star,
    },
    {
      name: 'الباقة الشاملة',
      desc: '12 حصة + مذكرات + متابعة 24/7',
      price: '1,800',
      period: 'الشهر',
      features: [
        { text: '12 حصة شهرياً', included: true },
        { text: 'متابعة 24/7 واتساب', included: true },
        { text: 'مذكرات مخصصة + واجبات', included: true },
        { text: 'اختبارات أسبوعية', included: true },
        { text: 'تقرير أسبوعي مفصل', included: true },
        { text: 'جلسات طوارئ غير محدودة', included: true },
      ],
      popular: false,
      icon: Crown,
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-[20%] w-64 h-64 bg-primary-200/20 rounded-full blur-[80px]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">الأسعار</h2>
          <p className="text-gray-500">شفافية تامة، مفيش مصاريف مخفية</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`bg-white rounded-3xl p-8 transition-all duration-700 ${plan.popular ? 'ring-2 ring-accent-400 shadow-xl shadow-accent-500/10 scale-105' : 'border border-gray-200 shadow-lg'} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 150}ms` }}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-accent-400 to-accent-500 text-white text-center py-2 text-sm font-bold rounded-t-3xl">
                  الأكثر طلباً
                </div>
              )}

              <div className={`w-14 h-14 rounded-2xl ${plan.popular ? 'bg-accent-100' : 'bg-primary-50'} flex items-center justify-center mb-6 ${plan.popular ? 'mt-6' : ''}`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-accent-600' : 'text-primary-600'}`} />
              </div>

              <h3 className="text-2xl font-bold text-slate-800 mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-slate-800">{plan.price}</span>
                <span className="text-gray-500 mr-2">ج.م / {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <div className="w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent-600" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 text-slate-400" />
                      </div>
                    )}
                    <span className={f.included ? 'text-gray-700' : 'text-gray-400'}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a href="#booking" className={`w-full py-3 rounded-xl text-center block font-bold transition-all ${plan.popular ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25' : 'border-2 border-primary-200 text-primary-700 hover:bg-primary-50'}`}>
                {plan.popular ? 'احجز دلوقتي' : 'ابدأ الآن'}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-50 rounded-full px-6 py-3 border border-primary-100">
            <Check className="w-5 h-5 text-accent-600" />
            <span className="text-sm text-gray-700">ضمان استرداد كامل خلال 7 أيام • جلسة تجريبية مجانية</span>
          </div>
        </div>
      </div>
    </section>
  )
}
